const User = require("../models/User");

/* CREATE USER */
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

/* GET ALL USER */
exports.getAllUsers = async (req, res) => {
    const users = await User.find({ deleted: false }).populate("role");
    res.json(users);
};

/* GET USER BY ID */
exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id).populate("role");
    res.json(user);
};

/* UPDATE USER */
exports.updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(user);
};

/* SOFT DELETE USER */
exports.deleteUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        { deleted: true },
        { new: true }
    );
    res.json(user);
};

/* ENABLE USER */
exports.enableUser = async (req, res) => {

    const { username, email } = req.body;

    const user = await User.findOne({ username, email });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.status = true;
    await user.save();

    res.json(user);
};

/* DISABLE USER */
exports.disableUser = async (req, res) => {

    const { username, email } = req.body;

    const user = await User.findOne({ username, email });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.status = false;
    await user.save();

    res.json(user);
};

/* GET USERS BY ROLE */
exports.getUsersByRole = async (req, res) => {

    const roleId = req.params.id;

    const users = await User.find({
        role: roleId,
        deleted: false
    }).populate("role");

    res.json(users);
};