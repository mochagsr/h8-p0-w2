var nama = 'Mikael';
var peran = '';

if (nama === '') {
  console.log('nama harus diisi!');
} else {
  if (peran === '') {
    console.log('halo ' + nama + ', pilih peranmu untuk memulai game!');
  } else {
    if (peran === 'Ksatria') {
      console.log('selamat datang di dunia proxytia, ' + nama);
      console.log('halo ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
    } else if (peran === 'Tabib') {
      console.log('selamat datang di dunia proxytia, ' + nama);
      console.log('halo tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
    } else if (peran === 'Penyihir') {
      console.log('selamat datang di dunia proxytia, ' + nama)
      console.log('Halo penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
    }
  }
}



// // Output untuk Input nama = '' dan peran = ''
// "Nama harus diisi!"

// //Output untuk Input nama = 'Mikael' dan peran = ''
// "Halo Mikael, Pilih peranmu untuk memulai game!"

// //Output untuk Input nama = 'Nina' dan peran 'Ksatria'
// "Selamat datang di Dunia Proxytia, Nina"
// "Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

// //Output untuk Input nama = 'Danu' dan peran 'Tabib'
// "Selamat datang di Dunia Proxytia, Danu"
// "Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

// //Output untuk Input nama = 'Zero' dan peran 'Penyihir'
// "Selamat datang di Dunia Proxytia, Zero"
// "Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"