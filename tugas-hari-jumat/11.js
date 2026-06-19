// Soal 11 – Analisis Tim

// Diberikan data:

// const tim = [
//     {
//         nama: "Ari",
//         role: "Tank"
//     },
//     {
//         nama: "Bima",
//         role: "Mage"
//     },
//     {
//         nama: "Citra",
//         role: "Support"
//     }
// ];

// Gunakan Destructuring untuk mengambil:

// - nama pemain pertama
// - role pemain kedua
// - nama pemain ketiga

// Tampilkan hasilnya.

// ---
const tim = [
    {
        nama: "Ari",
        role: "Tank"
    },
    {
        nama: "Bima",
        role: "Mage"
    },
    {
        nama: "Citra",
        role: "Support"
    }
];

// Destructuring array dan object
const [
    { nama: namaPertama },
    { role: roleKedua },
    { nama: namaKetiga }
] = tim;

console.log("Nama pemain pertama:", namaPertama);
console.log("Role pemain kedua:", roleKedua);
console.log("Nama pemain ketiga:", namaKetiga);