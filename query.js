// query a mysql database
require('dotenv').config();
mysql = require('mysql')

const con = mysql.createConnection({
  host: process.env.host
  ,user: process.env.user
  ,password: process.env.password
  ,database: process.env.database
})

query = 'select * from occupations;'
const result =  con.query(query, (err, rows) =>{
    if (err) throw err;
    // console.log(rows)
    rows.forEach(r => {
      console.log("name is %s, occupation is %s", r.name, r.occupation)
      console.log(`name is ${r.name}, occupation is ${r.occupation}`);
    });
  }
)
// console.log(result)
con.end()