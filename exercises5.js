// ===> no 1.
var word1 = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';
// JavaScript is awesome and I love it!
console.log(word1 + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);
console.log('#######################################################');
// === no 2.
var word2 = 'wow JavaScript is so cool';
var exampleFirstWord = word2[0] + word2[1] + word2[2];
var secondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13]; // do your own!
var thirdWord = word2[15] + word2[16]; // do your own!
var fourthWord = word2[18] + word2[19]; // do your own!
var fifthWord = word2[21] + word2[22] + word2[23] + word2[24]; // do your own!

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool
console.log('#######################################################');

// ===> no 3.
var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3 = word3.substring(4, 14); // do your own!
var thirdWord3 = word3.substring(15, 17); // do your own!
var fourthWord3 = word3.substring(18, 21); // do your own!
var fifthWord3 = word3.substring(21, 25); // do your own!

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool
console.log('#######################################################');

// ===> no 4.
var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substring(4, 14); // do your own!
var thirdWord4 = word4.substring(15, 17); // do your own!
var fourthWord4 = word4.substring(18, 20); // do your own!
var fifthWord4 = word4.substring(21, 25); // do your own!

var firstWordLength = exampleFirstWord4.length;
// create new variables around here

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWord4.length);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWord4.length);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWord4.length);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWord4.length);

// First Word: wow, with length: 3
// Second Word: JavaScript, with length: 10
// Third Word: is, with length: 2
// Fourth Word: so, with length: 2
// Fifth Word: cool, with length: 4