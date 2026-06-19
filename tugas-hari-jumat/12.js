// Soal 12 – Sistem Ranking

// Diberikan data:

// const ranking = [
//     "Ari",
//     "Bima",
//     "Citra",
//     "Dewi",
//     "Eko"
// ];

// Gunakan Destructuring untuk mendapatkan:

// - Juara 1
// - Juara 2
// - Juara 3
// - Sisa peserta

// ---
const ranking = [
    "Ari",
    "Bima",
    "Citra",
    "Dewi",
    "Eko"
];

// Destructuring
const [juara1, juara2, juara3, ...sisaPeserta] = ranking;

console.log("Juara 1:", juara1);
console.log("Juara 2:", juara2);
console.log("Juara 3:", juara3);
console.log("Sisa peserta:", sisaPeserta);