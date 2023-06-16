const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyAndAuthorization, veryfyToken, verifyAndAdmin } = require("../middleware/verifyToken");


//update user

router.put("/:id", verifyAndAuthorization,userController.updateUser);

//delete user

router.delete("/:id", verifyAndAuthorization,userController.deleteUSer);

//get user
router.get("/:id", verifyAndAuthorization,userController.getUser);


//get user is admin 
router.get("/", verifyAndAdmin,userController.getAllUsers);

module.exports = router