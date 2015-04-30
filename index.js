var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    var msg = "";
    for (var i=0; i<5; i++) {
        msg += cool();
    }
  response.send(msg);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
