'use strict';
// Import the functions you need from the SDKs you need
//mport { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCIUiXGUMuMrXbsQTBxt4PArYHvfahNzT4",
//   authDomain: "dh23-mobilify.firebaseapp.com",
//   projectId: "dh23-mobilify",
//   storageBucket: "dh23-mobilify.appspot.com",
//   messagingSenderId: "622569152849",
//   appId: "1:622569152849:web:accb5ff710baacd2967370",
//   measurementId: "G-R7VZ9ZZMWX"
// };

// // Initialize Firebase
// const db = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const express = require('express');
const app = express();
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

const KEY = "AIzaSyA4PWGnIddgnLLmYsAfRKKRhi3b-FA4w7A"

const multer = require('multer');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(multer().none());

const db = new sqlite3.Database('data.db');

app.get("/hello", async(req, res) => {
  res.send("hello there");
})

app.get('/getuser', async (req, res) => {
  try {
    const user = req.query.user;
    if (!user) {
      return res.status(400).json({ error: 'User ID not provided' });
    }

    let query = "SELECT * FROM users WHERE user_id = ?";
    let query2 = "SELECT post_id FROM forum WHERE creator = ?"

    let db = await getDBConnection();
    let results = await db.all(query, [user]);
    let posts = await db.all(query2, [user]);

    await db.close();
    res.json({ user: results,
              posts: posts
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get('/searchtags', async (req, res) => {
  try {
    let tags = req.query.tags;
    console.log(tags);
    let allTags = byCommas(tags);
    console.log(allTags);

    let query = "SELECT post_id FROM tags WHERE tag LIKE '%" + tags + "%'";

    let db = await getDBConnection();
    let results = await db.all(query, [tags]);

    await db.close();
    res.json({ user: results,
              posts: posts
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

function byCommas(inputString) {
  const parts = inputString.split(',');
  const resultArray = parts.map(part => part.trim()).filter(Boolean);
  return resultArray;
}
/**
 * Establishes a database connection to the database and returns the database object.
 * Any errors that occur should be caught in the function that calls this one.
 * @returns {Object} - The database object for the connection.
 */
async function getDBConnection() {
  const db = await sqlite.open({
    filename: 'data.db',
    driver: sqlite3.Database
  });
  return db;
}
app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);