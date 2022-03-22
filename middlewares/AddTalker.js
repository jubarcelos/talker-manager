const fs = require('fs').promises;

const setTalker = async (req, res) => {
  const { age, name, talk } = req.body;
  try {
    const fileContent = await fs.readFile('talker.json', 'utf8');
    const fileJSContent = JSON.parse(fileContent);
    const lastId = fileJSContent.find((talker) => talker.id === (fileJSContent.length)).id;
    const actualId = lastId + 1;
    fileJSContent.push({ age, id: actualId, name, talk });
    const fileJsonContent = JSON.stringify(fileJSContent);
    await fs.writeFile('talker.json', fileJsonContent);
    return res.status(201).json(fileJSContent[fileJSContent.length - 1]);
  } catch (error) {
    console.error(error);
  }
};

module.exports = setTalker; 