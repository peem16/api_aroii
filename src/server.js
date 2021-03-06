require("dotenv").config();
const { getReview } = require("./utils/firebaseFeed");

const express = require("express");


const app = express();
const port = process.env.PORT || 4000;




app.get(`/api/feed`, (req, res) => {
    getReview()
      .then(result => res.json(result))
      .catch(err => {
        res.status(500).end();
      });
  });


 
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });