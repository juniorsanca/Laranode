/*const http = require("http");

const server = http.createServer()

server.on('request',(req, res) => {

        res.writeHead(200, { 'Content-type': 'text/html: charset=utf-8' })
        //res.write("Hello");
        res.end("Hello");
});

server.listen(3000);

const mysql = require('mysql');
const dotenv = require('dotenv').config()

const { DB_HOST, DB_PORT, DB_USER, DB_NAME, DB_PASSWORD } = process.env

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    port: DB_PORT,
    password: DB_PASSWORD,
    database: DB_NAME
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('You are connected to the database');
});
*/
/*
const http = require("http");
const PORT = process.env.PORT || 3000

const server = http.createServer()

const dotenv = require('dotenv').config()

const Db = require('./bootstrap/Db')
const db = new Db()
db.connect()

server.on("req", (req, res) => {
    switch (req.method) {
        case "GET":
            switch (req.url) {
                case "/users":
                    res.statusCode = 200
                    res.setHeader("Content-Type", "application/json")
                    res.write(JSON.stringify(req.users))
                    res.end()
                    break

                default:
                    res.statusCode = 404
                    res.write(`File not found (get): ${req.url}`)
                    res.end()
            }
            break

        case "POST":
            switch (req.url) {
                default:
                    res.statusCode = 404
                    res.write(`File not found (post) ${req.url}`)
                    res.end()
            }
            break

        case "PUT":
            switch (req.url) {
                default:
                    res.statusCode = 404
                    res.write(`File not found (put) ${req.url}`)
                    res.end()
            }
            break

        case "DELETE":
            switch (req.url) {
                default:
                    res.statusCode = 404
                    res.write(`File not found (delete) ${req.url}`)
                    res.end()
            }
            break

        default:
            res.statusCode = 405
            res.write("Method not allowed")
            res.end()
    }
})

server.listen(PORT, err => {
    err ? console.error(err) : console.log(`listening on port ${PORT}`)
})
*/

const http = require("http");
const url = require("url")

const Db = require("./boostrap/Db.js")
const UserController = require('./app/Controllers/UserController.js')
const routes = require('./routes/index.js')
const server = http.createServer((req, res) => {
    
    console.log('Serveur lancé dans le port 3000')
    const route = new routes(req, res)
    
});

server.listen(3000)

