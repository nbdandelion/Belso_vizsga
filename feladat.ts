/*1.*/

function osszesOszto(number: number): number[]{
    var osztok: number[] = [];

    for (var i = 1; i <= number; i++){
        if (number % i == 0){
            osztok.push(i);
        }
    }
    return osztok;
}

var osztok: number[] = osszesOszto(8);
console.log(osztok);


/*2.*/

function parosDarab(szamok: number[]): number {
    var parosokSzama = 0;
    for (var i = 0; i < szamok.length; i++) {
      if (szamok[i] % 2 === 0) {
        parosokSzama++;
      }
    }
    return parosokSzama;
  }
  
  var proba: number[] = [86, 12, 18, 55, 147, 16, 0, 5];
  const parosDb: number = parosDarab(proba);
  console.log(parosDb);


/*3.*/

