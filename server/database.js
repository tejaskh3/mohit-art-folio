const mysql = require('mysql2');

const pool = mysql
  .createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'mohit-art-gallery'
  })
  .promise();

const result = await pool.query('Select * FROM Notes');
console.log(result);
