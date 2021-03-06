const dotenv = require('dotenv').config()

const { DB_HOST, 
        DB_USER, 
        DB_NAME, 
        DB_PASSWORD, 
        DB_PORT } = process.env

        const dbHost = DB_HOST;
        const dbUser = DB_USER;
        const dbName = DB_NAME;
        const dbPassword = DB_PASSWORD;
        const dbPort = DB_PORT;

        const APP = {
            dbUser,
            dbHost,
            dbName,
            dbPassword,
            dbPort
        }

module.exports = APP