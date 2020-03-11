const path = require('path');

module.exports = function(app) {
  app.get('/', function(req, res) {
    //go into a file call public and load a file call home.html
    res.sendFile(path.join(__dirname, '/../public', 'home.html'));
  });

  app.get('/survey', function(req, res) {
    //go into a file call public and load survey.html
    res.sendFile(path.join(__dirname, '/../public', 'survey.html'));
  });
};
