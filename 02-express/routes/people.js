const express = require('express');
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controllers/people.js');

/*
before it was router.get('/api/people')
but whatever i set up as the path for the router in the app.js that is 
the base so in here it would just be router.get('/')
*/
router.get('/', getPeople);

/**************************************************************/

// POST method to insert data. From the form javascript.html using js
router.post('/', createPerson);

// Another POST route to test with postman
router.post('/postman', createPersonPostman);

/**************************************************************/

// PUT method, updating data
router.put('/:id', updatePerson);

/**************************************************************/
// DElETE method
router.delete('/:id', deletePerson);

/*
alternative to routes above

router.route('/').get(getPeople);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);


*/

// Export as router
module.exports = router;
