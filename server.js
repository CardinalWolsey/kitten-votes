var express = require('express');
var app = express();



app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  response.render('index');
});

app.get('/secret', function (req, res) {
  res.send('<img src="http://3.bp.blogspot.com/-HKhzQqAPOuI/UEUOHKsBoII/AAAAAAAAAAA/YMBdLwiuQQs/s1600/setec1.png" alt="Setec Astronomy" />');
});

app.use(function(req, res, next) {
  res.status(404).sendFile('404.html', {root: __dirname +'/public/'});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
