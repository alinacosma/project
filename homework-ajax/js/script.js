$(domLoaded);
function domLoaded(){
  var loadPost= function(){
  $.ajax({
    url:'https://www.behance.net/dev',
    succes: function(data){
      console.log("Data= ",data);
    }
  })
}
  loadPost();
}