const fs = require('fs').promises;

const updateTalker = async (req, res) => {
  const { id } = req.params;
  const { age, name, talk } = req.body;
  try {
    const fileContent = await fs.readFile('talker.json', 'utf8');
    const fileJSContent = JSON.parse(fileContent);
    const findTalker = fileJSContent.find((talker) => talker.id === +id).id;
    const updatedTalkers = fileJSContent.map((talker) => (talker.id === +id),
     { age, id: findTalker, name, talk });
    const updatedTalker = { age, id: findTalker, name, talk };
    updatedTalkers.push(updatedTalker);
    const fileJsonContent = JSON.stringify(updatedTalkers);
    await fs.writeFile('talker.json', fileJsonContent);
    return res.status(200).json(updatedTalker);
  } catch (error) {
    console.error(error);
  }
};

module.exports = updateTalker; 