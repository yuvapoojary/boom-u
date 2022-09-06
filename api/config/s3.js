const aws = require('aws-sdk');
const mongoose = require('mongoose');

const S3 = new aws.S3({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

async function uploadFile(fileBuffer, mime) {
  const fileKey = new mongoose.Types.ObjectId().toHexString();

  const uploadParams = {
    Bucket: `${process.env.AWS_BUCKET_NAME}/boom`,
    Body: fileBuffer,
    Key: fileKey,
    ContentType: mime,
    ACL: 'public-read',
  };
  return S3.upload(uploadParams)
    .promise()
    .then((res) => `${process.env.AWS_BUCKET_URL}/${res.Key}`);
}

module.exports = uploadFile;
