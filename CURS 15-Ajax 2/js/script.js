// $(document).ready(
//   function() {
//     console.log('DOM IS READY')
//   }
// )

$(domLoaded)// $(document).ready(domLoaded)

function domLoaded() {
  console.log('Dom loaded')
   
  var getShowsData = function (querry) {
      var url= "http://api.tvmaze.com/search/shows?q=" + querry
      $.ajax({
      url: url,
      method: 'GET',
      success: manageData
    })
  }
  
  $('#invoke-ajax-test-call').on('click', function() {
      var querry=$('input').val()//operatie sincron
      getShowsData(querry)
  })
  
  function manageData (data, textStatus, jqXHR) {
    $(".container").html(renderHtml(data))
//     console.log('data', data)
//     console.log('textStatus', textStatus)
//     console.log('Headers', jqXHR.getAllResponseHeaders())
//     console.log('jqXHR', jqXHR)
  }
  
  function renderHtml (data) {
    var html = `<ul>`
    for (i = 0; i<data.length; i++) {
      var name =  data[i].show.name;
      var url=data[i].show.url;
      var score=data[i].score;
//     console.log('Title', data[i].show.name);
     html += `<li>` + name +'<a href=" " >'+url +'</a>'+ score +`</li>` 
    }
    
    html += `</ul>`
    return html;
  }
}
