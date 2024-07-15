const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Admin1"
  });
//   con.connect((err) => {
//     if (err) {
//       console.error('Error connecting to the database:', err);
//       return;
//     }
//     console.log('Connected to the MySQL database.');
//   });
  
//   // Export the connection for use in other parts of your application
//   module.exports = con;
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('sudoGame'));


app.post('/login', (req, res) => {
  console.log('hi');
  const { username, password } = req.body;
  const query = 'SELECT * FROM login WHERE username = ? AND password = ?';

  con.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.send('An error occurred. Please try again.');
      return;
    }
   
    if (results.length > 0) {
      // Redirect to dashboard
      res.sendFile(__dirname + '/sudoGame/msg.html');
    } else {
      res.send('Invalid username or password.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});