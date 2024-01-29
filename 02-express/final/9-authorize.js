/* Demonstration purposes as this would be more of using tokens to access 
databases and retrieving user data
*/
function authorize(req, res, next) {
  const { user } = req.query;
  if (user === 'john') {
    req.user = { name: 'john', id: 3 };
    next();
  } else {
    res.status(401).send('Unathorized User');
    next();
  }
}

module.exports = authorize;
