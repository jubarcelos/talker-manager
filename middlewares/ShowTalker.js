const fs = require('fs').promises;

const showTalker = async (req, res) => {
  const { q } = req.query;
  try {
    const fileStringContent = await fs.readFile('talker.json', 'utf-8');
    const fileJSContent = JSON.parse(fileStringContent);
    if (!q || q === '') {
      return res.status(200).json([]);
    }
    return res.status(200).json(fileJSContent
      .filter(((talker) => talker.name.includes(q))));
  } catch (error) {
    console.log('qui');
    return res.status(400).json(console.error(error));
  }
};

module.exports = showTalker; 