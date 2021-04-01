const express = require('express')
const { HomeGetController } = require('./controllers/HomeController')
const { LoginGetController, LoginPostController } = require('./controllers/LoginController')
const { SignUpGetController, SignUpPostController } = require('./controllers/SignUpController')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`SERVER READY AT http://localhost:${PORT}`)
})

app.use('/assets',express.static('public'))
app.use('/bootstrap',express.static('node_modules/bootstrap/dist'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(sampleMiddleware)

// Middleware

app.set('view engine', 'ejs')

app.get('/', HomeGetController)
app.get('/login', LoginGetController)
app.get('/signup', SignUpGetController)

app.post('/login', LoginPostController)
app.post('/signup', SignUpPostController)

// / => Asosiy sahifa
// /login => Login sahifa
// /signup => Ro'yxatdan o'tish

// /login => login, password => Kiritadi
// /signup => login, password => Ro'yxatdan o'tqazadi