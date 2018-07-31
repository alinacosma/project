$(onLoaded);
function onLoaded(){
     $('#click').click(getPostsComments);
  
  function getPostsComments (){
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
    
    }) 
     .then(function(posts){
        var html='<ul>'
        for(var i=1;i<10;i++){
          var postId=posts[i].id;
          getComentsPost(postId);
          html+='<li>';
          html+='<div>'+posts[i].title+'</div>';
          html+='<ol id=post_id_'+postId>+'</ol>';
          html+='</li>'
        }
        html+=''</ul>';
      
    }
        function getComentsPost(postId){
          $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts/'+postId+'/comments',
            method:'GET',
          })
          .then(function(coments){
            var comentsList='';
            var maxComents=coments.length>10 ? 10 :coments.length;
            for(i=1;i<maxComents;i++){
              comentsList+='<li>'+coments[i].name+'</li>'
            }
             $('#post_id'=postId).html(comentsList);
            console.log(coments);
          })
      .catch(function(error){
            S('#post_id_'+postId).html(<id style=>)
          })
        }
    }
}
           
             