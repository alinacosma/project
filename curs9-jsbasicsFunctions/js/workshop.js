var person1={
  name:"Ana",
  gender: "F",
  height:170,
  weight: 55
};
var person2={
  name:"Ion",
  gender: "M",
  height:195,
  weight: 95
};
//list of persons, array
var persons=[person1,person2];
console.log("Persons= ",persons);
for(var i=0;i<persons.length;i++){
  var person=persons[i];
  //console.log("Person= ",person[i]);
  //console.log("Height= ",person[i].height);
  var bmi=person.weight/person.height*person.height;
  var result="";

if(bmi<18.5){
  result="underweight";
}else if(bmi<25){
  result="normal";
  
}else if(bmi<30){
  result="overweight";
  
}else{
  result="obese";
}
 console.log(person.name+"|"+person.gender+"|"+bmi+"|"+result);
}
