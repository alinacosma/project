// defined the superclass
function Animal(options){
  options=options ||{}; //this is used to avoid errors when calling a new animal with no parameter object
  //ex: var animalObj=new Animal();
  this.name=options.name; 
  this.color=options.color;
  this.weight=options.weight;
  this.legs=options.legs;
  
}
Animal.prototype.eat=function(){
  console.log("nom nom , animal is eating");
}
Animal.prototype.speak=function(){
  console.log("hello, animal is speaking");
}

//defined the childclass
var animalObj=new Animal({
  name: "A generic animal",
  color:"purple"
});
console.log(animalObj);
 function Cat(options){
   Animal.call(this,{legs: 4}); // this line is used to enheret all propreties from parent class
   this.breed=options.breed;//we can add any proprieties to a cat
   //composition relationship has -a 
   this.owner=new Owner({
     name: options.ownerName,
     age: options.ownerAge
   })
 }


//console.log("Shakti can't speak now",shakti.speak)
Cat.prototype=Object.create(Animal.prototype);// this line is used to enheret all methods from parent class
var shakti= new Cat( {name: "Shakti"});
shakti.name="Shakti";
shakti.color= "black";
console.log('Shakti',shakti);

console.log("shakti can speak now",shakti.speak);
shakti.speak();
// method overriding (suprascriere)
Cat.prototype.speak=function(){
  console.log("miau miau");
}
shakti.speak();
animalObj.speak();



// COMPOSITION !!!

function Owner(options){
  options=options ||{};
  this.name=options.name;
  this.age=options.age;
}
var fram=new Cat({
  ownerName: "Alina",
  ownerAge: '27'
});
console.log("fram",fram);
console.log("fram owner name", fram.owner.name);

// POLIMORPHISM
function Dog(options){
  Animal.call(this,{legs: 4});
  
}
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.speak=function(){
  console.log("ham ham");
}
var lulu=new Dog();
lulu.name="Lulu";
console.log("--------");
var animalsArray=[fram,animalObj,shakti,lulu];
for(var i=0;i<animalsArray.length;i++){
  var animal=animalsArray[i];
  animal.speak();
}

// Static Methods
console.log("Static phroprieties and methods");
//console.log(dog.breed);
var luna=new Cat({name:"luna", breed:" birmaneza"});
console.log(luna.breed);
Cat.HAS_PAWS=true;
console.log(Cat.HAS_PAWS);//proprietatea statica se apeleaza doar pe clase nu si pe instante

Cat.SIT=function(){
  console.log("sitting down from a static method");
};
Cat.SIT();//metoda exista pe clasa si nu pe instanta
//luna.SIT();

//Object Creation Methods
var a={x:2};
var b={x:2};
console.log("a==b",a===b);//fals  a and b are 2 diferent obj that happend to have the same value (not primitives)
var n=2;
m=2;
console.log("n===m",n===m);//true- primitive numbers
var c=a;
console.log("a===c",a===c);//true
a.x=7;
console.log(a,b,c);

var kitty=Object.create(Cat.prototype);
kitty.name="kitty";
console.log(kitty);


