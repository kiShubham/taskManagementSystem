const router = require("express").Router();

const authController = require("../controllers/auth.controller");
const { authenticateToken } = require("../middlewares/authenticateToken");

router.post("/register", authController.register);
router.get("/login", authController.login);
router.get("/getsomeData", authenticateToken, authController.someData);

module.exports = router;
