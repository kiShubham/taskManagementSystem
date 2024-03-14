const router = require("express").Router();

const authController = require("../controllers/auth.controller");
const { authenticateToken } = require("../middlewares/authenticateToken");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/getsomeData", authenticateToken, authController.someData);

module.exports = router;
