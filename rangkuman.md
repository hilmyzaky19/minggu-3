# bab 2 sintaks,statement dan comment
javascript memiliki sintak, yitu aturan penulisan kode agar dapat dipahami oleh program. salah satu aturan nya pake Case-sensitve, artinya huruf besar dan kecil di anggap beda sama mesin (nama,Nama danNAMA) selain itu, tiap intruksi biasanya diakhiri dengan titik koma(;)untuk nandaim akhir dari sebuah printah dan menjaga code tetap rapih
- javascript juga mengenal statement dan expresion. statment itu printah yang nyuruh komputer melakukan suatu tindakan kayak membuat variable,percabangan menghasilkan sebuah nilai, misal nya 5+10, "halo" + "budi"atau 20>18. dalam praktiknya,ekpresion sering di gunakan di dalam statement
- selain itu terdapat comment itu fungsi nya sebagai catatan atau dokumentasi kode dan tidak di jalankan oleh javascript. komentar satu baris ditulis dengan//, sedangkan komentar banyak baris menggunakan /*...*/. komentar yang baik menjelaskan alasan mengapa satu kode dibuat  bukan hanya menjelaskan apa yang di lakuin kode itu

# Rangkuman Bab 3 : variabel di javascript
variabel itu tempat untuk menyimpan data sementara di dalam program. ibaratnya seperti laci yang diberi nama, sehingga kita bisa nyimpern dan ambil data dengan easy, mudah kapan saja di butuh kan

- di java script moderen,variable biasa nya dibuat menggunakan Let dan const
contoh yaaa
-----------------------------------------------------------
let skor = 0;
skor = 50; // boleh diubah

const namaAplikasi = "TokoBuku";
// namaAplikasi = "Kasir"; // error
-----------------------------------------------------------
pas nulis code tuh biasain mulai dengan *const* terlebih dahulu. jika nanti ternyata nilainya perlu berubah, baru di ganti menjadi *let*. nah cara begini bikin kode lebih aman dan mengurangi kesalahan yang tidak di sengaja.

- javascript juga punya kata kunci lama yaitu *var* tapi sekarang dah jarang dipake karena punya banyak banget kelemahan:
variabel bisa bocr keluar dari block kode
bisa di deklarasikan ulang tanpa eror
lebih mudah meimbulkan bug pada program besar

karena itu bagusan make *let* dan *const*

terus kalo mau kasih nama variabel pake camelCase, yaitu kata pertama huruf kecil dan kata berikut nya huruf kapital
contoh
-----------------------------------------------------------
let namaLengkap = "budi";
let totalHarga =  1500000;
let jumlahItemKeranjang = 3;

terus di sarankan kasih nama variabel nya terlalu singkat
let X = "budi";
karna ntar mudah di pahami saat membaca kode di kemudian hari 

# Rangkuman Bab 4 : Tipe Data di javascript
Tipe data adalah jenis nilai yang disimpen dalam sebuah variabel. dengan mengetahui tipe data,Javascript bisa menentukan bagaimana cara mengolah data tersebut,misalnya apakah bisa di hitung, apakah bisa di bandingkan, atau sebagai tampilan text doang.

salah satu kelebihan javascript adalah dynamic typing,yitu satu varuabek bisa berganti tipe data tanpa eror
contoh 
-----------------------------------------------------------
let data = 42; // number
data = "empat dua"; //string
data = true; //boelan
-----------------------------------------------------
tipe data di javascrip di bagi menjadi 2 kelompok yaitu primitif dan non primitif ,
# tipe data primitif
- 1. string
Di gunakan untuk menyimpan text dan harus menggunakan tanda kutip.
-----------------------------------------------------------
let nama = "Budi";
let kota "yogyakarta";
-------------------------------------------------------
- 2. Number 
di gunakan untuk menyimpana angka , baik bulat maupun desimal
------------------------------------------------------
let umur = 21;
let tinggi = 195;
let phi = 3,14
--------------------------------------------------------
- 3. Boelan
let sudahLogin = true;
let lulus = false;
---------------------------------------------------

 - 4. undifined
 terjadi ketika variabel sudah di buat tetapi belum di beri nilai.
 
 -----------------------------------------------
 let nama;
 console.log(nama);
 *undefined*
-----------------------------------------------------

