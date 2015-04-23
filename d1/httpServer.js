/**
 * Created by Hernan Y.Ke on 4/23/15.
 */
var http=require("http");
var fs =require("fs");
var server =http.createServer();

server.on("request",handle);

function handle(req,res){
    res.write("hello");
    function callback(err,data){
        if(err){
            response.statusCode = 404;
        }else{
            res.write(data);
        }
        res.end();
    }
  //  res.end();
    fs.readFile(__dirname+"index.html",callback);
}



//fs.readFile(__dirname+"index.html",callback);

server.listen(3000);

