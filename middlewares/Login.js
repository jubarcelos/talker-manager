const randtoken = require('rand-token');
// https://www.npmjs.com/package/rand-token
const token = randtoken.generate(16);

const makeLogin = async (req, res) => {
  try {    
    return res.status(200).json({ token: `${token}` });
  } catch (error) {
    console.error(error);
  }
};

module.exports = makeLogin; 