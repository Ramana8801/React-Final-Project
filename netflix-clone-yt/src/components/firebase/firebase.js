import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyD8hiU1EK7Yq-GXnAMIx41b0IOfoN4bvj4",
    authDomain: "netflix-clone-yt-b9e67.firebaseapp.com",
    projectId: "netflix-clone-yt-b9e67",
    storageBucket: "netflix-clone-yt-b9e67.appspot.com",
    messagingSenderId: "983163509215",
    appId: "1:983163509215:web:855533674dd20c082c0c6a"
  }

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const auth= firebase.auth();

  export{auth}