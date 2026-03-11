const express = require("express");
const router = express.Router();

const userFD = require("../FD/userFD");

router.post("/users", userFD.createUser);

router.get("/users", userFD.getAllUsers);

router.get("/users/:id", userFD.getUserById);

router.put("/users/:id", userFD.updateUser);

router.delete("/users/:id", userFD.deleteUser);

router.post("/enable", userFD.enableUser);

router.post("/disable", userFD.disableUser);

router.get("/roles/:id/users", userFD.getUsersByRole);

module.exports = router;