const User = require("../models/User");

const signUpService = {
    create: async (object) => {
        try {
            const { name, email, password } = object;
            const result = await User.create({
                name,
                email,
                user_password: password,
            });
            if (!result) {
                return null;
            }
            return true;
        } catch (err) {
            return false;
        }
    },
};

module.exports = signUpService;
