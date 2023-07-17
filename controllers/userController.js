const User = require('../models/User');

const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User Not found" });
        }
        res.json({ user });

    } catch (error) {
        res.status(500).json({ message: "Failed to get user" });
    }
};


module.exports = { getUserById };