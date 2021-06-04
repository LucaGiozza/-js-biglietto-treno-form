var procedi = document.getElementById('genera');

procedi.addEventListener("click", function(){
//   prendiamo il nome
   var valore = document.getElementById('nome').value;
  console.log(valore);

//    prendiamo l'età
var eta = document.getElementById('fascia-eta').value;
console.log(eta)




// prendiamo i km
var km = document.getElementById('km').value;
var prezzo = km 





if(eta == 'minorenne'){
    prezzo = km * 0.4;
  }else if( eta == 'over65'){
      prezzo = km * 0.2;
  }else{
      prezzo = km * 0.5;
  }
  
  console.log(prezzo)

})