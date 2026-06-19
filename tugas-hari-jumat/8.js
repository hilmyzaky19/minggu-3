// Soal 8 – Update Profil

// Diberikan data:

// const user = {
//     nama: "Budi",
//     umur: 18,
//     kota: "Jakarta"
// };

// Buat object baru yang:

// - umur menjadi 19
// - kota menjadi "Bandung"

// Data asli tidak boleh berubah.

// ---
const user = {
    nama: "Budi",
    umur: 18,
    kota: "Jakarta"
};

const userBaru = {
    ...user,
    umur: 19,
    kota: "Bandung"
};

console.log(userBaru);
console.log(user); 