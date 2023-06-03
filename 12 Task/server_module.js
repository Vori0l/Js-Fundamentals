const http = require('http');
const os = require('os');
const greeting = require('./personalmodule');

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });

	let name = os.userInfo().username;
	res.write(`Data: ${greeting.date}`);
	res.write('<br>');
	res.write(greeting.showMessage(name));
	res.end();
	
}).listen(7000);



