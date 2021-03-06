var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var html_file = fs.readFileSync('index.html');
  response.send(html_file.toString());
});

app.configure(function(){
    app.use(express.static(__dirname + '/'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
