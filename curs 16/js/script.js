$(onHtmlLoaded)
function onHtmlLoaded(){
  var loadPost= function(id){
    $.ajax({
    url:"https://jsonplaceholder.typicode.com/posts/"+id ,
    //method:GET;
    success: function(data){
         console.log("Posts =",data );
         }})
  }
  var createPost=function(){
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method:"POST",
      data:{
        title:"POST by Alina",
        body:"Bla by Alina",
        userId:1
      },
      success:function(data){
      console.log("Create post",data.id);
    }
    })
  }
  var editPost=function(id){
    $.ajax({
      url:"https://jsonplaceholder.typicode.com/posts/"+id,
      method:'PUT',
      data:{
        title:"Edit post",
        body:"Edit post body",
        userId:1
        
      },
      success: function(data){
      console.log("Edit post",data.id);
    }
    })
  }
  var deletePost=function(id){
    $.ajax({
      url:"https://jsonplaceholder.typicode.com/posts/"+id,
      method: "DELETE",
     success: function(data){
      console.log("Post was deleted",data);
    },
    })
  }
  editPost(10);
  loadPost(1);
  loadPost(2);
  loadPost(10);
  loadPost(30);
  createPost();
  deletePost(4);
}