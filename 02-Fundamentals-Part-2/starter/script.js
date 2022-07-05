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


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        return (this.mass / this.height ** 2).toFixed(2);
    }
}
console.log(mark.calcBMI());

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        return (this.mass / this.height ** 2).toFixed(2);
    }
}

console.log(john.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})!`)
} else {
    console.log(`John's BMI (${john.calcBMI()}) is higher than Marks's (${mark.calcBMI()})!`)
}