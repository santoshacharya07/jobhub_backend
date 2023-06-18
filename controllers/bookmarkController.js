const Bookmark = require("../models/Bookmark");
const Job=require("../models/Job");

module.exports = {
createBookmark: async (req, res) => {
const jobId=req.body.job;

try{
const job =await Job.findById(jobId);

if(!job){
    return res .status(404).json({error:"Job not found"});
}
const newBook= new Bookmark({job:job,userId: req.user.id});

const savedBookmark= await newBook.save();
const{__v, updatedAt, ...newBookmarkInfo}=savedBookmark._doc;
res.status(200).json(newBookmarkInfo)
}catch(error){
res.status(500).json(error)
}
},

deleteBookmark:  async (req, res) => {
        
        try{
        await Bookmark.findByIdAndDelete(req.params.id);
        res.status(200).json("Bookmark Successfully Deleted")
        }catch(error){
        res.status(500).json(error)
        }
            },

getBookmarks:  async (req, res) => {
                try{
                    const bookmarks=await    Bookmark.find({userId:req.params.userId});
               res.status(200).json(bookmarks)
                }catch(error){
                res.status(500).json(error)
                }
                    },

}