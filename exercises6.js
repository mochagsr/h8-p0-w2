// ===> no 1.
console.log('no 1');
console.log('looping pertama');
let i = 1
while (i <= 20) {
  if (i % 2 == 0) {
    console.log(i + ' - I love coding');
  }
  i++
}
console.log('looping kedua');
let j = 20
while (j > 0) {
  if (j % 2 === 0) {
    console.log(j + ' - I will become fullstack developer');
  }
  j--
}


// LOOPING PERTAMA
// 2 - I love coding
// 4 - I love coding
// 6 - I love coding
// 8 - I love coding
// 10 - I love coding
// 12 - I love coding
// 14 - I love coding
// 16 - I love coding
// 18 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 18 - I will become fullstack developer
// 16 - I will become fullstack developer
// 14 - I will become fullstack developer
// 12 - I will become fullstack developer
// 10 - I will become fullstack developer
// 8 - I will become fullstack developer
// 6 - I will become fullstack developer
// 4 - I will become fullstack developer
// 2 - I will become fullstack developer

// ===> no 2.
console.log('no 2');
console.log('looping pertama');
for (let k = 1; k <= 20; k++) {
  console.log(k + ' - I love coding');
}
console.log('looping kedua');
for (let l = 20; l > 0; l--) {
  console.log(l + ' - I will become fullstack developer');
}
// LOOPING PERTAMA
// 1 - I love coding
// 2 - I love coding
// 3 - I love coding
// 4 - I love coding
// 5 - I love coding
// 6 - I love coding
// 7 - I love coding
// 8 - I love coding
// 9 - I love coding
// 10 - I love coding
// 11 - I love coding
// 12 - I love coding
// 13 - I love coding
// 14 - I love coding
// 15 - I love coding
// 16 - I love coding
// 17 - I love coding
// 18 - I love coding
// 19 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 19 - I will become fullstack developer
// 18 - I will become fullstack developer
// 17 - I will become fullstack developer
// 16 - I will become fullstack developer
// 15 - I will become fullstack developer
// 14 - I will become fullstack developer
// 13 - I will become fullstack developer
// 12 - I will become fullstack developer
// 11 - I will become fullstack developer
// 10 - I will become fullstack developer
// 9 - I will become fullstack developer
// 8 - I will become fullstack developer
// 7 - I will become fullstack developer
// 6 - I will become fullstack developer
// 5 - I will become fullstack developer
// 4 - I will become fullstack developer
// 3 - I will become fullstack developer
// 2 - I will become fullstack developer
// 1 - I will become fullstack developer

// ===> no 3.
console.log('no 3');

for (let m = 1; m <= 100; m++) {
  if (m % 2 === 0) {
    console.log('counter sekarang = ' + m);
    console.log('GENAP');
  } else {
    console.log('counter sekarang = ' + m);
    console.log('GANJIL');
  }
}


for (let n = 1; n <= 100; n += 2) {
  //console.log('ini ke ' + objek3B)
  if (n % 3 === 0) {
    console.log(n + ' Kelipatan 3')
  } else {
    console.log(' ')
  }
}

for (let o = 1; o <= 100; o += 5) {
  if (o % 6 === 0) {
    console.log(o + ' Kelipatan 6');
  } else {
    console.log(' ');
  }
}

for (let p = 1; p <= 100; p += 9) {
  if (p % 10 === 0) {
    console.log(p + ' Kelipatan 10');
  } else {
    console.log(' ');
  }
}
// //contoh - ganjil genap
// //counter sekarang = 1,
// //output
// "GANJIL"
// //counter sekarang = 2,
// //output
// "GENAP"
// // dan seterusnya :)

// //contoh - untuk pertambahan counter 2
// //counter sekarang = 1,
// //output
// ""
// //counter sekarang = 3,
// //output
// "3 KELIPATAN 3"
// // dan seterusnya :)

// //contoh - untuk pertambahan counter 5
// //counter sekarang = 1,
// //output
// ""
// //counter sekarang = 6,
// //output
// "6 KELIPATAN 6"
// // dan seterusnya :)

// //contoh - untuk pertambahan counter 9
// //counter sekarang = 1,
// //output
// ""
// //counter sekarang = 10,
// //output
// "10 KELIPATAN 10"
// // dan seterusnya :)