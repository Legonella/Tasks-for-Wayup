'use strict';

// Task 1

const myNativeCity = {
	name: 'Moscow',
	country: 'Russian',
	populationSize: '145,912,025 people',
	futbolStadion: true,
};

console.log(myNativeCity);

// Task 2

const height = 40;
const width = 70;

const res = height * width;
console.log('площадь прямоугольника = ' + res);

// Task 3

const time = 2;
const speedFirst = 95;
const speedSecond = 114;

const distance = speedFirst + speedSecond / time;
console.log('Расстояние между городами = ' + distance);

// Task 4

const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

if (randomNumber < 20) {
	console.log('randomNumber меньше 20');
} else if (randomNumber > 50) {
	console.log('randomNumber больше 50');
} else {
	console.log('randomNumber больше 20, и меньше 50');
}

// Task 5

console.log(randomNumber);


switch (true) {
	case randomNumber < 20:
		console.log('randomNumber меньше 20');
		break;
	case randomNumber > 50:
		console.log('randomNumber больше 50');
		break;
	default:
		console.log('randomNumber больше 20, и меньше 50');
}

