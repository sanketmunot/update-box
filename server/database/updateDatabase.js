const Update = require("../models/updateModel");

function findUpdateByDateEmail(date, email) {
    
}

async function findUpdateByEmail(email) {
    try{
        result = await Update.find({email}).limit(7).sort({updateDate: -1})
        return result
    }
    catch(e){
        console.log(e);
        return false
    }
}

async function createNewUpdate(data) {
    const newUpdate = new Update(data)
    try{
    let result = await newUpdate.save()
    return result
    }
    catch(e){
        console.log(e);
        return false
    }
}

module.exports = {
  findUpdateByDateEmail,
  createNewUpdate,
  findUpdateByEmail
};
