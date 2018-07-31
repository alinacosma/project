//DOM Loaded

$(onHtmlLoaded);
function onHtmlLoaded() {
  console.log("On HTML Loaded");
  //by id+jquerry element
  console.log("Comment list",$("#comments-list"));
  //by element-native dom element
  console.log("Comment list",$("#comments-list")[0]);
  //by class
  console.log("Item",$(".commen-item"));
  //by tag
  console.log("Header",$("h1"));
  //by querry network
  console.log("Author",$("section.comments-item.strong"));
  var h1=$("h1");
  h1.text("JQuery DOM Manipulation New");
  h1.html("JQuery DOM Manipulation <em>New</em>");
  //set atributes
  var h2=$("h2");
  h2.attr("title","Comments List");//set atribute
  console.log("H2 Title",h2.attr("title"));//get atribute
  
  var commentsContainer=$("#comments-list");
  commentsContainer.css("border","solid 1px green");
  commentsContainer.css({
    color:"blue",
    background:"#ccc"

});
  console.log("Comments list border",commentsContainer.css("border"));
  //add border to each comment
  var commentItems=$("comments-items");
  commentItems.css("border","solid 5px pink");
  ///Add new comment
  /*var comment="<section>"
              "<h3>New Comment<h3>"+
              "<p>Content <strong>A B </strong></p>"+
              "</section>";
  commentsContainer.append(comment);*/
    for(var i=0;i<list.length;i++){
      var item=list[i];
      var comment="<section>"
              "<h3>+item.title+<h3>"+
              "<p>+item.body+ <strong>+item.author+</strong></p>"+
              "</section>";
  commentsContainer.append(comment);
    
  }
  //remove element
  commentItems.first().remove();
  //find events
  var btnSearch=S("#btn-search");
  btnSearch.on("click",function(){alert(1);});
  //get search value
  var search=$('input[name="search"]').val();
  console.log("Search value",search);
  //get all comments 
  var allComents=$('input[name]')
  
  
  
}