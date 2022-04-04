const Db = require("../../bootstrap/Db.js")

const db = new Db();
const results = db.client.query("SELECT id, name, email, password, created_at, updated_at FROM users");
const users = results.rows;

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(users)
        console.log(resolve(users))
    })
}

module.exports = {
    findAll,
}
