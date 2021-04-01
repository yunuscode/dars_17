const DATA = require('../data')


module.exports = {
    HomeGetController: (req, res) => {
        console.log(DATA);
        res.render('index')
    },
    HomePostController: (req, res) => {
        
    },
}