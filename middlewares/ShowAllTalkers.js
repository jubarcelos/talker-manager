const fs = require('fs').promises;

const getTalkers = async (req, res) => {
try {
const fileStringContent = await fs.readFile('talker.json', 'utf-8');
const fileJSContent = JSON.parse(fileStringContent);
return res.status(200).json(fileJSContent);
} catch (error) {
 return res.status(200).json(console.error(error));
}
};

module.exports = getTalkers; 