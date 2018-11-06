import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA3Ty9b5nIOF_WD5_ZqGorYOUsCfGyqNGU",
  authDomain: "expensify-10efa.firebaseapp.com",
  databaseURL: "https://expensify-10efa.firebaseio.com",
  projectId: "expensify-10efa",
  storageBucket: "expensify-10efa.appspot.com",
  messagingSenderId: "107846867232"
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

/*
database.ref("Expenses").on("child_removed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});
database.ref("Expenses").on("child_changed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("Expenses").on("child_added", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

database.ref("Expenses").on("value", snapshot => {
  const Expenses = [];
  snapshot.forEach(childSnap => {
    Expenses.push({
      id: childSnap.key,
      ...childSnap.val()
    });
  });
  console.log(Expenses);
});
/*
database.ref("Expenses").push({
  discription: "Rent",
  notes: " for two months",
  amount: 4000,
  createdAt: 1000
});
*/

/*

database.ref().on("value", snapshot => {
  const val = snapshot.val();
  const data = `${val.name} is a ${val.job.title} in ${val.job.Company}`;
  console.log(data);
});

database.ref().on("value", snapshot => {
  console.log(snapshot.val());
});

setTimeout(() => {
  database.ref("age").set(30);
}, 1000);

setTimeout(() => {
  database.ref().off();
}, 2000);

setTimeout(() => {
  database.ref("age").set(35);
}, 3000);


database
  .ref()
  .once("value")
  .then(snapshot => {
    console.log(snapshot.val());
  })
  .catch(e => {
    console.log("Error", e);
  });
*/
/*
database
  .ref()
  .set({
    name: "Mohamed",
    age: 30,
    isSingle: false,
    location: {
      city: "cairo",
      country: "Egypt"
    }
  })
  .then(() => {
    console.log("Data added");
  })
  .catch(e => {
    console.log("this fiels", e);
  });
*/
/*
database.ref().update({
  name: "Abdelrahman",
  age: 35,
  isSingle: null,
  "location/city": "Nasr City",
  job: {
    title: "Front-end Developer",
    Company: "Smart iT"
  }
});*/
/*
database.ref().set({});
*/
/*
database
  .ref("isSingle")
  .remove()
  .then(() => {
    console.log("isSingle Removed");
  })
  .catch(() => {
    console.log("you don`t have permoisson");
  });
*/
