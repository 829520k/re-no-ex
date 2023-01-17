const { Client } = require("pg");
const client = new Client({
    user : "admin",
    host : "127.0.0.1",
    database: "nodedb",
    password: "admin",
    port: "5432",
});

client.connect();

client.query("SELECT NOW()", (err, res) =>{
 console.log(err,res);
 client.end();
});