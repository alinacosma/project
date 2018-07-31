$(onHtmlLoaded)
  function onHtmlLoaded(){
    var apiUrl="https://jsonplaceholder.typicode.com/posts/";
    //get posts list
    getPost();
     $("#delete-post").on('click', deletePost) 
    function deletePost() {
      var id=$("[name=delete]").val();
      $.ajax({
        url:apiUrl+ id,
        method:"DELETE",
        success: function(){
         alert("Post with id"+id+"deleted");
        },
      })
    }
  
  function getPost(){
    var listContainer=$("#list-posts");
    $.ajax({
    url:apiUrl ,
    //method:GET,
    success: function(respons){
        // console.log("Respons",respons );
      for(var i=0;i<respons.length;i++){
        console.log(respons[i].title);
        var title="<h3>"+respons[i].title+"</h3>"
        listContainer.append(title);
      }
         }})
  
  }

  }
                        

