const express = require('express');
const router = express.Router();

let { people } = require('../../../data');

/*
before it was router.get('/api/people')
but whatever i set up as the path for the router in the app.js that is 
the base so in here it would just be router.get('/')
*/
router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

/**************************************************************/

// POST method to insert data. From the form javascript.html using js
router.post('/', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: 'please provide name value' });
  }

  res.status(201).json({ success: true, person: name });
});

// Another POST route to test with postman
router.post('/postman', (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: 'please provide name value' });
  }

  res.status(201).json({ success: true, data: [...people, name] });
});

/**************************************************************/

// PUT method, updating data
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({ sucess: false, msg: `no person with ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

/**************************************************************/
// DElETE method
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));
  res.status(200).json({ success: true, data: newPeople });
});

// Export as router
module.exports = router;
