// http is pre define module of node JS 
// http module using for call request and reponse on bowser 

var http = require('http');
// single array json 
var data = {name:'Nilesh',age:'26',email:'nilesh@gmail.com'};
// multi array json
var data = [
    {name:'Nilesh',age:'26',email:'nilesh@gmail.com'},
    {name:'Nilesh',age:'26',email:'nilesh@gmail.com'},
    {name:'Nilesh',age:'26',email:'nilesh@gmail.com'},
    {name:'Nilesh',age:'26',email:'nilesh@gmail.com'},
]
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(3900);
