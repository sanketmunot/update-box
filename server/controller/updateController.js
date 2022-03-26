const { createNewUpdate, findUpdateByEmail, findUpdateByDateEmail } = require("../database/updateDatabase")

async function addnewUpdate(req,res){
   
    let checkIfExist = await findUpdateByDateEmail(req.body)
    if(checkIfExist){
        return res.status(302).send({
            msg: "update exist's for date, please used edit!"
        })
    }
    
   let newUpdate = await createNewUpdate(req.body)
   res.send(newUpdate ? newUpdate : 500);
}


async function getRecentUpdates(req,res){
    const email = req.headers['email']
    let updates = await findUpdateByEmail(email)
    res.status(200).send(updates)
}

module.exports = {
    addnewUpdate,
    getRecentUpdates
}