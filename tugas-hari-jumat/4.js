// // Soal 4 – Upgrade Karakter

// // Diberikan data:

// // const karakter = {
// //     nama: "Citra",
// //     level: 10,
// //     attack: 100,
// //     defense: 80
// // };
// Buat object baru bernama "karakterUpgrade" dengan ketentuan:

// - level bertambah menjadi 11
// - attack bertambah 20
// - defense bertambah 10

// Data asli tidak boleh berubah.

// Gunakan Spread Operator.

// ---

const karakter = {
    nama: "Citra",
    level: 10,
    attack: 100,
    defense: 80
};

const karakterUpgrade = {
    ...karakter,
    level: karakter.level + 1,
    attack: karakter.attack + 20,
    defense: karakter.defense + 10
};

console.log("Karakter Asli:", karakter);
console.log("Karakter Upgrade:", karakterUpgrade);