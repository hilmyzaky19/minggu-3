// Soal 13 – Party RPG

// Diberikan data:

// const party = [
//     {
//         nama: "Ari",
//         role: "Tank",
//         hp: 3000
//     },
//     {
//         nama: "Bima",
//         role: "Mage",
//         hp: 1500
//     },
//     {
//         nama: "Citra",
//         role: "Support",
//         hp: 1800
//     }
// ];

// Buat function:

// buatPartyBaru(
//     namaParty,
//     ...anggota
// )

// Function harus:

// 1. Menerima jumlah anggota yang tidak tetap.
// 2. Membuat salinan anggota menggunakan Spread Operator.
// 3. Menampilkan daftar anggota menggunakan Destructuring.
// 4. Tidak boleh mengubah data party asli.

// ---

// Tantangan Logika 2 (Hard Mode)

// Buat function:

// buatLaporanSekolah(
//     namaSekolah,
//     ...siswa
// )

// Setiap siswa memiliki format:

// {
//     nama,
//     nilai,
//     kelas
// }

// Function harus menampilkan:

// - jumlah siswa
// - rata-rata nilai
// - siswa dengan nilai tertinggi
// - siswa dengan nilai terendah
// - daftar nama seluruh siswa

// Gunakan kombinasi:

// - Object Destructuring
// - Array Destructuring
// - Spread Operator
// - Rest Parameter

// ---

// Bonus Challenge

// Buat function:

// buatTim(
//     ketua,
//     wakil,
//     ...anggota
// )

// Function harus menghasilkan object:

// {
//     ketua: "...",
//     wakil: "...",
//     anggota: [...]
// }

// Tambahkan validasi agar jumlah anggota minimal 3 orang.

// Gunakan seluruh konsep yang dipelajari pada bab ini.

const party = [
    {
        nama: "Ari",
        role: "Tank",
        hp: 3000
    },
    {
        nama: "Bima",
        role: "Mage",
        hp: 1500
    },
    {
        nama: "Citra",
        role: "Support",
        hp: 1800
    }
];

function buatPartyBaru(namaParty, ...anggota) {

    // Salinan data menggunakan Spread Operator
    const partyBaru = [...anggota];

    console.log(`=== ${namaParty} ===`);

    // Menampilkan anggota menggunakan Destructuring
    partyBaru.forEach((anggota, index) => {
        const { nama, role, hp } = anggota;

        console.log(
            `${index + 1}. ${nama} | Role: ${role} | HP: ${hp}`
        );
    });

    return partyBaru;
}

buatPartyBaru("Dragon Slayer", ...party);

console.log("\nParty asli tetap:");
console.log(party);

// Tantangan Logika 2 (Hard Mode)

function buatLaporanSekolah(namaSekolah, ...siswa) {

    const dataSiswa = [...siswa];

    const jumlahSiswa = dataSiswa.length;

    const totalNilai = dataSiswa.reduce(
        (total, { nilai }) => total + nilai,
        0
    );

    const rataRata = totalNilai / jumlahSiswa;

    const nilaiTertinggi = [...dataSiswa].sort(
        (a, b) => b.nilai - a.nilai
    )[0];

    const nilaiTerendah = [...dataSiswa].sort(
        (a, b) => a.nilai - b.nilai
    )[0];

    const daftarNama = dataSiswa.map(
        ({ nama }) => nama
    );

    console.log(`\n=== LAPORAN ${namaSekolah.toUpperCase()} ===`);
    console.log(`Jumlah siswa : ${jumlahSiswa}`);
    console.log(`Rata-rata    : ${rataRata.toFixed(2)}`);

    console.log(
        `Nilai tertinggi : ${nilaiTertinggi.nama} (${nilaiTertinggi.nilai})`
    );

    console.log(
        `Nilai terendah  : ${nilaiTerendah.nama} (${nilaiTerendah.nilai})`
    );

    console.log(
        `Daftar siswa    : ${daftarNama.join(", ")}`
    );
}

buatLaporanSekolah(
    "SMK Nusantara",

    {
        nama: "Ari",
        nilai: 95,
        kelas: "XI RPL"
    },

    {
        nama: "Bima",
        nilai: 88,
        kelas: "XI RPL"
    },

    {
        nama: "Citra",
        nilai: 99,
        kelas: "XI RPL"
    },

    {
        nama: "Dewi",
        nilai: 75,
        kelas: "XI RPL"
    }
);

// Bonus Challenge

function buatTim(ketua, wakil, ...anggota) {

    const totalOrang = 2 + anggota.length;

    if (totalOrang < 3) {
        return "Tim harus memiliki minimal 3 orang.";
    }

    return {
        ketua,
        wakil,
        anggota: [...anggota]
    };
}

const tim = buatTim(
    "Ari",
    "Bima",
    "Citra",
    "Dewi",
    "Eko"
);

console.log("\n=== DATA TIM ===");
console.log(tim);