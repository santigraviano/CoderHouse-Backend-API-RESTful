const path = require('path')
const express = require('express')
const routes = require('./routes')
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/productos', routes)

app.listen(PORT, () => { console.log(`Listening to port ${PORT}`) })