# rangkuman Bab 5: macam-macam oprator di javascript
oprator adalah simbol yang digunakan untuk melakukan perhitungan, membandingkan nilai, menyimpan data ke variabel,atau menggunakan beberapa kondisi.

- 1 oprator aritmatika
digunakan untuk oprasi matematika.
contoh
+ = penjumlah
- = pengurangan
* = perkalian
/ = pembagian
% = sisa bagi (modulus)
** = perpangkatan
---------------------------------------------------
contoh
let hasil 10 + 5; // 15
let sisa = 10 % 3; // 1
let pangkat = 2 **3; // 8

ada juga 
let angka = 5;
angka ++; tambah // 1
angka --; // kurang 1
------------------------------------------------------
- 2 opratro penugasan (assignment)
digunakan untuk menyimpan atau menyimpan atau memperbarui nilai variabel
= = isi nilai 
+= = tambah lalu simpan
-= kurang lalu simpan
*= kali lalu simpan
/= bagi lalu simpan
---------------------------------------------------
let poin = 100;
poin += 50; // 150
poin -= 20; // 130
poin *= 2; // 260

- 3. oprator perbandingan 
di gunakan untuk membandingkan dua nilai dan menghasilkan true atau false
10 > 5; // true 
10< 5; // false
10 >= 10; //true
10 <=5; // false
-----------------------------------------------------------
perbedaan == dan ===
hanya membedakan nilai.
5== 5"5"; // true 
karena javascript mengubah tipe data nya secara otomatis
=== membandingan nilai dan tipe data sekaligus 
------------------------------------------------------
5 === "5" // false
5 === "5"

- 4. oprator logika 
digunain untuk mengambungkan beberapa kondisi.

 A : and (&&)
 semua kondisi harus *true*.
 contoh 
 true && true; // true
 true && false; // false

 B :  NOT (||)
 minimal satu kondisi harus *true*.
minimal satu kondisi harus *true*.
true || false; // true
false || false; // false

C : not(!)
membalikan nilai boolean.
!true; // false 
!false; // true

conntoh dari semua ini
let umur = 20;
let punyaKtp = true;

let bolehDaftar = umur >= 17 && punyaKtp
console.log(bolehDaftar); //true

- 5. prioritas oprator
saat ada banyak oprator dalam satu baris, Javascript punya urutan pengerjaan sendiri.
contoh:
let hasil = 2 + 3 * 4;
console.log (hasil);
karena perkalian yang duluan yang di kerjain

lalu jika mau di ubah urutan nya, gunakan ()tanda kurung
let hasil = (2 + 3)* 4;
console.log(hasil); // 20

# Rangkuman Bab 6 : percabangan (control flow)
percabangan digunakan untuk membuat program bisa mengambil keputusan. Jadi kode tidak selalu berjalan dari atas ke bawah ,tetapi bisa memili jalur tertentu berasarkan kondisi
yang di berikan.

 . 1.if,else if dan else

 - if digunakan untuk menjalankan kondisi bernilai *true*

 let umur = 20;
 if (umur >= 17){
  console.log("boleh membuat ktp");
 }

- if else- if else
let nilai = 82;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 80) {
  console.log("B");
} else if (nilai >= 70) {
  console.log("C");
} else {
  console.log("D");
}
javascript alan mengecek kondisi dari atas ke bawah. saat menemukan kondisi yang benar, kondisi setelah tidak akan di cek lagi.

- 2. switch...case 
digunakan ketika satu variabel memiliki banyak kemungkinan nilai tetap.
let hari = 3;

switch (hari) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  default:
    console.log("Tidak valid");
}
fungsi *break* di gunakan untuk menghentikan proses di dalam *switch*
kalau lupa menulis *break*, kode bisa lanjut ke case berikutnya.
switch (2) {
  case 2:
    console.log("Selasa");
  case 3:
    console.log("Rabu");
}
Nilai Truthy

Selain 6 nilai di atas, semuanya dianggap Truthy.

Contoh:

"halo"
1
100
[]
{}
true
let data = {};

if (data) {
  console.log("Data ditemukan");
}

Output:

Data ditemukan

Walaupun object kosong {}, tetap dianggap Truthy.

Contoh Validasi Sederhana
let nama = "";

if (!nama) {
  console.log("Nama wajib diisi");
}

Operator ! digunakan untuk membalik nilai.

