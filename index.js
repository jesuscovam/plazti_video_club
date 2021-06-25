const app = require('express')()
const { config } = require('./config/index')
const moviesApi = require('./routes/movies')

moviesApi(app)

app.listen(config.port, function () {
  console.log(`listening at http://localhost:${config.port}`)
})
