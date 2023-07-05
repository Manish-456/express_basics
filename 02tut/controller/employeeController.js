const data = {
  employee: require("../models/employeesModel.json"),
  setNewEmployee: function (data) {
    this.employee = data;
  },
};
exports.getAllEmployees = (req, res) => {
  res.json(data.employee);
};

exports.createEmployee = (req, res) => {
  const id = data.employee.length + 1 || 1;
  const { name, website, company } = req.body;
  if (!name || !website || !company) {
    return res.status(422).json({
      message: "All Fields are required ⚠",
    });
  }
  const newEmployee = {
    id,
    name,
    website,
    company,
  };

  data.setNewEmployee([...data.employee, newEmployee]);
  return res.status(201).json(data.employee);
};

exports.updateEmployee = (req, res) => {
  const { id, name, company, website } = req.body;
  const targetedEmployee = data.employee.find((emp) => emp.id === id);
  if (!targetedEmployee) return res.status(404).send("Employee not found ⚠");
  if (name) {
    targetedEmployee.name = name;
  } else if (company) {
    targetedEmployee.company = company;
  } else if (website) {
    targetedEmployee.website = website;
  } else {
    return res.status(400);
  }
  return res.status(200).json(data.employee);
};

exports.deleteEmployee = (req, res) => {
  const { id } = req.body;
  if (!id)
    return res.status(401).json({
      error: "id required",
    });
  const filteredEmployee = data.employee.filter(
    (emp) => emp.id !== parseInt(id)
  );

  data.setNewEmployee(filteredEmployee);
  return res.status(200).json(data.employee);
};

exports.getAnEmployee = (req, res) => {
  const { id } = req.params;
  const targetedEmployee = data.employee.find((emp) => emp.id === parseInt(id));
  return res.json(targetedEmployee);
};
