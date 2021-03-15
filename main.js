// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice
// quanti e quali dei numeri da indovinare sono stati individuati.

// &(document).ready(function () {
//
// })

var cinqueNumeri = []
var indexP = $("p")
var numbers = []

for (var i = 0; i < 5; i++) {
  // console.log("for");
  cinqueNumeri.push(dice(1, 100))
  // indexP.html(cinqueNumeri[i] + "")
  indexP.append(cinqueNumeri[i] + " ")

}

setTimeout(showNumbers, 3000)
setTimeout(emptyTime, 6000)
setTimeout(result, 10000)









// FUNZIONI
function dice(min, max) {
  // console.log("dice");
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function showNumbers() {
  indexP.hide("slow")
}

function emptyTime() {
  for (var i = 0; i < 5; i++) {
    numbers.push(parseInt(prompt("inserisci uno per uno i numeri che ricordi")))
  }
}

function result() {
  var punteggio = 0
  for (var i = 0; i < 5; i++) {
    if (cinqueNumeri.includes(numbers[i])) {
      console.log("if test");
      punteggio++
    }
  }
  var result = "<p>Hai fatto " + punteggio + " punti</p>"
  $("body").append("<span>" + result + "</span>")
}
