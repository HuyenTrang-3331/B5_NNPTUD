const express = require("express");
const router = express.Router();

const roleFD = require("../FD/roleFD");

router.post("/roles", roleFD.createRole);

router.get("/roles", roleFD.getAllRoles);

router.get("/roles/:id", roleFD.getRoleById);

router.put("/roles/:id", roleFD.updateRole);

router.delete("/roles/:id", roleFD.deleteRole);

module.exports = router;