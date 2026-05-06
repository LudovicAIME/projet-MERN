const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const uploadController = require('../controllers/upload.controller');
const { requireAuth } = require("../middleware/auth.middleware");
const multer = require("multer");
const upload = multer();

// auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// user DB
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id", requireAuth, userController.updateUser);
router.delete("/:id", requireAuth, userController.deleteUser);
router.patch("/follow/:id", requireAuth, userController.follow);
router.patch("/unfollow/:id", requireAuth, userController.unfollow);

// upload
router.post("/upload", requireAuth, upload.single("file"), uploadController.uploadProfil);

module.exports = router;
