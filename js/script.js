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

  var random = Math.floor(Math.random() * 9) + 1 ;
  var codiceCp = Math.floor(Math.random() * 10000) + 90000 ;
  

//   output

document.getElementById('offertona').innerHTML = eta;
document.getElementById('numcarrozz').innerHTML = random ;
document.getElementById('codice').innerHTML = codiceCp ;
document.getElementById('costo').innerHTML = prezzo ;
document.getElementById('luca').innerHTML = valore;
// document.getElementById('sparisci').classList.add('show');


});

var annulla = document.getElementById('annulla');

annulla.addEventListener("click", function(){
    document.getElementById('nome').value = "";
    document.getElementById('fascia-eta').value = "";
    document.getElementById('km').value= "";

    document.getElementById('sparisci').classList.add("hidden")
});