var robot={};
console.log("Robot= ",robot);
var robot={
  model: 'TRX1000' ,
  weight: 100
};
console.log("Robot= ",robot);
//add new value
robot.color=" red";
console.log("Robot= ",robot);
//update proprietis
robot.weight=90;
console.log("Robot= ",robot);
//stergerea unei proprietati
// delete robot.model;
// console.log("Robot= ",robot);
var robot={
  model: 'TRX1000' ,
  weight: 100 ,
  run: function(){
    console.log("The robot is running");
  }
};
console.log("Robot= ",robot);
//call robot method
robot.run();
// typeof
var name="anca";
console.log("Type of name",typeof name);
var age=10;
console.log("type of age",typeof age);
var isnull=null;
console.log("type of null",typeof isnull);
var isUndefined;
console.log("type of string",typeof isUndefined);
var list=[];
console.log("type of array",typeof list);

// IF staitment
var x=-2;
if (x>0){
  console.log("Positive numberx=", x);
}else  (x<0)  
{
    console.log("Negative number x= ",x);
  }
var x= 0;
if (x>0){
  console.log("Positive numberx=", x);
}
else if (x === 0){//== se compara la nivel de valoare ...iar ===se verifica si valoarea si tipul
  console.log("x= ",x);
}
else  
{
    console.log("Negative number x= ",x);
  }
var curentTime=prompt("Enter time");
console.log(curentTime);
if(curentTime<10)
  {
    console.log("Buna dimineata",curentTime);
  }
else if (curentTime<=18)
{
  console.log("Buna ziua", curentTime);
}
else
{
  console.log("Buna seara",curentTime);
}
//FOR
for (var x=0; x<=10; x++){
  console.log("index= ",x);
}
for (var i=1;i<=5;i++)
{
  //console.log("line= ",i);
  var line=" ";
  for(var j=1;j<=5;j++){
   // consloe.log("colomn= ",j);
    line +=i*j+" ";
   // console.log("value= ",value);
  }
  console.log("line ",line);
}

for (var k=1;k<=10;k++)
  {
    var spatiu=" ";
    for(l=1;l<=10;l++){
      spatiu+=k*l+" ";
    }
    console.log(spatiu);
  }
//fibonacci sequence 1,1,2,3,5,8,13,21...
var a=0;
var b=1;
for (var f=1;f<10;f++){
  var rezultat=a+b;
  a=b;
  b=rezultat;
  console.log(rezultat);
}