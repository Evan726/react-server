module.exports = function(app) {
	app.use('/login', function(req, res) {
		res.render('login.ejs');
	});
	app.use('/', require('./main'));
};