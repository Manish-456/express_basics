const verifyRoles = (...allowedRoles) => {
 return (req, res, next) => {
    if(!req?.roles) return res.sendStatus(401);
    const rolesArray = [...allowedRoles];
    const result = req.roles.map(role => rolesArray.includes(role)).find(value => value === true);
   //  console.log("rolesArray : ", rolesArray);
   //  console.log("req.roles : ", req.roles);
   //  console.log("allowedRoles : ",allowedRoles);
   //  console.log("result is ", result);
    if(!result) return res.sendStatus(401);
    next();
 }
}

module.exports = verifyRoles;