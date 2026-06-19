// Soal 10 – Hitung Total Nilai

// Buat function:

// hitungTotal(...angka)

// Function menerima jumlah angka yang tidak tetap.

// Contoh:

// hitungTotal(10, 20, 30);
// hitungTotal(5, 10, 15, 20, 25);

// Function harus mengembalikan total seluruh angka.

// Gunakan Rest Parameter.

// ---
function hitungTotal(...angka) {
    let total = 0;

    for (let nilai of angka) {
        total += nilai;
    }

    return total;
}

console.log(hitungTotal(10, 20, 30));
console.log(hitungTotal(5, 10, 15, 20, 25));
