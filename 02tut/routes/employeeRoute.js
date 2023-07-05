const express = require("express");
const {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  getAnEmployee,
  deleteEmployee,
} = require("../controller/employeeController");
const ROLES_LIST = require("../config/roles");
const verifyRoles = require("../middleware/verifyRoles");

const router = express.Router();

router
  .route("/")
  .get(getAllEmployees)
  .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), createEmployee)
  .patch(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), updateEmployee)
  .delete(verifyRoles(ROLES_LIST.Admin), deleteEmployee);

router.get("/:id", getAnEmployee);

module.exports = router;