Karena nama kosong (Falsy), maka !nama menjadi true.

# Rangkuman BAB 7 : perulangan (looping)
perulangan (looping)digunakan untuk menjalankan kode yang sama berulang kali tanpa harus menulis kode yang sama berkali-kali. ini sangat berguna menghemat waktu dan menghemat waktu membuat program lebih efisien.

- 1. perulangan *for*
digunakan ketika jumlah pengulangan sudah diketahui.
struktur pembuatan nya 
for (inisialisasi;kondisi;perubahan){
  //kode yang di ulang
}
contoh pembuatan 
for (let i = 1; i <=5; 1++){
  console.log('data ke -" + i);
}
biasa nya code ini di gunain untuk menghitung anka.
menampilkan  data berulang.
mengakses isi array.
contoh array 
const buah = ["Apel", "Jeruk", "Mangga"];

for (let i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}

- 2. perulangan * while*
digunakan ketika jumlah perulangan nya belum di ketahui.
perulangan akan terus berjala selama kondisi *true*
let angka = 1;

while (angka <= 5) {
  console.log(angka);
  angka++;
}

# Bab 8: Array & Array Method 
Array itu tempat nyimpen banyak data dalam satu variabel biar lebih rapi dan gampang dikelola.
Setiap data di dalam array punya indeks, dan indeks selalu dimulai dari 0.
Kita bisa akses, ubah, tambah, atau hapus data di dalam array lewat indeks atau method bawaan JavaScript.

- .length dipakai buat ngeliat jumlah data yang ada di dalam array.
- .push() buat nambah data di bagian akhir array.
- .unshift() buat nambah data di bagian awal array.
- .pop() buat hapus data paling akhir.
- .shift() buat hapus data paling awal.
- .indexOf() dipakai buat nyari posisi (indeks) suatu data di dalam array.
- .includes() dipakai buat ngecek apakah suatu data ada di dalam array atau nggak.
- .splice() dipakai buat hapus, nambah, atau ganti data di posisi tertentu dalam array.
- .slice() dipakai buat ngambil sebagian isi array tanpa mengubah array aslinya.
Array sering dipakai bareng looping supaya bisa ngolah banyak data sekaligus dengan lebih efisien.

Intinya: Array adalah cara paling praktis buat ngelola kumpulan data di JavaScript. 


 
# Bab 9: Function 
Function itu blok kode yang bisa dipakai berulang kali tanpa harus nulis kode yang sama terus.
function salam() {
  console.log("Halo!");
}

salam();
Function harus dipanggil supaya bisa dijalankan.
function sapa() {
  console.log("Selamat Datang");
}

sapa(); // function dijalankan
Parameter adalah tempat menerima data, sedangkan argumen adalah nilai yang dikirim saat function dipanggil.
function sapa(nama) {
  console.log("Halo " + nama);
}

sapa("Hilmy");
Parameter bisa punya nilai default.
function salam(nama = "Guest") {
  console.log("Halo " + nama);
}

salam();
salam("Hilmy");
return digunakan untuk mengembalikan nilai dari function.
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 3);
console.log(hasil);
Setelah return, kode di bawahnya tidak akan dijalankan.
function cekUmur(umur) {
  if (umur < 18) {
    return "Belum cukup umur";
  }

  return "Sudah cukup umur";
}

console.log(cekUmur(17));
Function tanpa return hanya menampilkan hasil dan tidak mengembalikan nilai.
function cetak(a, b) {
  console.log(a + b);
}

let hasil = cetak(2, 3);
console.log(hasil); // undefined
Function Expression adalah function yang disimpan ke dalam variabel.
const kali = function(a, b) {
  return a * b;
};

console.log(kali(4, 5));
Arrow Function adalah cara modern menulis function dengan sintaks yang lebih singkat.
const kali = (a, b) => {
  return a * b;
};

console.log(kali(4, 5));
Jika cuma satu baris, return bisa ditulis lebih ringkas.
const kali = (a, b) => a * b;

console.log(kali(4, 5));

 # Bab 10: Object & Object Method (Versi Bahasa Gawul + Contoh Koding)
Object dipakai buat nyimpen data yang saling berhubungan dalam satu tempat dengan format key : value.
const user = {
  nama: "Hilmy",
  umur: 21,
  pekerjaan: "Peternak"
};
Properti adalah data yang ada di dalam object.
const motor = {
  merek: "Honda",
  warna: "Hitam"
};

