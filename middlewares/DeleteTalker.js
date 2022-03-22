const fs = require('fs').promises;

const updateTalker = async (req, res) => {
  const { id } = req.params;
  try {
    const fileContent = await fs.readFile('talker.json', 'utf8');
    const fileJSContent = JSON.parse(fileContent);
    const updatedTalkers = fileJSContent.filter((talker) => talker.id !== +id);
    const fileJsonContent = JSON.stringify(updatedTalkers);
    fs.writeFile('talker.json', fileJsonContent);
    return res.status(204).end();
  } catch (error) {
    console.error(error);
  }
};

module.exports = updateTalker; 