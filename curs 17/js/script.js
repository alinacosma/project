//CallBack
$();{
 $('#button').on('click',function(){
   $('#spinner').css('visibility','visible');
   getName(function(fullName){
        $('#spinner').css('visibility','hidden');
        $('#content').html("numele este"+fullName);
   });
 })
}