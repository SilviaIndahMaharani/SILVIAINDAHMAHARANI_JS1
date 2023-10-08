var panjang = parseFloat(prompt("Masukkan panjang persegi panjang:"));
var lebar = parseFloat(prompt("Masukkan lebar persegi panjang:"));

function hitungluas (panjang, lebar) {
  var luas = panjang * lebar;
  return luas;
}

var hasil = hitungluas(panjang, lebar);

console.log("Luas persegi panjang dengan panjang " + panjang + " dan lebar " + lebar + " adalah: " + hasil);
