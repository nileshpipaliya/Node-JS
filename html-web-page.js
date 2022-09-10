var http = require('http');
var pageHtml = `<h1>This is form</h1>
<input type="text" placeholder="enter name" /> <br/><br/>
<input type="text" placeholder="enter age" /> <br/><br/>
<input type="text" placeholder="enter email" /> 
`
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(pageHtml);
    res.end();

}).listen(3900);