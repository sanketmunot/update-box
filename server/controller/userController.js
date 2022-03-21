const { findUser, createUser } = require("../database/userDatabse");

async function addNewUser(req, res) {
  console.log(req.body);
  let result = await createUser(req.body);
  res.send(result ? result : 500);
}

async function getUser(req, res) {
  const email = req.headers["email"];
  let result = await findUser(email);
  res.send(result ? result : 400);
}

async function checkAddUser(req, res) {
  const { email, name } = req.body;
  let checkIfUserExist = await findUser(email);

  if (checkIfUserExist == null) {
    let result = await createUser({ email, name });
    console.log(result);
    res.status(201).send();
  } else res.send(200);
}

module.exports = {
  addNewUser,
  getUser,
  checkAddUser,
};
