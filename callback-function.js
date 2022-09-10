// noraml function
function sum(a,b) {
    return a + b;
}
console.log(sum(10,30));

//with callback function

var add = function(x,y){
    return x+y;
}

function applyAdd(add){
    console.log(add(2,3));
}

applyAdd(add);