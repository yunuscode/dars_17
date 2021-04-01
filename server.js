const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`SERVER READY AT http://localhost:${PORT}`)
})

app.use('/assets',express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(sampleMiddleware)

// Middleware

app.set('view engine', 'ejs')

app.get(['/'], HomeGetController )
app.get(['/set'], SetGetController )

function HomeGetController (request, response){
    response.render('index')
}

function SetGetController (request, response){
    response.render('index')
}