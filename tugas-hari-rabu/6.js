// Soal 6 – Analisis Harga

// Diberikan data:

// const harga = 125499.789;

// Buat program untuk:

// 1. Membulatkan ke atas.
// 2. Membulatkan ke bawah.
// 3. Membulatkan ke bilangan terdekat.
// 4. Menampilkan 2 angka di belakang koma.
// 5. Mengubah harga menjadi format Rupiah.

// Contoh:

// Rp125.499,79

// ---

const harga = 125499.789;


Math.ceil(harga);


Math.floor(harga);

// Terdekat
Math.round(harga);

// 2 angka di belakang koma
harga.toFixed(2);