
module.exports = function(portNumber){

	var requestResponseFn = function(req, res){
		res.writeHead(200, {"content-type": "application/json"});
		res.end('{"site" : "My take on IT"}');
	};

	require("http")
		.createServer(requestResponseFn)
		.listen(portNumber);
}