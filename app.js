const http=require('http');
const fsf=require('fs');
const https=require('request');
var urls = require('url');
const customModule=require('./firstModule');
var events = require('events');
var jsdom = require("jsdom");
var eventEmitter = new events.EventEmitter();
const hostname="127.0.0.1";
const port=3000;
var url="https://api.github.com/users/mralexgray/repos";
var list;

https({
    url:"https://api.github.com/users/mralexgray/repos",
    json:true
},function(error, response, body){
    list=response;
   
});
var server;
var formDetails=[];

fsf.readFile("source.html",function(error,html){
    if(error){
        throw error
    }
   
     server= http.createServer(function(req,res){
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    
    //console.log("details---",html);
    res.write("Success"+html);
    var myEventHandler = function () {
  console.log('I hear a scream!FHHDFKDHFKDF');
}
    if(req.url.length > 1)
    {
        var qu =urls.parse(req.url,true);
        var cancelDetails;
        console.log("response-----",res,qu);
        formDetails.push(qu.query.mytext);
        console.log("check----",formDetails,eventEmitter);
        for(var i=0;i<formDetails.length;i++){
            if(formDetails[i] && formDetails[i] != undefined){
            res.write("<b>"+customModule.modifiedData(formDetails[i])+"<span class='fa fa-remove' style='font-size:17px;color:red;' onclick='myFunction()'></span>"+"</b>"+"<br>")
            }
        }
                // const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
                // console.log(dom.window.document.querySelector("p").textContent);
        
          //eventEmitter.on('scream', myEventHandler)
         //eventEmitter.emit('scream');
    }
    res.end();
});
    server.listen(port,hostname,function(err){
    //   function myFunction(){
    //         console.log("detailsdksdjskd--121");
    //     }
    });
});


