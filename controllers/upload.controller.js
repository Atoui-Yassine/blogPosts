const UserModel=require('../models/user.model')
const { uploadErrors } = require('../utils/errors.utils')

const {promisify}=require('util')
const uploadFile=require('../config/uploadFile')



module.exports.uploadProfil =(req,res, next) =>{
  
  uploadFile.upload(req, res, function (err) {
   
    

     
     try {
      console.log(req.files[0])
      if(req.files.length === 0)throw Error("file invalid") 
    if(
      
      req.files[0].mimetype != "image/jpg" &&
      req.files[0].mimetype != "image/png"  &&
      req.files[0].mimetype != "image/jpeg"  
      
      )
      
    throw  Error("invalide file")
    if(req.files[0].size > 5000000) throw Error("max size")
   
} catch (err) {
    const errors= uploadErrors(err);
    console.log(err.message)
     return res.status(201).json({errors});
    
}

  
      UserModel.findByIdAndUpdate(
        req.body.userId,
        {$set: {picture : "/upload/"+req.files[0].originalname }},
        {new:true, upsert:true,setDefaultsOnInsert:true},
     
      (err,docs)=>{
        if(!err) return res.send(docs)
        else return res.status(500).send({message : err})
      }
      )
    
    }


  )
 
}
