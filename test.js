// Heshlash algoritmlar

// MD5, Sha1,2,3,4,5,6 bcrypt

// MD5 = 0.01s
// bcrypt = 0.2



const bcrypt = require('bcrypt')
const saltDegree = 10

async function genereteCrypt (data){
    let salt = await bcrypt.genSaltSync(saltDegree)
    let encrypt = await bcrypt.hashSync(data, salt)
    return encrypt
}

async function confirmHash(data, hash){
    let confirm = bcrypt.compareSync(data, hash)
    return confirm
}

module.exports = {
    confirmHash, genereteCrypt
}