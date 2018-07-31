function myFirstFunction(){
  console.log("My first JS Function");
}
//call function
myFirstFunction();

function myFirstFunctionReturn(){
  return "My first Js Function Return";
}
var message=myFirstFunctionReturn();
document.write(message);
document.writeln('<strong>'+message+'</strong>');
function displayStars(){
  var line=" ";
  for(var i=0;i<4;i++){
    line +="*";
    console.log(line);
  }
}
function displayStars1(nr){
  var line=" ";
  for(var i=0;i< nr;i++){
    line +="*";
    console.log(line);
  }
}
displayStars1(4);
displayStars1(2);
displayStars1(9);
// Function with default value for parameter
function displayStars2(nr=4){
  var line=" ";
  for(var i=0;i< nr;i++){
    line +="*";
    console.log(line);
  }
}
displayStars2();
displayStars2();
displayStars2();
displayStars2(2);
function displayStars3(nr=4,char='*'){
  var line=" ";
  for(var i=0;i< nr;i++){
    line +=char;
    console.log(line);
  }
}
displayStars3(3,'-');// conteaza ordinea parametrilor, daca vrem sa definim al doilea parametru trebuie neaparat sa il definim si pe primul
displayStars3(4);

var fname="Ana";
var lname="Pop";
function displayName(fname,lname){
  console.log(fname+" "+lname);  
  fname="Ion";
  console.log("Inside function fname", fname);//afiseaza Ion
}
  displayName(fname,lname);
  console.log("Outside function fname", fname);//afiseaza Ana


function displayNameObject(person){
  console.log(person.fname+" "+person.lname);  
  fname="Ion";
  console.log("Inside function fname", fname);
}
var person={fname:"Ana",lname:"Pop"};
displayNameObject(person);
  console.log("Outside function fname", person.fname);

//Staitment function
function staitmentFunction(){
  console.log("StaitmentFunction");
}
staitmentFunction();

//Exprecion function
var expFunction=function(){
 console.log("Exp Function"); 
}
expFunction();

(function(){
  console.log("IIFE self invoking function");
})();

// Function with function as parameter
function execOtherFunction(f){
  testFunction();
  
}
function testFunction(){
  alert("Exec from another function");
}
execOtherFunction(testFunction);


// Variables scope
var a=1;//var globala
b=2;//var globala;
window.c=3;//var globala

function displayVariable(){
  var d=4;//var locala datlorita lui var
  e=5;//var global
  console.log("Inside variable d=",d);
console.log("Inside variable e=",e);
}
displayVariable();
console.log("Outside variable e=",e);
//console.log("Outside variable d=",d);

//Closure
var x=1;// global 
function firstFunction(){
  var y=2;
  secondF();
  function secondF(){
    var z=3;// locala in secound function
    k=4;
    console.log("secoud z=", z);
  }
  console.log("first x=", x);
  console.log("first y=", y);//local
 // console.log("first z=", z);//undefined
}
firstFunction();
console.log("first x=", x);
console.log("second k= ", k);
console.log("first y=", y);//undefined nu e vizibila in exteriorul functiei
console.log("first z=", z);//undefined





