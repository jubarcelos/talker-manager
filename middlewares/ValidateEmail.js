const validateEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email || email.length === 0) {
      return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    // Site onde encontrei uma dica de fazer uma rápida verificação de email usando regex. https://backefront.com.br/validacao-email-javascript/
    const valid = /\S+@\S+\.\S/;
    if (valid.test(email) === false) {
      return res.status(400)
        .json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = validateEmail; 