//const mysql = require('mysql');
//const dotenv = require('dotenv').config()
const { Dbpg } = require ('Dbpg')
const { DB_HOST, 
        DB_USER, 
        DB_PORT, 
        DB_NAME,    
        DB_PASSWORD } = process.env

module.exports = class Db {
    constructor() {
    /*data = mysql.createConnection({*/
    this.pg = new Dbpg ({
        host: DB_HOST,
        user: DB_USER,
        port: DB_PORT,
        password: DB_PASSWORD,
        database: DB_NAME
    });
    //connect() {
        //this.pg.connect()
        this.pg.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                return;
            }
            console.log('Connected');
        });
    }
}