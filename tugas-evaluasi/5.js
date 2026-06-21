

const peserta = [
    {
        nama: "Ari",
        nilai: [90, 80, 85]
    },
    {
        nama: "Bima",
        nilai: [100, 60, 70]
    },
    {
        nama: "Citra",
        nilai: [95, 90, 88]
    }
];

function buatLeaderboard(data = []) {

    let daftarPeserta = [...data];
    const riwayatPerubahan = [];

    function catat(aksi, detail) {
        riwayatPerubahan.push({
            aksi,
            detail,
            timestamp: new Date()
        });
    }

    function rataRata(nilai) {
        const total = nilai.reduce((sum, n) => sum + n, 0);
        return total / nilai.length;
    }

    return {

        tambahPeserta(nama, ...nilai) {
            daftarPeserta.push({
                nama,
                nilai
            });

            catat("TAMBAH PESERTA", { nama, nilai });
        },

        hapusPeserta(nama) {
            daftarPeserta = daftarPeserta.filter(
                peserta => peserta.nama !== nama
            );

            catat("HAPUS PESERTA", { nama });
        },

        ubahNilai(nama, ...nilaiBaru) {
            const peserta = daftarPeserta.find(
                item => item.nama === nama
            );

            if (!peserta) {
                return "Peserta tidak ditemukan";
            }

            peserta.nilai = nilaiBaru;

            catat("UBAH NILAI", {
                nama,
                nilaiBaru
            });
        },

        ranking() {
            return [...daftarPeserta]
                .map(item => ({
                    nama: item.nama,
                    nilai: item.nilai,
                    rataRata: Number(
                        rataRata(item.nilai).toFixed(2)
                    )
                }))
                .sort((a, b) => b.rataRata - a.rataRata);
        },

        riwayat() {
            return riwayatPerubahan;
        }
    };
}
const leaderboard = buatLeaderboard(peserta);

console.log("--- RANKING AWAL ---");
console.log(leaderboard.ranking());

leaderboard.tambahPeserta("Doni", 80, 85, 90);

console.log("--- SETELAH TAMBAH PESERTA ---");
console.log(leaderboard.ranking());

leaderboard.ubahNilai("Bima", 95, 90, 100);

console.log("--- SETELAH UBAH NILAI BIMA ---");
console.log(leaderboard.ranking());

leaderboard.hapusPeserta("Ari");

console.log("--- SETELAH HAPUS ARI ---");
console.log(leaderboard.ranking());

console.log("---- RIWAYAT PERUBAHAN ----");
console.log(leaderboard.riwayat());