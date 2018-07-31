//get element by id
/*console.log("coments list", document.getElementsById("coments-list"));
 document.addEventListener("DOMContentLoaded", function(event) {
 console.log("DOM fully loaded and parsed");
 });

 window.addEventListener("load", function(event) {
 console.log("All resources finished loading!");
 });
document.addEventListener("DOMContentLoaded",OnHtmlLoaded);
function OnHtmlLoaded(){
  console.log("DOM fully loaded and parsed");
  console.log("Coments list",document.getElementById("comment-list"));
}
//by id 
 console.log("Coments list",document.getElementById("comment-list"));
//by class
  console.log("Coments list",document.getElementByClass("comment-list"));
//first com by class
  console.log("first comment",document.getElementByClass("comment-list"));
//by tag name 
console.log("Comments items",document.getElementsByTagName("section"));*/
//

// prin comanda document in consola vedem tree-ul DOM-ului, structura html-ului, obiectul generat de browser
//querySelector selecteaza orice selector de css
//getElementsByClassName returneaza intotdeaua un array de elemente asemanatoare potrivit clasei, chiar daca am doar un element atasat clasei

//console.log("Comments list", document.getElementById('comment-list'));

window.addEventListener("load", function(event) {
 console.log("All resources finished loading!");
 });

//  document.addEventListener("DOMContentLoaded", function(event) { //primul parametru ma abonez la evenimentul de document loaded, al doilea parametru este functia care doresc sa se execute
//  console.log("DOM fully loaded and parsed");
//  });

//when document obj is available
 document.addEventListener("DOMContentLoaded", onHtmlLoaded); 

function onHtmlLoaded(){
  console.log("DOM fully loaded and parsed");
  console.log("Comments list", document.getElementById('comment-list')); 
  
  //by id
console.log("Comments list", document.getElementById('comment-list'));
//by class
console.log("Comments items", document.getElementsByClassName('comment-item'));

//first comm by class
console.log("First comment", document.getElementsByClassName('comment-item')[0]);

//by tag name
console.log("Comments items", document.getElementsByTagName('section'));
// second comment by tag
console.log("Second comment", document.getElementsByTagName('section')[1]);
//first by class & tag.... query selector se foloseste ca in css, aceeasi sintaxa
console.log("First comment", document.querySelector('section.comment-item'));
//all by tag & class - vom avea un array de elemente
console.log("Comments items", document.querySelectorAll('section.comment-item'));
//all users 
console.log("Users for comments", document.querySelector('section.comment-item strong'));
  
  // Change h1-querry selector
var h1=document.querySelector('h1');
h1.innerText="Js Dom Manipulation new"; // as string
console.log("h1 text",h1.innerText);
h1.innerHTML='JS DOM Manipulation <em>new</em>';// as HTML
console.log("h1 HTML",h1.innerHTML);
//set atribute
var h2=document.querySelector('h2');
h2.setAttribute('title','Coments list');//set atribut
console.log('Get atribute',h2.getAttribute('title'));
h2.id="coments-list-id";//set atribute id
console.log('Coments list id', h2.id);

//Change style
var commentsContainer=document.getElementById('comments-list');
commentsContainer.style.border="solid 1px green";
var commentsItems=document.getElementsByClassName('comments-items');
for(var i=0; i<commentsItems.length; i++){
  commentsItems[i].style.border='solid.2px.red';
  }
  
  //Add new dom elements
  var commentItem=document.createElement('section');
  commentItem.className='comment-item';
  commentItem.innerHTML='<h3>New comment</h3>'+'<p>New comment content <strong>author</strong></p>';
  commentsContainer.appendChild(commentItem);
  
  //Remove first comment
 var commentItem=document.querySelector('section.comment-item');
 commentsContainer.removeChild(commentItem);
  //Add comment list
  //cum reprezint un comentariu ca sa il afisez in html
  //ce e un comentariu? - are titul continut autor=> reprezinta o lista=>array
  var list=[
    {
      title:"Title 1",
      body:"ipsum...",
      author:"Ion Pop"
    },
    {
      title:"Title 2",
      body:"ipsum...",
      author:"Ana Pop"
    }
  ]
  for(var j=0;j<list.length;j++){
    var comment=list[j];
    var item=document.createElement('section');
    item.className='comment-item';
    item.innerHTML='<h3>'+ comment.title +'</h3>'+
      '<p>'+comment.body+'<strong>'+comment.author+'</strong></p>';
    commentsContainer.appendChild(item);
  }
  var btnSearch=document.getElementById('btn-search');
  btnSearch.addEventListener('click',onSearch);
  //btnSearch.addEventListener('click',onSearch1);
  //btnSearch.addEventListener('click',onSearch2);

 // btnSearch.addEventListener('mouseover',onMouse);

  function onSearch(){
    alert(1);
  }
  btnSearch.removeEventListener('click',onSearch);//dezabonarea de la un eveniment
}

