const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://admin:admin@omnistack-vkipb.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


// req.query => Acessar query params (para filtros)
// req.params => Acessar route params (para edição, delete)
// req.body => Acessar o corpo da requisição (para crição, edição)

app.use(express.json())
app.use(routes)

app.listen(3333)
