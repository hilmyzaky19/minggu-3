// Soal 4 – Generator Inisial

// Diberikan nama lengkap:

// const nama = "Muhammad Fikri Baihaqi";

// Buat program untuk:

// 1. Menghasilkan inisial nama.
// 2. Mengubah nama menjadi huruf kapital semua.
// 3. Mengubah nama menjadi format Title Case.

// Contoh:

// Muhammad Fikri Baihaqi
// ↓
// M. F. B.

// ---

const nama = "Muhammad Fikri Baihaqi";
const kata = nama.split("");

let inisial ="";
for (let k of kata){
    inisial+= k[0].toUpperCase() +".";
}
console.log(inisial.trim());
console.log(nama.toUpperCase());
let titleCase = "";

for (let k of kata){
    titleCase += k[0].toUpperCase()+k.slice(1).toLowerCase() +" ";
}
console.log(titleCase.trim());