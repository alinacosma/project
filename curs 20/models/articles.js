//CODUL pt Articles:
// aici definim tot modelul cu ajax-ul care va lua datele de pe server
//de date se ocupa modelele, de partea de html/manipulare DOM se ocupa view-urile

function Articles(){
  
}

Articles.prototype.getAll = function(){
  return $.get("https://jsonplaceholder.typicode.com/posts");
  
}