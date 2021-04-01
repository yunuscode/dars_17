const DATA = require('../data')
const { generateCrypt } = require('../test')

module.exports = {
    SignUpGetController: (req, res) => {
        res.render('signup', {
            error: ""
        })
    },
    SignUpPostController: async (req, res) => {
        try {
            let {
                login,
                password
            } = req.body
            if (login && password) {
                if(DATA.find(x => x.login == login)) throw new Error("User Already exists")
                 
                 DATA.push({
                     id: DATA.length + 1,
                     login: login,
                     password: await generateCrypt(password)
                 })

                res.redirect('/')

            } else {
                throw new Error("Login or Password not found")
            }
        } catch (e) {
            res.render('signup', {
                error: e + ""
            })
        }
    },
}