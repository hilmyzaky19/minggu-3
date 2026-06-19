// Soal 3 – Tukar Posisi Pemain

// Diberikan data:

// let pemain1 = "Ari";
// let pemain2 = "Bima";

// Tukar posisi kedua pemain tanpa menggunakan variabel sementara.

// Gunakan Destructuring.

// ---
let pemain1 = "Ari";
let pemain2 = "Bima";

[pemain1, pemain2] = [pemain2, pemain1];

console.log("Pemain 1:", pemain1);
console.log("Pemain 2:", pemain2);