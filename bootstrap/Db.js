const { Client } = require('pg')
const APP = require('../config/app.js')

module.exports = class Db {
    constructor() {
        
        console.log('DB_NAME:', APP.dbName)

        this.client = new Client ({
            host: APP.dbHost,
            user: APP.dbUser,
            port: APP.dbPort,
            password: APP.dbPassword,
            database: APP.dbName,
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