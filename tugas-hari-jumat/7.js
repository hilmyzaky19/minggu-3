// Soal 7 – Merge Data Pengguna

// Diberikan data:

// const akun = {
//     nama: "Fikri",
//     email: "fikri@email.com"
// };

// const profil = {
//     umur: 20,
//     kota: "Bandung"
// };

// Gabungkan menjadi satu object baru menggunakan Spread Operator.

// Output:

// {
//     nama: "Fikri",
//     email: "fikri@email.com",
//     umur: 20,
//     kota: "Bandung"
// }

// ---

const akun = {
    nama: "Fikri",
    email: "fikri@email.com"
};

const profil = {
    umur: 20,
    kota: "Bandung"
};

const dataPengguna = {
    ...akun,
    ...profil
};

console.log(dataPengguna);