const LoginService = require("../services/LoginService");

const loginController = {
    index: (req, res) => {
        res.render("login");
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        const user = { email, password };
        try {
            const result = await LoginService.login(user);
            if (!result) {
                res.status(400).json({ error: "!!!Email không tồn tại!!!" });
                return;
            }
            req.session.user = result.name;
            //session cookie
            res.status(201).json({ error: null });
        } catch (err) {
            res.status(400).json({ error: err });
        }
    },
};

module.exports = loginController;
