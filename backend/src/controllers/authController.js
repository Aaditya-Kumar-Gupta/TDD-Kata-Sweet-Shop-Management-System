const authService = require("../services/authService");

const register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const result = await authService.loginUser(
      req.body.email,
      req.body.password
    );
    res.json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

module.exports = { register, login };
