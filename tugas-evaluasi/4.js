// Soal 4 — Audit Program Warisan

// Seorang programmer meninggalkan kode berikut:

// function sistem() {

//     console.log(user);

//     var user = "Ari";

//     if (true) {
//         let score = 90;
//     }

//     function tampil() {
//         console.log(score);
//     }

//     tampil();
// }

// sistem();

// Tugasmu:

// 1. Temukan seluruh masalah pada program.
// 2. Jelaskan penyebabnya.
// 3. Perbaiki tanpa mengubah tujuan utama program.
// 4. Tulis ulang program dengan struktur scope yang lebih baik.

// Wajib membahas

// - Scope
// - Hoisting

// ---
function sistem() {

    console.log(user);

    var user = "Ari";

    if (true) {
        let score = 90;
    }

    function tampil() {
        console.log(score);
    }

    tampil();
}

sistem();





// versi yang sudah di perbaiki
// *user* nya belum di kasih nilai undefined.
// score berada di block scope yang berbeda sehingga menyebabkan ReferenceError.
// Struktur scope kurang baik karena variabel ditempatkan pada blok yang tidak diperlukan.
// user dipanggil sebelum diberi nilai sehingga menghasilkan undefined.
function sistem() {

    const user = "Ari";
    const score = 90;

    function tampil() {
        console.log("User :", user);
        console.log("Score:", score);
    }

    tampil();
}

sistem();