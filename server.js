const express = require('express')
require("dotenv").config();
require("colors");

const app = express();
const{Pool,Client}=require("pg");

const port = 8080;
const cors=require("cors");

app.use(express.json());
app.use(cors());
const pool = new Pool();


app.get('/', (req, res) => {
  res.send('welcom to my API!')
});



app.get("/fighters", (req, res) => {
    pool
      .query("SELECT * FROM fighters;")
      .then((data) => res.send(data.rows))
      .catch((e) => res.sendStatus(500).send("Something went wrong"));
  });

  // parameterized queries
app.get("/fighters/:id", (req, res) => {
    const { id } = req.params;
    pool
      .query("SELECT * FROM fighters WHERE id=$1;", [id])
      .then((data) => res.json(data.rows))
      .catch((e) => res.sendStatus(500).json(e));
  });
  
  app.post("/fighters", (req, res) => {
    const { first_name, last_name, country_id, style } = req.body;
    pool
      .query(
        "INSERT INTO fighters (first_name, last_name, country_id, style) VALUES ($1, $2, $3, $4) RETURNING *",
        [first_name, last_name, country_id, style]
      )
      .then((data) => res.json(data.rows))
      .catch((e) => res.sendStatus(500).send(e));
  });


app.get("/time", (req, res)=>{
    pool.query('SELECT NOW()', (err,response)=>{
           res.send(response.rows);
           pool.end();
   });
   });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`.rainbow);
});