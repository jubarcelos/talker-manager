const validateName = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (name === '' || !name) {
      return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    if (name.length < 4) {
      return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    next();
  } catch (error) {
    console.error(error);
  }
};

const validateAge = async (req, res, next) => {
  try {
    const { age } = req.body;

    if (!age) {
      return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }
    if (age < 18) {
      return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
    next();
  } catch (error) {
    console.error(error);
  }
};

const validateTalk = async (req, res, next) => {
  try {
    const { talk } = req.body;
    if (!talk) {
      return res.status(400)
        .json({ 
          message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    }
    if (talk.rate === '' || talk.watchedAt === '') {
      return res.status(400).json({
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    }
    next();
  } catch (error) {
    console.error(error);
  }
};

const validateWatchedAt = async (req, res, next) => {
  try {
    const { talk: { watchedAt } } = req.body;
    const validData = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!watchedAt) {
      return res.status(400).json({
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    }
    if (validData.test(watchedAt) === false) {
      return res.status(400)
        .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    next();
  } catch (error) {
    console.error(error);
  }
};

const validateRate = async (req, res, next) => {
  try {
    const { talk: { rate } } = req.body;
    if (!rate) {
      return res.status(400)
        .json({ 
          message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    }
    if (rate < +1 || rate > +5) {
      return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
}; 