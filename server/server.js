const http = require('http')
const app = require('./app')


const port = process.env.port || 3000
const hostname = '127.0.0.1'



app.set('port', port)
app.set('hostname', hostname)



const server = http.createServer(app)

server.listen(port, hostname, () => {
    console.log(`running at http://${server.address().address}:${server.address().port}`)
})