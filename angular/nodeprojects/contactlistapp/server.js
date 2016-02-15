var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
	console.log("I receive a GET request");

		person1 = {
		name : "tim",
		email: "tim@gmail.com",
		number: "111 -111"
	};

	person2 = {
		name: "emily",
		email: "emily@gmail.com",
		number: "2222"
	};

	person3 = {
		name: "john",
		email: "john@gmail.com",
		number: "33333"
	};

	var contactlist = [person1, person2, person3];
	res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");

