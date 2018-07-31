var emptyObject= {};
console.log(emptyObject);
var emptyObject2=new Object() ;
console.log(emptyObject2);

var userMe={
  name:'Alina',
  age:27,
 // age: 22 duplicated keys are not possible
  hight: 153,
  weight: 42,
  'eyes color':'brown',
  sayHi : function(){
  console.log("Hello");
},
    sayHiTo: function(name){
      console.log("Hello, "+name+"!");
    }
}
console.log(userMe);
userMe.sayHi();
userMe.sayHiTo('grupa 5');
userMe.sayHiTo(userMe.name);
console.log(userMe['eyes color']);
console.log(userMe['name']);

var prop='height';
console.log(userMe.prop);//userMe['prop']
console.log('height=',userMe[prop]);//afiseara height
prop='age';
console.log('age=',userMe[prop]);// afiseaza age

console.log("User Me Keys", Object.keys(userMe));
console.log("User Me Values", Object.values(userMe));

var keys=Object.keys(userMe);
for(var i=0;i<keys.length;i++){
  console.log(keys[i],userMe[keys[i]]);
}
// Constructor function-incepe cu litera mare (conventie)

function User(options){
  options=options|| {}; 
  this.name=options.name|| "";
  // this is used to avoid console errors
  //if we are not sending a name the object will get an empty string as his name
  this.age=options.age;
  this.height=options.height;
  this.weight=options.weight;
  this.calculateBMI=function (){
    return this.height/this.weight;
  }
}
var user=new User({
  name:'Ali',
  height: 153,
  weight: 42
});
console.log("User created with constructor function",user );
console.log(user.calculateBMI);
 
var collegue=new User({
  name:'Victor',
  height:180,
  weight: 80
})
console.log("collegue Bmi", collegue.calculateBMI);
console.log(User.prototype);
User.prototype.sayHi=function (){
  console.log("Hi there from"+this.name);
}

collegue.sayHi();
console.log("there is no prototype property on objects", user.prototype);
console.log("prptotype attributes", Object.getPrototypeOf(user), Object.getPrototypeOf(collegue));
console.log("class is prototype of objects", User.prototype.isPrototypeOf(user),
            User.prototype.isPrototypeOf(collegue));
console.log(user.toString);
user.sayHi();
