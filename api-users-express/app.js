const express = require('express')

const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Users app is runing on port ${port}`)
})

//api routes
const index = require('./src/routes/index')
const usersRoute = require('./src/routes/users.routes')

app.use(express.json())

app.use(index)
app.use('/api', usersRoute)

module.exports = app