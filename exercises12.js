function konversiMenit(menit) {
  // you can only write your code here!
  if (menit > 60) {
    let hasilMenit = 0
    hasilMenit = Math.floor(menit / 60)
    let hasilDetik = 0
    hasilDetik = menit % 60
    if (hasilDetik < 10) {
      return hasilMenit + ':' + '0' + hasilDetik
    } else {

      return hasilMenit + ':' + hasilDetik
    }
  } else if (menit < 60) {
    return '0:' + menit
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00