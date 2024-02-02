let { people } = require('../../data');

// GET method
function getPeople(req, res) {
  res.status(200).json({ success: true, data: people });
}

// POST method
function createPerson(req, res) {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: 'please provide name value' });
  }

  res.status(201).json({ success: true, person: name });
}

// POST method with postman
function createPersonPostman(req, res) {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: 'please provide name value' });
  }

  res.status(201).json({ success: true, data: [...people, name] });
}

// PUT method
function updatePerson(req, res) {
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
}

// DELETE method
function deletePerson() {
  (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` });
    }

    const newPeople = people.filter((person) => person.id !== Number(id));
    res.status(200).json({ success: true, data: newPeople });
  };
}

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
