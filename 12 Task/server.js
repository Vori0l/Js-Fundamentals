const http = require('http');
const os = require('os');
const path = require('path');

http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('<h2>System information</h2>');
	res.write('<br>')
	res.write('User name:' + os.userInfo().username);
	res.write('<br>')
	res.write('User system:' + os.type());
	res.write('<br>')
	res.write('System work time:' + Math.floor(os.uptime() / 60) + 'minutes');
	res.write('<br>')
	res.write('Current work directory:' + path.dirname(__filename));
	res.write('<br>')
	res.write('Server file name:'+ path.basename(__filename))
	res.end();


}).listen(5000);


// res.statusCode = 200;
// const UserInf = {
// 	username: os.userInfo().username,
// 	system: os.userInfo().system
// };
// const Write = 