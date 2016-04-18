var http = require("http");
var url = require('url');
var config = require('./config').config;
var log4js = require('log4js');
log4js.configure('log4js.json', {});
var logger = log4js.getLogger();
logger.setLevel('INFO');

function start(route, handle){
	function onRequest(req, res) {
		if(req.url == '/favicon.ico'){
			return;
		}
		var remoteAddress = req.connection.remoteAddress;
		var pathname = url.parse(req.url).pathname;
		logger.info('[REQ] ' + req.method + ' ' + req.url + ' [' + remoteAddress + ']');
		route(handle, pathname, req, res);
	}

	var server = http.createServer(onRequest);
	server.listen(config.http.port, function(){
		logger.info("*** HttpServer is running[mode:"+process.env.NODE_ENV+"]...");
	});

	server.on('clientError', function(e){
		logger.error('*** Client Error:'+e.message);
	});

	server.on('error', function(e){
		logger.error('*** HttpServer Error:'+e.message);
	});
}

exports.start = start;