console.log(motor.merek);
Dot Notation (.) adalah cara paling sering dipakai buat mengakses properti.
const user = {
  nama: "Hilmy"
};

console.log(user.nama);
Bracket Notation ([]) dipakai kalau nama properti disimpan di variabel atau punya karakter khusus.
const user = {
  nama: "Hilmy"
};

let key = "nama";

console.log(user[key]);
Properti bisa diubah atau ditambah kapan saja.
const user = {
  nama: "Hilmy"
};

user.nama = "Zaky";
user.umur = 21;

console.log(user);
Properti bisa dihapus menggunakan delete.
const user = {
  nama: "Hilmy",
  umur: 21
};

delete user.umur;

console.log(user);
Kita bisa mengecek apakah suatu properti ada menggunakan in.
const user = {
  nama: "Hilmy"
};

console.log("nama" in user);
console.log("umur" in user);
Method adalah function yang berada di dalam object.
const player = {
  nama: "Bima",

  serang() {
    console.log("Menyerang musuh!");
  }
};

player.serang();
this digunakan untuk mengakses properti milik object itu sendiri.
const player = {
  nama: "Bima",

  tampilkanNama() {
    console.log(this.nama);
  }
};

player.tampilkanNama();
Method bisa mengubah data di dalam object menggunakan this.
const rekening = {
  saldo: 100000,

  setor(jumlah) {
    this.saldo += jumlah;
  }
};

rekening.setor(50000);

console.log(rekening.saldo);
for...in digunakan untuk menampilkan semua properti dalam object.
const produk = {
  nama: "Laptop",
  harga: 5000000,
  stok: 10
};

for (let key in produk) {
  console.log(key, produk[key]);
}
Object.keys() menampilkan semua key.
console.log(Object.keys(produk));
Object.values() menampilkan semua value.
console.log(Object.values(produk));
Object.entries() menampilkan key dan value sekaligus.
console.log(Object.entries(produk));

-------------------------------
 # Bab 11: Iterable & Non-Iterable (Versi Bahasa Gawul + Contoh Koding)
Iterable adalah tipe data yang bisa disisir atau diulang satu per satu menggunakan perulangan.

Contoh tipe data Iterable:

Array
String
Map
Set
const buah = ["Apel", "Jeruk", "Mangga"];

for (let item of buah) {
  console.log(item);
}

Output:

Apel
Jeruk
Mangga
String juga termasuk Iterable karena setiap huruf bisa diakses satu per satu.
const nama = "HILMY";

for (let huruf of nama) {
  console.log(huruf);
}

Output:

H
I
L
M
Y
for...of digunakan untuk mengambil nilai dari data yang Iterable.
const angka = [10, 20, 30];

for (let nilai of angka) {
  console.log(nilai);
}

Output:

10
20
30
Non-Iterable adalah tipe data yang tidak bisa disisir satu per satu menggunakan for...of.

Contohnya:

Number
Boolean
Object
const angka = 100;

for (let item of angka) {
  console.log(item);
}

Output:

TypeError: angka is not iterable
Object termasuk Non-Iterable, jadi tidak bisa memakai for...of.
const user = {
  nama: "Hilmy",
  umur: 21
};
Untuk Object gunakan for...in.
const user = {
  nama: "Hilmy",
  umur: 21
};

for (let key in user) {
  console.log(key, user[key]);
}

Output:

nama Hilmy
umur 21
for...in menghasilkan key/properti dari Object.
const laptop = {
  merek: "ASUS",
  ram: "16GB",
  storage: "512GB"
};

for (let key in laptop) {
  console.log(key);
}

Output:

merek
ram
storage
Sedangkan for...of menghasilkan nilai dari Array atau String.
const data = ["alpha", "beta", "gamma"];

for (let nilai of data) {
  console.log(nilai);
}

Output:

alpha
beta
gamma
Perbandingan Singkat

for...of → buat Array, String, Map, Set (mengambil nilai)

const buah = ["Apel", "Jeruk"];

for (let item of buah) {
  console.log(item);
}

for...in → buat Object (mengambil key)

const user = {
  nama: "Hilmy",
  umur: 21
};

for (let key in user) {
  console.log(key);
}