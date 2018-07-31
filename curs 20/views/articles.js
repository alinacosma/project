window.addEventListener("load", function() {
  
  var containerEl = document.getElementById("articles-list");
  
  var articlesModel = new Articles();
  //articlesModel.getAll() returns 100 articles from the API
  //the articles are set as input to the success function in then
  //response will take that value
  //call displayAllArticles function with the response from API
  
articlesModel.getAll().then(function(response){
  displayAllArticles(response); 
 });
 //exactly the same as articlesModel.getAll().then(displayAllArticles);
  
  function displayAllArticles(articlesData) {
    //console.log(articlesData);
    
    for (var i = 0; i<articlesData.length; i++){
      var article = new Article(articlesData[i]);
      
     displayArticle(article);
      
    }
  }
  
  function displayArticle(article){
    //console.log("article", article);
    var liEl = document.createElement('li');
    
    var titleEl = document.createElement('h1');
    titleEl.innerHTML = article.title;
    
    titleEl.addEventListener("click", function(){
      window.location = "http://cursuri-vladpnt293146.codeanyapp.com/Curs20-ObjClassWorkshop/templates/article.html?articleId=" + article.id;
    });
    
    var bodyEl = document.createElement('p');
    bodyEl.innerHTML = article.body;
    
    liEl.appendChild(titleEl);
    liEl.appendChild(bodyEl);
    
    containerEl.appendChild(liEl); 
  
  
  }
  
});