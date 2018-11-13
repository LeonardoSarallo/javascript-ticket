// chiedo età all'utente
var age = prompt('Quanti anni hai?');
// chiedo quanti km vuole percorrere
var km = prompt('Quanti chilometri vuoi percorrere?');
// prezzo del biglietto in base ai km
var price = km * 0.21;


// risposta all'utente
document.getElementById('travel_cost').innerHTML = 'Il prezzo del biglietto è di € ' + price;
//sconti
if (age < 18) {
  var juniordiscount = price - (price * 0.2);
  var juniordiscount = Math.round(original*100)/100;
  document.getElementById('travel_cost').innerHTML = 'Il prezzo del biglietto scontato del 20% è di € ' + juniordiscount;

}
if (age >= 65) {
  var seniordiscount = price - (price * 0.40);
  var seniordiscount = Math.round(original*100)/100;
  document.getElementById('travel_cost').innerHTML = 'Il prezzo del biglietto scontato del 40% è di € ' + seniordiscount;
}
