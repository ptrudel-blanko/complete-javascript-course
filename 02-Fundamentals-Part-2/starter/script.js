'use strict';


// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(10, 10, 10));

// //test 1

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(85, 54, 41);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(576, 111);

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// const calcTip = function (bill) {
//     return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// const phil = {
//     firstName: 'Philippe',
//     lastName: 'Trudel',
//     age: 1997,
//     job: 'Web developper',
//     friends: ['David', 'Raphaël', 'Vincent'],
//     hasDriversLicense: true,

//     calcAge: function () {
//         return 2022 - this.age;
//     }
// };

// console.log(phil.calcAge());

// console.log(`${phil.firstName} has ${phil.friends.length} friends, and his best friend is called ${phil.friends[0]}.`)


// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//     console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})!`)
// } else {
//     console.log(`John's BMI (${john.bmi}) is higher than Marks's (${mark.bmi})!`)
// }


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 💪`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep} 💪`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('This is a 6');
// }

// const philArray = [
//     'Philippe',
//     'Trudel',
//     1997,
//     'Web developper',
//     ['David', 'Raphaël', 'Vincent'],
// ];

// for (let i = philArray.length - 1; i >= 0; i--) {
//     console.log(philArray[i]);
// }

// const types = [];


//     types[i] = typeof philArray[i];
// }

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);



///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. 
Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);