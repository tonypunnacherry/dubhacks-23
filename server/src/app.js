'use strict';

const express = require('express');
const app = express();

//const sqlite = require('sqlite');
//const sqlite3 = require('sqlite3');

const KEY = "AIzaSyA4PWGnIddgnLLmYsAfRKKRhi3b-FA4w7A"

const multer = require('multer');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(multer().none());

app.get("/hello", async(req, res) => {
  res.send("hello there");
})

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);