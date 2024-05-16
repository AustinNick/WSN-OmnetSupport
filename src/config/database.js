import admin from "firebase-admin"
import serviceAccount from "./../key/liveomnet-firebase-adminsdk-d8ili-1c7148db80.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

export default admin