// //Introduction
// let js = 'amazing'
// console.log(40 + 8 + 23 - 10);

// //Values and Variables
// console.log('Jonas');
// console.log(23);

// let firstName = 'Mathilda';

// console.log(firstName);

// let country = 'Canada';
// let continent = 'North America';
// let population = 36000000;

// console.log(country);
// console.log(continent);
// console.log(population);



// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Me');

// const agePhilippe = 2022 - 1997;
// const ageCaroline = 2022 - 1994;

// console.log(ageCaroline, agePhilippe);


// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;

// const markBMI = (markWeight / markHeight ** 2).toFixed(2);
// const johnBMI = (johnWeight / johnHeight ** 2).toFixed(2);

// const markHigherBMI = markBMI > johnBMI;

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
// } else {
//     console.log(`John's (${johnBMI}) is higher than Mark's BMI (${markBMI})!`)
// }


// const age = 15;
// const isOldEnough = age >= 18;


// if (isOldEnough) {
//     console.log('Sarah can start driving license 🚚')
// } else {
//     console.log('Not old enough')
// }

// const birthYear = 1997;

// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }


// const scoreDolphins = (88 + 91 + 110) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy!');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy!');
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('It a draw!');
// }

const bill = 20;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, The tip was ${tip}, and the total value is ${bill + tip}`);