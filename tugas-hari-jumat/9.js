// Soal 9 – Mesin Checkout

// Buat function:

// checkout(...barang)

// Function harus menampilkan:

// - jumlah barang
// - daftar barang
// - barang pertama yang dibeli

// Contoh:

// checkout(
//     "Buku",
//     "Pensil",
//     "Penghapus"
// );

// ---
function checkout(...barang) {
    console.log("Jumlah barang:", barang.length);
    console.log("Daftar barang:", barang);
    console.log("Barang pertama yang dibeli:", barang[0]);
}

checkout(
    "Buku",
    "Pensil",
    "Penghapus"
);
