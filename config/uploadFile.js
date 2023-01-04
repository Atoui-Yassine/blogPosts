const fs = require('fs')
const { uploadErrors } = require('../utils/errors.utils')
const multer =require("multer");


var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        var dir = './client/public/upload';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null, dir);
    },
    
    filename: function (req, file, callback) {
          
        callback(null, file.originalname);
        
    }
  });
  module.exports.upload =multer({storage: storage}).array('file', 12);
  