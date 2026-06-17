
function analisisTeks(teks) {
  const jumlahKarakter = teks.length;
  const jumlahKata = teks.trim().split(/\s+/).filter(Boolean).length;

  const vokal = (teks.match(/[aiueo]/gi) || []).length;
  const konsonan = (teks.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
  const angka = (teks.match(/[0-9]/g) || []).length;
  const spasi = (teks.match(/\s/g) || []).length;

  const adaSimbolKhusus = /[^a-zA-Z0-9\s]/.test(teks);

  const kataArray = teks.match(/[a-zA-Z]+/g) || [];
  let kataTerpanjang = "";

  for (const kata of kataArray) {
    if (kata.length > kataTerpanjang.length) {
      kataTerpanjang = kata;
    }
  }

  return {
    jumlahKarakter,
    jumlahKata,
    jumlahHurufVokal: vokal,
    jumlahHurufKonsonan: konsonan,
    jumlahAngka: angka,
    jumlahSpasi: spasi,
    terdapatSimbolKhusus: adaSimbolKhusus,
    kataTerpanjang,
  };
}

const teks1 = "Saya sedang belajar JavaScript di tahun 2026!";
console.log(analisisTeks(teks1));


const teks2 = "Makan nasi goreng setiap pagi membuat badan lebih berenergi.";
console.log(analisisTeks(teks2));


const teks3 = "Harga laptop baru Rp15000000, cukup mahal ya?";
console.log(analisisTeks(teks3));