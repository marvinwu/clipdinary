const alfy = require('alfy');
const cloudinary = require('cloudinary');
require('dotenv').config();

// Cloudinary settings, read secrets. Read from .env-file
cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET
});

// Settings for path, filename and cloudinary folder name. Read from the .env-file
const fileSettings = {
  pathname: process.env.PATHNAME,
  filename: process.env.FILENAME,
  foldername: process.env.FOLDERNAME,
};
// Upload file to Cloudinary. Get back https image link, copy to the clipboard
cloudinary.v2.uploader.upload(
  `./target.png`,
  function(error, result) {
    console.log(result.secure_url);
  }
);

