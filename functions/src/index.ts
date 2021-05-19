import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {CallableContext} from "firebase-functions/lib/providers/https";


admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const auth = functions.https.onCall((data, context: CallableContext) => {

    console.log(data);
    return context.auth;

});


export const authContext = functions.https.onCall((data, context: CallableContext) => {

    console.log(data)
    return context.rawRequest.headers;
});