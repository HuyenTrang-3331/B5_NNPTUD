const Role = require("../models/Role");

/* CREATE ROLE */
exports.createRole = async (req, res) => {
    try {
        const role = new Role(req.body);
        await role.save();
        res.json(role);
    } catch (err) {
        res.status(500).json(err);
    }
};

/* GET ALL ROLE */
exports.getAllRoles = async (req, res) => {
    const roles = await Role.find();
    res.json(roles);
};

/* GET ROLE BY ID */
exports.getRoleById = async (req, res) => {
    const role = await Role.findById(req.params.id);
    res.json(role);
};

/* UPDATE ROLE */
exports.updateRole = async (req, res) => {
    const role = await Role.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(role);
};

/* SOFT DELETE ROLE */
exports.deleteRole = async (req, res) => {
    const role = await Role.findByIdAndUpdate(
        req.params.id,
        { deleted: true },
        { new: true }
    );
    res.json(role);
};