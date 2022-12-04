const functions = require("firebase-functions");
const mainFile = require(__dirname + '/server/main')
exports.ngssr = functions.https.onRequest(mainFile.app()) 
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
