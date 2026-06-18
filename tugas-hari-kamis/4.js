// Soal 4 — Eksperimen Variabel

// Buat 3 contoh program yang menggunakan:

// - var
// - let
// - const

// Tunjukkan perbedaan perilaku masing-masing ketika digunakan sebelum deklarasi.

// Tuliskan kesimpulanmu.

// varr
console.log(nama);
var nama = "hilmy";

// var di hoist sehingga dapat dipanggil sebelum dekrlarasi,tetapi nilai nya masih undifined.
// let
console.log (umur);
let umur =17;
// let di hoist namun tidak dapat di akses sebelum deklarasi senhingga bikin eror

// const
console.log(kota);
const kota = "depok"

// const juga di hoist lebih aman di gunakan karena dapat mencegah bug yang sering terjadi akibat hosting pada var