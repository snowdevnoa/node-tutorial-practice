const express = require('express');
const router = express.Router();

module.exports = router;
// POST method to insert data. From the normal form index.html file
router.post('/', (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(404).send(`Please provide a name`);
});
