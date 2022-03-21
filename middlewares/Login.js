const randToken = require('rand-token');
// A npm to generate token: https://www.npmjs.com/package/rand-token
const tokenNumbersAndLetters = randToken.generate(16);

const makeLogin = async (req, res) => {
  try {    
    return res.status(200).json({ token: `${tokenNumbersAndLetters}` });
  } catch (error) {
    console.error(error);
  }
};

module.exports = makeLogin; 