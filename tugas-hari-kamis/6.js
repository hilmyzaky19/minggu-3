// Soal 6 — Audit Kode

// Buat program yang sengaja mengandung minimal 3 masalah yang berkaitan dengan hoisting.

// Kemudian perbaiki program tersebut.

// Jelaskan perubahan yang dilakukan.

// ---
// ini blom di perbaiki
console.log(nama);

sapa();

console.log(umur);

var nama = "Hilmy";

const umur = 17;

const sapa = function () {
    console.log("Halo");
};
// ini versi yang udah di perbaiki
var nama = "Hilmy";

const umur = 17;

const sapa = function () {
    console.log("Halo");
};

console.log(nama);
sapa();
console.log(umur);
// variable nama di pindahkan ke atas sebelum digunakan agar tidak menghasilkan undefined
// function expresion sapa di pindahkan ke atas sebelum di panggil agar tidak terjadi reference console.error();
// variabel umur di deklarasikan terlebih dahulu sebelum diakses agar tidak terjadi reference eror