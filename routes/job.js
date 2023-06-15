const router = require("express").Router();
const jobController = require("../controllers/jobController");
const { verifyAndAuthorization, veryfyToken, verifyAndAdmin } = require("../middleware/verifyToken");



// // POST JOB

// router.put("/:id", verifyAndAuthorization,jobController.createJob);


// //UPDATE JOB

// router.put("/:id", verifyAndAuthorization,jobController.updateJob);

// //DELETE JOB

// router.delete("/:id", verifyAndAuthorization,jobController.deleteJob);

// //GET JOB
// router.get("/:id", jobController.getJob);


// //GET JOBS 
// router.get("/", jobController.getAllJobs);

// //SEARCH JOBS 
// router.get("/search/:key", jobController.searchJob);

module.exports = router