    function getName(callBack){
    var firstName=prompt('First Name')
    var lastName=prompt('Last Name')
    var fullName;
    setTimeout(function(){
           fullName= firstName+' '+lastName //scop izolat , deci trebuie sa initializez var fullName inainte de functie
           //alert('Full name is '+fullName);
        if(typeof callBack==='function'){
          callBack(fullName)
        }

    },5000)
      //return fullName nu pot sa fac return si sa recuperez direct valoarea de la o functie a-sincron
  }