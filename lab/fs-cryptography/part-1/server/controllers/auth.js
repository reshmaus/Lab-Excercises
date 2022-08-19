const bcrypt = require("bcryptjs");

const users = [];

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
     const { username, password } = req.body
     console.log(req.body)
      for (let i = 0; i < users.length; i++) {

        if (users[i].username === username && password === password) {
          const userExicts = bcrypt.compareSync(password, users[i].passwordHash )
          if(userExicts){
            let userToReturn = {...users[i]};
          delete userToReturn.passwordHash
          return res.status(200).send(userToReturn)
          }
          
        }
      }
       res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const { username, email, firstName, lastName, password } = req.body
      const salt = bcrypt.genSaltSync(8);
      console.log(salt);
      const passwordHash= bcrypt.hashSync(password,salt);
      console.log(passwordHash);

      let user = {
        username,
        email,
        firstName,
        lastName,
        passwordHash
      }

      users.push(user);
      let userToReturn = {...user};

      delete userToReturn.passwordHash
        console.log('Registering User')
     
        console.log(req.body)
        users.push(req.body)
        res.status(200).send(req.body)
    }
}