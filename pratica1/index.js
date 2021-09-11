var restify = require('restify')

var server = restify.createServer({
  name: 'Pratica 1'
})

server.use(restify.plugins.bodyParser())

//Endpoints
const helloWorld = (req, res, next) => {
  res.setHeader('content-type', 'application/json')
  res.charSet('UTF-8')
  var now = new Date()
  res.send(`Hello World @ ${now}`)
  next()
}

server.get('/hello', helloWorld)

var port = process.env.PORT || 5000
server.listen(port, ()=>{
  console.log('%s rodando ', server.name)
})