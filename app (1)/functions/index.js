const functions = require('firebase-functions');
const { Storage } = require("@google-cloud/storage");
const projectId = 'chess-king-council';
var gcs = new Storage ({
   projectId
});
const os = require("os");
const path = require("path");


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.onFileChange = functions.storage.object().onFinalize(event => {
   console.log(event);
   const bucket = event.bucket;
   const contentType = event.contentType;
   const filePath = event.name;
   console.log("File change detected, function execution started");
   
   if (path.basename(filePath).startsWith('renamed-')) {
      return;
   }

   const destBucket = gcs.bucket(bucket);
   const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath))
   const metadata = {contentType: contentType}

   return destBucket.file(filePath).download({
      destination: tmpFilePath
   }).then(() => {
      return destBucket.upload(tmpFilePath, {
         destination: 'renamed-' + path.basename(filePath),
         metadata: metadatas
      });
   });
   
});