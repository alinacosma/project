const numbers=[5,7,-2,4,8,9,13];
let evens=[];//even numbers will be added here
for(let i=0;i<numbers.length;i++){
  if(numbers[i]%2===0){
    evens.push(numbers[i]);//push-adds numbers[i] at the end of the array
  }
}
console.log("after for",evens);
evens= [];
numbers.forEach(function(currentElement){
                if(currentElement%2===0){
                  evens.push(currentElement);
                }
    });
  console.log("after for",evens);

evens=[];
numbers.forEach(currentElement=>{
            if(currentElement%2===0){
                  evens.push(currentElement);
            }
});
  console.log(evens);

//Lexical THIS
const that=this;
window.onload=function(){
  const button=document.getElementById("myelement");
  that.clicked=0;
  button.addEventListener("click",function(){
    console.log("this inside event handler",this);
    that.clicked++;
    console.log("button clicked"+that.clicked+"times");
  })
};


window.onload=() => {
  const button=document.getElementById("myelement");
  this.clicked=0;//same this in the surrounding this
  button.addEventListener("click",() =>{
    console.log("this inside event handler",this);
    this.clicked++;
    console.log("button clicked"+that.clicked+"times");
          });
    
                          }

// Classes

console.log("Classes");
class Animal{
  //special method used for object creation and initialization
  //only one per clss
  //this is the one that's called when using "new"
  constructor(options){
   
    options=options||{};
    this.name=options.name;
    this.color=options.color;
    this.weight=options.weight;
    this.height=options.height;
    this.legs=options.legs;
  }
  eat(){
      console.log("nom nom animal is eating");
    }
  speak(){
          console.log("hello animal is speaking");

  }
  get biometricData(){
    return "This animal is"+this.height+"Tall and Weigth"+this.weight;
  }
  set biometricData(data){
    // data will hve the format [height,height]
    this.height=data[0];
    this.weight=data[1];
  }
  static SIT(){
    console.log("Sitting from a static method");
  }
}
//creat animal instance
const fulga=new Animal({
  name:"Fulga",
  color:"Purple",
  weight:"200kg",
  height:"1.80 m", 
  legs:4
});
console.log("Fulga", fulga);
//invoke class method
fulga.eat();
fulga.speak();
//use getter
console.log(fulga.biometricData);//it's a property not a method
fulga.biometricData=['2m','250kg'];
console.log(fulga);
Animal.SIT();// static methods are aviable on the class directly,not on the instnce
//fulga.SIT(); nu merge


console.log("Inheritance");
//define child class
// it extendes animal super class/ parent class
class dog extends Animal{
  //constructor function is optional in child class
  constructor(options){
    super(options);//need to call super method, it calls the constructor of the parent class
    this.legs=4;
    this.breed=options.breed;
  }
  //method overriding
  speak(){
    console.log("Ham ham !");
  }
}
const nero=new dog({
  name: "Nero",
  color:"white",
  height:"50cm",
  weight:"50kg",
  breed: "Ciobanesc Bucovinean"
});
console.log("Nero",nero);
nero.speak();
nero.eat();