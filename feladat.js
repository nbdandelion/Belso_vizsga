/*1.*/
function osszesOszto(number) {
    var osztok = [];
    for (var i = 1; i <= number; i++) {
        if (number % i == 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
var osztok = osszesOszto(8);
console.log(osztok);
/*2.*/
function parosDarab(szamok) {
    var parosokSzama = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 === 0) {
            parosokSzama++;
        }
    }
    return parosokSzama;
}
var proba = [86, 12, 18, 55, 147, 16, 0, 5];
var parosDb = parosDarab(proba);
console.log(parosDb);
/*3.*/
