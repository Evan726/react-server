var express = require('express'),
	path = require('path'),
	consolidate = require('consolidate');


var app = express();
var port = 3002;
app.engine('ejs', consolidate.ejs);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));

app.use(express.static(path.join(__dirname, '../dist')));
require('./routes')(app);


//require('./routes')(app);

app.listen(port, function() {
	console.log('当前为发布环境，端口:' + port);
});