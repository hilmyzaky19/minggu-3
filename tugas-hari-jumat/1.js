// Soal 1 – Profil Karakter Game

// Diberikan data:

// const hero = {
//     nama: "GatotKaca",
//     kelas: "Tank",
//     level: 25,
//     hp: 5000,
//     mana: 800
// };

// Lakukan hal berikut:

// 1. Ambil nilai "nama", "kelas", dan "hp" menggunakan Object Destructuring.
// 2. Simpan "mana" ke variabel bernama "energi".
// 3. Tambahkan nilai default "guild = "Tanpa Guild"".
// 4. Tampilkan seluruh hasilnya.

const hero = {
    nama: "GatotKaca",
    kelas: "Tank",
    level: 25,
    hp: 5000,
     mana: 800
 };

const {nama,kelas,hp,mana:energi, guild = "tanpa guild"} = hero;
console.log(nama);
console.log(kelas);
console.log(hp);
console.log(energi);
console.log(guild);


