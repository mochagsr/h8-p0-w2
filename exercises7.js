var row1 = 5
// *
// *
// *
// *
// *
for (let i = 0; i < row1; i++) {
  console.log('*');
}

console.log(' ');

var row2 = 5
for (let j = 0; j < row2; j++) {
  let output = ''
  for (let k = 0; k < row2; k++) {
    output += '*'
  }
  console.log(output);
}
// *****
// *****
// *****
// *****
// *****

console.log(' ');
var row3 = 5

let hasil = ''
for (let l = 0; l < row3; l++) {
  for (let m = 0; m < row3; m++) {
    if (l === m) {
      hasil += '*'
    }
  }
  console.log(hasil);
}

// *
// **
// ***
// ****
// *****