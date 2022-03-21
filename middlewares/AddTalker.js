const fs = require('fs').promises;

const setTalker = async (req, res) => {
  const { id, name, age, talk } = req.body;
  try {
    const fileContent = await fs.readFile('talker.json', 'utf8');
    const fileJSContent = JSON.parse(fileContent);
    fileJSContent.push({ id, name, age, talk });
    const fileJsonContent = JSON.stringify(fileJSContent);
    fs.writeFile('talker.json', fileJsonContent);
    return res.status(201).json(fileJSContent);
  } catch (error) {
    console.error(error);
  }
};

module.exports = setTalker; 