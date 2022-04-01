const { Client } = require('pg')
const {   
    dbUser,
    dbHost,
    dbName,
    dbPassword,
    dbPort  } = require('../config/app.js')

module.exports = class Db {
    constructor() {
        
        console.log('DB_NAME:', dbName)

        this.client = new Client ({
            host: dbHost,
            user: dbUser,
            port: dbPort,
            password: dbPassword,
            database: dbName,
    });
        this.client.connect(function (err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                return;
            }
            console.log('Connected');
        });
    }
}