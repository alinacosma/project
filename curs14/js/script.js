/*var personString='{name: "Ana", age:20, gender: "F"}';
//var doubleQuotesExemple="name\":\ "Ana\",\" age:\"20"\,"\" gender: "F"\";
var person={
  name:"Ana",
  age:20,
  gender:"F"
}
var age=25;
console.log("Name",person.name);
person.age=person.age+1;
console.log("Person Age",person.age);
console.log("Type of",typeof personString);
console.log("Type of",typeof person);
console.log("Type of",typeof age);
var convertPersonString=JSON.stringify(personString);//serializare
console.log("convertPersonString", convertPersonString);
var convertPersonToObject=JSON.parsel(personString);//deserializare
console.log("convertPersonToObject",convertPersonObject);*/
/// AJAX
// $(document).ready(
//   function() {
//     console.log('DOM IS READY')
//   }
// )

$(domLoaded);

function domLoaded () {
  console.log("Dom loaded");
/*  $('#invoke-ajax').on ('click', function() {
    alert ('am fost apasat');
  })*/
}
var getShowsData=function(){
  $.ajax({
   url:'http://api.tvmaze.com/search/shows?q=girls',
   method:'GET',
   succes:function(data){
     console.log(data)
   }
  })
   $('#invoke-ajax').on('click', function() {getShowsData()}); 
  function manageData (data, textStatus, jqXHR) {
    console.log('data', data)
    console.log('textStatus', textStatus)
    $(".container").html(randomHTML(data))
//console.log('Headers', jqXHR.getAllResponseHeaders())
//console.log('jqXHR', jqXHR
 

        //console.log("title",data[i].show.name);
    }
  }
  function randomHTML(){
    var html='<ul>'
    for(i=0;i<data.length;i++){
                  html+=' <li>'+data[i].show.name+'</li>'
               }
     html+='</ul>'
  }
  })
})
}
