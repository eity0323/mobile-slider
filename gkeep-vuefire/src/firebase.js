import Firebase from 'firebase';

 let config = {
    apiKey: "AIzaSyAc36DS6K8EQ1LV8rLfX-vC_EMmgDuA_WQ",
    authDomain: "gkeepclone-6a88f.firebaseapp.com",
    databaseURL: "https://gkeepclone-6a88f.firebaseio.com",
    projectId: "gkeepclone-6a88f",
    storageBucket: "gkeepclone-6a88f.appspot.com",
    messagingSenderId: "12593950593"
  };


const app = Firebase.initializeApp(config);

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = app.database();