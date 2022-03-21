const validatePassword = async (req, res, next) => {
  try {
  const { password } = req.body;
  if (!password || password.length === 0) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
  } catch (error) {
   console.error(error);
  }
  };
  
  module.exports = validatePassword; 