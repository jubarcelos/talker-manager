const fs = require('fs').promises;

const updateTalker = async (req, res) => {
  const { id } = req.params;
  const { age, name, talk } = req.body;
  try {
    const fileContent = await fs.readFile('talker.json', 'utf8');
    const fileJSContent = JSON.parse(fileContent);
    console.log(fileJSContent);
    const findTalker = fileJSContent.find((talker) => talker.id === +id).id;
    console.log(id);
    const updatedTalkers = fileJSContent.filter((talker) => talker.id !== +id);
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