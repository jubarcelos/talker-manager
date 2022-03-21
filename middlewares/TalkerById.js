const fs = require('fs').promises;

const getTalker = async (req, res) => {
try {
const { id } = req.params;
const fileStringContent = await fs.readFile('talker.json', 'utf-8');
const fileJSContent = JSON.parse(fileStringContent);
const actualId = fileJSContent.find((talker) => talker.id == id);
if (!actualId) {
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
}
return res.status(200).json(actualId);
} catch (error) {
 console.error(error);
}
};

module.exports = getTalker; 