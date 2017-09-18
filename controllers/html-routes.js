var path = require ("path");

module.exports = function(app) {

	app.get("/", function(req, res) {
		//res.sendFile(path.join(_dirname, "./public/index.html"));
		res.render("home");
	});

	app.get("/register", function(req, res) {
		//res.sendFile(path.join(_dirname, "./public/register.html"));
		res.render("register");
	});

	app.get("/results", function(req, res) {
		const firstName = req.query.firstName;
		const jewelry = req.query.jewelry;
		const image = req.query.image;

		res.render("results", {firstName: firstName, jewelry: jewelry, image: image});
		//res.sendFile(path.join(_dirname, "./public/results.html"));
	});
};