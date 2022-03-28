const UserController = require('../app/Controllers/UserController.js')

module.exports = class Router {
    constructor(req, res) {
        
        this.req = req
        this.res = res

    }
    getPostData(req) {

        return new Promise((resolve, reject) => {
            try {
                let body = ''

                req.on('data', (chunk) => {
                    body += chunk.toString()
                })

                req.on('end', () => {
                    resolve(body)
                })
            } catch (error) {
                reject(err)
            }
        })
    }
    
    get(url) {
        return new Promise((resolve, reject) => {
            try {
                resolve(url)
                if (this.req.method === 'GET' && url == '/') {
                    this.res.writeHead(200, { "Content-type": "text/plain" })
                    this.res.end()
                }
                if (this.req.method === 'GET' && url == '/users') {
                    console.log('test')
                }
            } catch (error) {
                reject(error)
            }
        })
    }
}