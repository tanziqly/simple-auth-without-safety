const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const PORT = 8081;
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signin",
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (`name`, `gmail`, `password`) VALUES (?)";
  const values = [req.body.name, req.body.gmail, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/signin", (req, res) => {
  const sql = "SELECT * FROM login WHERE `gmail` = ? AND `password` = ?";
  db.query(sql, [req.body.gmail, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is started. PORT: ${PORT}`);
});
