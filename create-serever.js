var http =  require('http');
http.createServer(function(red,res){
    res.write('hello form node js framwork');
    res.end();
}).listen(5000);


function applyAdd(add){
    console.log(add(2,3));
}

applyAdd(function(x,y){
    return x+y;
});