
// Soal 10 — Mesin Voting

// Buat sistem voting sederhana.

// Setiap kandidat memiliki suara.

// Gunakan closure agar jumlah suara tidak bisa dimodifikasi langsung dari luar program.

// Buat method:

// - vote()
// - hasil()

// ---

// Bagian D — Date Object

function buatVoting(namaKandidat) {
    let suara = 0;

    return {
        vote() {
            suara++;
            console.log(`${namaKandidat} mendapat 1 suara`);
        },

        hasil() {
            console.log(`${namaKandidat} memiliki ${suara} suara`);
        }
    };
}

const kandidatA = buatVoting("Andi");
const kandidatB = buatVoting("Budi");

kandidatA.vote();
kandidatA.vote();
kandidatA.vote();

kandidatB.vote();
kandidatB.vote();

kandidatA.hasil();
kandidatB.hasil();
