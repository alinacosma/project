/*//1.display in the console the numbers from 1 to 20
// @comment - use var when you define i => var i = 0;
for(i=1;i<=20;i++){
  console.log("index= ",i);
}
//2.display in the console the odd numbers from 1 to 20
for(i=1;i<=20;i+=2){
  console.log("odd numbers= ", i);
  
}
//3.compute the sum of the elements of an array and display it in the console
var a=[10,15,20,49,57];
var sum=0;
for (var s = a.length; s--;){
  sum =sum+ a[s];
}
  console.log("Suma este= ", sum);
//4,compute the maximum of the elements of an array and display it in the console 
var b=[-1,9,14,18,44,46,76,63,88,130,126,110];
var max=0;
for(var j=0;j<b.length;j++){
  if(b[j]>max){
    max=b[j];
  }
}
    console.log("valoarea maxima este= ",max);

// 5.compute how many times a certain element appears in an array
var c=[12,15,15,15,19,22,24,15,19,15];
var nr=0;
//var e=0;
// @comment - a certain number means to choose a number from you array and see how many times it appears
for(var k=0;k<c.length;k++){
 // e[c[i]]=1;
  //e[i]=e[i]+1;
  if(c[k]==c[k+1]){
    nr=nr+1;
  }
}
console.log("the element appears in an array= ", nr);

//We’re at a nutrition center, and we have the data from our customers ( name, gender, height,weight). 
//Write a JS script that prints in browser Console the following info for each user:
//John Doe | M | BMI: 24 | Normal Weight
//Mary Anne | F | BMI: 30 | Obese

var name1= "John Doe";
console.log("name ",name1);
var sex1= "M";
console.log("sex", sex1);
var bmiJohn=24;
if(bmiJohn<18.5){
  console.log("underweight" .bmiJohn)
}
else if(bmiJohn>18.5&& bmiJohn<25)
{
  console.log("normal" ,bmiJohn)
}
else if(bmiJohn>25&&bmiJohn<30){
  console.log("overweight",bmiJohn)
}
else if (bmiJohn>=30){
  console.log("obese",bmiJohn)
}
var name2="Mary Anne";
console.log("name ",name2);
var sex2= "F";
console.log("sex ",sex2);
var bmiMary= 30;
if(bmiMary<18.5){
  console.log("underweight" .bmiMary)
}
else if(bmiMary>18.5&& bmiMary<25)
{
  console.log("normal" ,bmiMary)
}
else if(bmiMary>25&&bmiMary<30){
  console.log("overweight",bmiMary)
}
else if (bmiMary>=30){
  console.log("obese",bmiMary)
}
*/
/*Implement “play” function that is a “Rock, paper, scissors” game.
Implementations notes:
Create
an array with all the possibilities (rock, paper, scissors);
Pick a random option for Computer ( use Math.random);
Pick a random option for User ( use Math.random);
Apply
game rules for both options (use if/else if structures)
Calling “play()” function will display in console something like this:
Computer choice: “Rock”
User choice: “Paper”
User wins!*/


var game=['rock','paper','scissors'];
var computer=game[Math.floor(Math.random() * 3)];
var user=game[Math.floor(Math.random() * 3)];
function play(user, computer){
    if (user===computer){
        console.log ("It's a tie!");

    } else if (user==="Rock"&&computer==="Scissors"||user==="Paper"&&computer==="Rock"||user==="Scissors"&&computer==="Paper") {
        console.log ("You've won!");

    } else {

        console.log ("You've lost!");

    }

}
play(user,computer);
console.log(game);
