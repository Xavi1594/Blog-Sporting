const express = require("express");
const router = express.Router();
const multer = require("multer");
const postsController = require("../controllers/postController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.get("/", postsController.getPosts);
router.get("/:id", postsController.getPostById);
router.post("/", upload.single("imagen"), postsController.createPost);
router.delete("/:id", postsController.deletePost);
router.put("/:id", upload.single("img_post"), postsController.updatePost);

module.exports = router;
