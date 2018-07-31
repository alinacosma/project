// test function is hoisted so we can call it before is defined in the code
test();
//global scope
//str is not declared or not defined
//it will throw a reference error
//console.log("str in global scope",str);// referince error
function test() {
  // although str is not defined yet it is hoisted from the first line in for
  console.log("str in test function",str);//undefined
  
  for (var i=1;i<10;i++){
    var str='Something '+ i;
    console.log(str);
  }
}

//myfunction(); 
var myfunction=function(){
  console.log("myfunction");
}
//under the hood 
//only the declaration is moved at the top of the scope not the assigment
var myfunction;
//myfunction();
myfunction=function(){
    console.log("myfunction");
}
  

const mynumber=2;
//mynumber=7;//error
//const mynumber=3;//error
const user={
  name: "john",
  age:35
};
//user={
 // name:"mary",
  //age:25
//};//error
user.name="mary";
console.log(user);