// Soal 3 – Validasi Password

// Diberikan password:

// const password = "BelajarJS2026";

// Buat program untuk menentukan apakah password tersebut memenuhi syarat berikut:

// - Minimal 8 karakter.
// - Mengandung huruf besar.
// - Mengandung huruf kecil.
// - Mengandung angka.

// Tampilkan hasil validasi untuk setiap syarat.

 const password = "BelajarJS2026";
//  buat password minimal 8 karakter
 const minKarakter = password.length <= 8;
 const kataBesar  = password !== password.toUpperCase();
 const kataKecil = password !== password.toLowerCase();

 const  nomor =
password.includes("0");
password.includes("1");
password.includes("2");
password.includes("3");
password.includes("4");
password.includes("5");
password.includes("6");
password.includes("7");
password.includes("8");
password.includes("9");

console.log ("minimal 8 karakter:",minKarakter);
console.log("mengandung huruf besar:", kataBesar);
console.log("mengandung kata kecil:",kataKecil);
console.log("mengandung angka:", nomor);

if (minKarakter && kataBesar && kataKecil && nomor){
console.log("password berhasil");
}
else {
    console.log("password tidak valid");
}