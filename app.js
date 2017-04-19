var http = require('http');
var fs = require('fs');
var next = function(){
	setTimeout(function(){
		console.log('In process.nextTick before read file function');
		console.time('Time taken to read file');
		for(var i = 0; i < 20 ; i++) {
			var contents = fs.readFileSync('img.jpg', 'utf8');
		}
		console.log('In process.nextTick after read file function');
		console.timeEnd('Time taken to read file');
		process.nextTick(next);
	},0);
}

var requestListener = function (req, res) {
  console.log('Client Request');
  res.writeHead(200);
  res.end('Hello, World!\n');
}

var server = http.createServer(requestListener);
server.listen(8080);

next();