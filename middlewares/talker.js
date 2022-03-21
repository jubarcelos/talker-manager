const fs = require('fs').promises;

const getTalker = async (req, res) => {
try {
const fileStringContent = await fs.readFile('talker.json', 'utf-8');
// O método JSON.parse() analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string
const fileJsContent = JSON.parse(fileStringContent);
return res.status(200).json(fileJsContent);
} catch (error) {
 return res.status(200).json(console.error(error));
}
};

module.exports = getTalker; 