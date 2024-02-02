const express = require('express');
let { people } = require('./data');

const app = express();
const port = 7770;
// simple app that has a form that has a inputbox for name
app.use(express.static('./methods-public'));
/*
Unfortunately cannot add to the list of data. How do you add data?
This is where middleware comes in.
*/

/*parse the form data from the POST request and essentially 
add those values to req.body
*/
app.use(express.urlencoded({ extended: false }));

//parse json data
app.use(express.json());

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// POST method to insert data. From the normal form index.html file
app.post('/login', (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(404).send(`Please provide a name`);
});
/**************************************************************/

// POST method to insert data. From the form javascript.html using js
app.post('/api/people', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: 'please provide name value' });
  }

  res.status(201).json({ success: true, person: name });
});

// Another POST route to test with postman
app.post('/api/postman/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: 'please provide name value' });
  }

  res.status(201).json({ success: true, data: [...people, name] });
});

/**************************************************************/

// PUT method, updating data
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(id, name);
  /*
  My Code to find and update person

  function updatePeople() {
    const found = people.find((person) => person.id === Number(id));
    if (found) {
      people.forEach((person) => {
        if (person.id === Number(id)) {
          return (person.name = name);
        }
      });
      console.log(people);
      res.status(200).json(people);
    } else {
      res.status(404).send('person does not exist');
    }
  }
  updatePeople();
  */

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
app.listen(port, () => {
  console.log(`listening on server ${port}`);
});
