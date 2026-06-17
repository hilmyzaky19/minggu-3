
// Soal 9 – Studi Kasus Kasir

// Diberikan data:

// const namaBarang = "Laptop Gaming";
// const hargaBarang = "15749999.95";
// const diskon = 12.5;

// Buat struk sederhana yang menampilkan:

// - Nama barang dalam huruf kapital.
// - Harga asli dalam format Rupiah.
// - Besar diskon dalam persen.
// - Nominal diskon.
// - Harga setelah diskon.
// - Harga akhir dalam format Rupiah.

const namaBarang = "Laptop Gaming";
const hargaBarang = "15749999.95";
const diskon = 12.5;

const harga = parseFloat(hargaBarang);
const nominalDiskon = harga * diskon / 100;
const hargaAkhir = harga - nominalDiskon;

console.log("Nama Barang :", namaBarang.toUpperCase());
console.log("Harga Asli  : Rp" + harga.toFixed(2));
console.log("Diskon      :", diskon + "%");
console.log("Nominal Diskon : Rp" + nominalDiskon.toFixed(2));
console.log("Harga Setelah Diskon : Rp" + hargaAkhir.toFixed(2));
console.log("Harga Akhir : Rp" + hargaAkhir.toFixed(2));