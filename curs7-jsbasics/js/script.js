// play
console.log("Number", 12);
console.log("String", 'Alina');
//Play with variables
var age=20;
console.log("Age= ",age);
var name="Alina";
console.log("Name= ",name);
var isTrue=true;
console.log("isTrue= ",isTrue);
var isFalse=false;
console.log("isFalse= ",isFalse);
var thisIsNull=null;
console.log("thisIsNull= ",null);
var thisIsNotDefined;
console.log("thisIsNotDefined= ",thisIsNotDefined);

//Play with operations
console.log("sum= ",2+2);
var a= 10;
var b= 4;
var c= a-b;
console.log("Dif= ", c);
console.log("Compare ",2 > 0);
console.log("Compare ",0 <= 2);
console.log("Compare ",2 > 0);
console.log("Logical && ",2 > 0&& 0>2);//si
console.log("Logical ||",2 > 0 || 0>2);//sau
var logical= (0>2);
console.log("Logical !", !logical) ;//negatie
//concatenare
var fname="Anca";
var lname="BALC";
var name= fname+" "+lname;//" " spatiu
console.log("Name= ",name);

//Array
//Empty array
var a=[];
console.log("a= ", a);

var a =['Ana', 'Ion'];
console.log("a= ",a);
console.log("a length ",a.length);
a.push("Gheorghe");//adauga la sf o noua valoare
a.push(50);
a.push([10]);
console.log("a= ",a);
console.log("a= ",a[4]);//returneaza arrey [10]
console.log("a= ",a[4][0]); //returneaza valoarea 10
