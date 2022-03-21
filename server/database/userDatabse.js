const User = require("../models/usersModel")


async function findUser(email){
    result =await User.findOne({email})
    return result
}

async function createUser(data){
    const newUser = new User(data)
    try{
    let result = await newUser.save()
    return result
    }
    catch(e){
        console.log(e);
        return false
    }
    
}


module.exports = {
    findUser,
    createUser
}