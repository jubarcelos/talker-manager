const validateToke = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(req.headers);
    if (!authorization) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (authorization.length !== 16) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    next();
  } catch (error) {
    console.error(error);
  }
};

const validateName = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (name === '' || !name) {
      return res.status(401).json({ message: 'O campo "name" é obrigatório' });
    }
    if (name.length < 3) {
      return res.status(401).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    next();
  } catch (error) {
    console.error(error);
  }
};

const validateAge = async (req, res, next) => {
  try {
    const { age } = req.body;

    if (Number(age.length) === 0 || !age) {
      return res.status(401).json({ message: 'O campo "age" é obrigatório' });
    }
    if (age < 18) {
      return res.status(401).json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
    next();
  } catch (error) {
    console.error(error);
  }
};

const validateTalk = async (req, res, next) => {
  try {
    const { talk: { watchedAt, rate } } = req.body;
    const validData = /^\d{2}\/\d{2}\/\d{4}$/;
    if (validData.test(watchedAt) === false) {
      // return data instanceof Date && !isNaN(data);
      return res.status(401)
        .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    if (rate < +1 || rate > +5) {
      return res.status(401).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }

    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { validateToke, validateName, validateAge, validateTalk }; 