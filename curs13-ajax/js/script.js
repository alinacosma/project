var x=3;
var sum=function(a,b){
  return a+b;
}
var result=sum(x,3);
//var result2=sum(x,3);
console.log("before set timeout");
setTimeout(function(){
  console.log("inside");
  result2=sum(a,3)
},3000)
//console.log("RESULT SUM",result);
console.log("after set timeout");
console.log("result",result2);
