const router = require("express").Router();
const { verifyAndAuthorization, veryfyToken, verifyAndAdmin } = require("../middleware/verifyToken");
 
const bookmarkController = require("../controllers/bookmarkController");


// CREATE BOOKMARKS
router.post("/",verifyAndAuthorization, bookmarkController.createBookmark);


// DELETE BOOKMARKS

router.delete("/:id", bookmarkController.deleteBookmark);


// GET BOOKMARKS
router.get("/:userId", bookmarkController.getBookmarks);



module.exports = router