import { Component } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'javascript-practice';

	/*
  * Reverse String
  */

	reverseString1() {
		let str = (document.getElementById('reverse1-input') as HTMLInputElement).value;
		let splitString = str.split('');
		let reverseArray = splitString.reverse();
		let joinArray = reverseArray.join();
		document.querySelector('#reverse1-output').innerHTML = joinArray;
	}

	reverseString2() {
		let str = (document.getElementById('reverse2-input') as HTMLInputElement).value;
		let reverseString = '';
		for (let i = str.length - 1; i >= 0; i--) {
			reverseString = reverseString + str[i];
		}

		document.querySelector('#reverse2-output').innerHTML = reverseString;
	}

	reverseString3() {
		let str = (document.getElementById('reverse3-input') as HTMLInputElement).value;
		let reverseString = '';
		for (let char of str) {
			reverseString = char + reverseString;
		}

		document.querySelector('#reverse3-output').innerHTML = reverseString;
	}

	reverseString4() {
		let str = (document.getElementById('reverse4-input') as HTMLInputElement).value;
		let reverseString = '';
		str.split('').forEach((char) => {
			reverseString = char + reverseString;
		});

		document.querySelector('#reverse4-output').innerHTML = reverseString;
	}

	/*
  * Reverse Int
  */

	reverseInt() {
		let str = (document.getElementById('reverseInt-input') as HTMLInputElement).value;
		let reverseInt = null;
		let finalInt = null;

		str.split('').forEach((char) => {
			reverseInt = char + reverseInt;
			finalInt = parseInt(reverseInt);
		});

		document.querySelector('#reverseInt-output').innerHTML = finalInt;
	}

	/*
  * Palindrome
  */

	palindrome1() {
		let str = (document.getElementById('palindrome1-input') as HTMLInputElement).value;
		let reverseString = '';
		let isPalindrome = '';
		for (let i = str.length - 1; i >= 0; i--) {
			reverseString = reverseString + str[i];
		}

		if (str === reverseString) {
			isPalindrome = 'true';
		} else {
			isPalindrome = 'false';
		}

		document.querySelector('#palindrome1-output').innerHTML = isPalindrome;
	}

	palindrome2() {
		let str = (document.getElementById('palindrome2-input') as HTMLInputElement).value;
		let reverseString = '';
		let isPalindrome = '';

		str.split('').forEach((char) => {
			reverseString = char + reverseString;
		});

		isPalindrome = str === reverseString ? 'true' : 'false';
		document.querySelector('#palindrome2-output').innerHTML = isPalindrome;
	}

	/*
  * Capitalize Letters
  */

	capitilize() {
		let str = (document.getElementById('capitilize-input') as HTMLInputElement).value;

		return str
			.toLowerCase()
			.split(' ')
			.map((word) => {
				return word[0].toUpperCase() + word.substring(1);
			})
			.join(' ');
	}

	displayCapitilize() {
		let capitilize = this.capitilize();
		document.querySelector('#capitilize-output').innerHTML = capitilize;
	}

	capitilizeAll() {
		let str = (document.getElementById('capitilize2-input') as HTMLInputElement).value;

		return str
			.toLowerCase()
			.split('')
			.map((word) => {
				return word.toUpperCase();
			})
			.join('');
	}

	displayCapitilize2() {
		let capitilize = this.capitilizeAll();
		document.querySelector('#capitilize2-output').innerHTML = capitilize;
	}

	/*
  * Fiz Bizz
  */

	// Print every even number

	displayEvenNumbers() {
		let numbers = (document.getElementById('even-input') as HTMLInputElement).value;

		let numberArray = numbers.split(' ').map(Number);
		let evenArray = [];

		numberArray.forEach((number) => {
			if (number % 2 === 0) {
				evenArray.push(number);
				document.querySelector('#even-output').innerHTML = evenArray.toString();
			}
		});

		/*	Without input
  let numberArray = [ 2, 4, 6, 8 ];
		numberArray.forEach((number) => {
			if ((number / 2) % 1) {
				console.log(number);
			}
		}); */
	}

	displayAllEvenNumbers() {
		let evenArray = [];
		for (let i = 1; i < 1001; i++) {
			if (i % 2 === 0) {
				evenArray.push(i);
				document.querySelector('#evenAll-output').innerHTML = evenArray.toString();
			}
		}
	}

	displayDivisibleBy3() {
		let numbers = (document.getElementById('by3-input') as HTMLInputElement).value;
		let array = numbers.split(' ').map(Number);
		let by3Array = [];
		array.forEach((number) => {
			if (number % 3 === 0) {
				by3Array.push(number);
				document.querySelector('#by3-output').innerHTML = by3Array.toString();
			}
		});

		/* Without dom
    
    let numbArray = [ 1, 3, 6, 9, 12, 13 ];
		numbArray.forEach((number) => {
			if (number % 3 === 0) {
				console.log(number);
			}
    });
    
    */
	}

	/*
  * Max Chars
  */

	// Check which character is most common
	maxChar() {
		let str = (document.getElementById('maxChar-input') as HTMLInputElement).value;
		let maxNumber = 0;
		let maxChar = '';

		const charMap = {};
		str.split('').forEach((char) => {
			if (charMap[char]) {
				charMap[char]++;
			} else {
				charMap[char] = 1;
			}
		});
		for (let char in charMap) {
			if (charMap[char] > maxNumber) {
				maxNumber = charMap[char];
				maxChar = char;
				document.querySelector('#maxChar-output').innerHTML = char;
			}
		}
	}

	/* fizzbuzz!
    * Print out all number between 1 and 100.
    * For mutiples of 3, instead of the number, print 'fizz'
    * * for mutiples of 5, print 'buzz'
    * for mutiples divisble by 3 and 5, print fizzbuzz
    */

	fizzbuzz() {
		let str = (document.getElementById('fizzBuzz-input') as HTMLInputElement).value;

		for (let i = 1; i <= 100; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				console.log('fizzbuzz');
			} else if (i % 3 === 0) {
				console.log('fizz');
			} else if (i % 5 === 0) {
				console.log('buzz');
			} else {
				console.log(i);
			}
		}
	}
}
