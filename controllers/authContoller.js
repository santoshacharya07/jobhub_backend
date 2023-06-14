const User = require("../models/User");
const CryptoJS= require("crypto-js");
module.exports = {
    createUser: async (req, res) => {
const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    //CryptoJS.DES.encrypt(req.body.password,process.env.SECRET);
    password: CryptoJS.DES.encrypt(req.body.password,process.env.SECRET).toString(),
});
try{
const savedUser=await newUser.save();
res.status(201).json(savedUser);
}catch(error){
res.status(500).json(error)
}

},

//login user
loginUser:async (req,res)=>{
    try{
const user =await User.findOne({email:req.body.email});
!user && res.status(401).json("Wrong Login Details");

const decryptedpass = CryptoJS.DES.decrypt(user.password,process.env.SECRET);
const depassword=decryptedpass.toString(CryptoJS.enc.Utf8);
depassword!==req.body.password && res.status(401).json("Wrong Password");

const{password,__v, createdAt, ...others}=user._doc;
res.status(200).json(others);
    }catch(error){
res.status(500);
    }
}


}


// module.exports = {
//     updateUser: async (req, res) => {

//     },


// }
