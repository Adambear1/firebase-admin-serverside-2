const express = require("express");
const app = express();
const PORT = 3000;
const admin = require("firebase-admin")

const serviceAccount = require("")

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL:
})
app.use(express.json())
app.use(express.static("public"))

const database = admin.database()
const usersRef = database.ref("/users")
app.get("/", (req, res) => {
  res.send("index.html");
});

app.post("/save", (req, res) =>{
    const newData = {
        age: req.body.age,
        first_name: req.body.first_name
    };
    usersRef.child(req.body.user_id).update(newData);
});

app.delete("/remove", (req, res) =>{
    usersRef.child(req.body.user_id).remove()
},
usersRef.orderByValue().limitToLast(2).on("value", snapshot =>{
    console.log(snapshot.val())
})




app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
