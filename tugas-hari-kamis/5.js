// Soal 5 — Eksperimen Function

// Buat dua program:

// Program A

// Menggunakan:

// function namaFunction() {}

// Program B

// Menggunakan:

// const namaFunction = function() {};

// Tunjukkan perbedaan perilakunya ketika dipanggil sebelum deklarasi.

// Jelaskan penyebabnya.

manggil();
function manggil(){
    console.log("oii jaldiii");

}
// karena function declaration di hoist spenuh nya oleh javascript  jadi fungsi sudah tersedia meskipun dipanggil sebelum di tulis

manggil();
const manggil = function(){
    console.log("oii jaldii");
}
// karena manggil adalah variabel const yang menyimpan functipm variabel const tidak bisa di akses sebelum deklarasi selesai