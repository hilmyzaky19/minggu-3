// Soal 5 – Mesin Sensor Kata

// Diberikan kalimat:

// const komentar = "Dasar bodoh! Kamu sangat jelek dan malas.";

// Buat program untuk mengganti kata berikut menjadi ""*"":

// - bodoh
// - jelek
// - malas

// Tampilkan hasil sebelum dan sesudah disensor.

// ---
 const komentar = "Dasar bodoh! Kamu sangat jelek dan malas.";
 console.log("sebelum di sensor:");
 console.log(komentar);
 
 const sensor = komentar
 .replace("bodoh","*")
 .replace ("jelek", "*")
 .replace("malas","*");
 console.log("sesudah di sensor:");
 console.log(sensor);

