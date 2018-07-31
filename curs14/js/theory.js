var personString='{name: "Ana", age:20, gender: "F"}';
//var doubleQuotesExemple="name\":\ "Ana\",\" age:\"20"\,"\" gender: "F"\";
var person={
  name:"Ana",
  age:20,
  gender:"F"
}
var age=25;
console.log("Name",person.name);
person.age=person.age+1;
console.log("Person Age",person.age);
console.log("Type of",typeof personString);
console.log("Type of",typeof person);
console.log("Type of",typeof age);
var convertPersonString=JSON.stringify(personString);//serializare
console.log("convertPersonString", convertPersonString);
var convertPersonToObject=JSON.parsel(personString);//deserializare
console.log("convertPersonToObject",convertPersonObject);




