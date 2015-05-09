var server = require('./server');
var PORT = 4500;
server.listen(PORT, function () {
  console.log('Server started on port ' + PORT.toString());
});