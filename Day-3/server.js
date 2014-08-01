var fs = require("fs"),
	http = require('http'),
	url = require('url'),
	path = require('path');

var extensions = [".html",".js",".css",".jpg",".ico"];

String.prototype.endsWith = function(ext){
	return this.substr(this.length-ext.length,ext.length) === ext;
};

function isStatic(path){
   return extensions.some(function(ext){
       return path.endsWith(ext);
    });
}

var tasks = [
	{id : 1, name : "Learn jQuery", isCompleted : false},
	{id : 2, name : "Explore JavaScript", isCompleted : false},
	{id : 3, name : "Master AngularJs", isCompleted : false}
];

var server = http.createServer(function(req,res){
	var urlPath = url.parse(req.url).pathname;
	console.log(req.method, urlPath);
	var pathName = path.join(__dirname, urlPath);
	if (isStatic(pathName)){
		
		if (fs.existsSync(pathName)){
			fs.createReadStream(pathName).pipe(res);
		} else {
			res.statusCode = 404;
			res.end();
		}
	} else {
		if (req.method === "GET" && urlPath === "/tasks"){
			setTimeout(function(){
				res.write(JSON.stringify(tasks));
				res.end();	
			},5000);
		}
		if (req.method === "POST" && urlPath === "/tasks"){
			var data = '';
			req.on('data', function(d){
				data += d;
			});
			req.on('end', function(){
				var newId = tasks.reduce(function(seed,t){ return seed > t.id ? seed : t.id;},0) + 1;
				var task = JSON.parse(data);
				task.id = newId;
				tasks.push(task);
				res.write(JSON.stringify(task));
				res.end();
			});
		}
	}
});
server.listen(8080);
console.log("server listening on port 8080..");