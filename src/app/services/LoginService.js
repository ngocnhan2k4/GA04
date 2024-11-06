const User = require("../models/User");

const loginService = {
    login: async (object) => {
        try {
            const { email, password } = object;
            const result = await User.findOne({
                where: {
                    email,
                    user_password: password,
                },
            });
            return result;
        } catch (err) {
            return false;
        }
    },
};

module.exports = loginService;
