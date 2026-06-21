// Soal 2 — Mesin Analisis Teks

// Buat function:

// analisisDokumen(teks)

// Contoh input:

// "JavaScript 2026 sangat populer. Pada tahun 2025 pengguna meningkat 35%."

// Program harus menghasilkan object:

// {
//   jumlahKarakter: ?,
//   jumlahKata: ?,
//   jumlahKalimat: ?,
//   jumlahAngka: ?,
//   angkaTerbesar: ?,
//   angkaTerkecil: ?,
//   kataTerpanjang: ?,
//   rataRataPanjangKata: ?
// }

// Tantangan

// Program harus tetap berjalan meskipun:

// analisisDokumen()

// atau

// analisisDokumen("")

// Wajib menggunakan

// - String Method
// - Number Method
// - Rest Parameter minimal satu kali
function cariRataRata(...angka) {
    if (angka.length === 0) return 0;

    const total = angka.reduce((sum, item) => sum + item, 0);
    return Number((total / angka.length).toFixed(2));
}

function analisisDokumen(teks = "") {

    if (teks.trim() === "") {
        return {
            jumlahKarakter: 0,
            jumlahKata: 0,
            jumlahKalimat: 0,
            jumlahAngka: 0,
            angkaTerbesar: null,
            angkaTerkecil: null,
            kataTerpanjang: "",
            rataRataPanjangKata: 0
        };
    }

    const jumlahKarakter = teks.length;

    const kata = teks
        .split(/\s+/)
        .filter(item => item !== "");

    const jumlahKata = kata.length;

    const kalimat = teks
        .split(/[.!?]+/)
        .filter(item => item.trim() !== "");

    const jumlahKalimat = kalimat.length;

    const angka = teks.match(/\d+/g) || [];
    const angkaNumber = angka.map(item => Number(item));

    const jumlahAngka = angkaNumber.length;

    const angkaTerbesar =
        jumlahAngka > 0 ? Math.max(...angkaNumber) : null;

    const angkaTerkecil =
        jumlahAngka > 0 ? Math.min(...angkaNumber) : null;

    const kataBersih = kata.map(item =>
        item.replace(/[^\w]/g, "")
    );

    let kataTerpanjang = "";

    for (const item of kataBersih) {
        if (item.length > kataTerpanjang.length) {
            kataTerpanjang = item;
        }
    }

    const panjangKata = kataBersih.map(item => item.length);

    const rataRataPanjangKata =
        cariRataRata(...panjangKata);

    return {
        jumlahKarakter,
        jumlahKata,
        jumlahKalimat,
        jumlahAngka,
        angkaTerbesar,
        angkaTerkecil,
        kataTerpanjang,
        rataRataPanjangKata
    };
}

console.log(
    analisisDokumen(
        "JavaScript 2026 sangat populer. Pada tahun 2025 pengguna meningkat 35%."
    )
);
