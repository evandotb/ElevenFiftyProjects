/*
Pig Latin Challenge
Create a function that takes in strings
In the function, translate a phrase into pig latin and print it to the console.
If able to do so, return the value into another variable and print that variable.

What is Pig Latin?
If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay).
If the word begins with a vowel, simply add an 'ay' at the end of the word.
*/
/*
What to Consider When Breaking Down this Problem
What kind of parameters does my function need?
How can we look at each individual letter in a string?
What methods are available to us?
How can we move information within an array of items?
What kind of conditions would I need to check against?
vowel vs consonant?
What's easier?
How can we store new information within a variable?
*/

let thisString = 'Pig Latin';

function pigLatin(word) {
    word = word.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let firstLetter = word[0];

    if(vowels.includes(firstLetter)) {
        return word + 'ay';
    } else {
        for(let letter of word) {
            if (vowels.includes(letter)) {
                vowelIndex = word.indexOf(letter)
                console.log(vowelIndex);
                console.log(letter);
                break;
            }
        }
        return word.slice(vowelIndex) + word.slice(0, vowelIndex) + 'ay'
    }
}

console.log(pigLatin(thisString));

// function pigLatin(word) {
//     word = word.toLowerCase();
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// vowelIndex = 0;

// if (vowels.includes(word[0])) {
//     return word + 'ay';
// } else {
//     for (let letter of word) {
//         if(vowels.includes(letter)) {
//             vowelIndex = word.indexOf(letter);
//             break;
//         }
//     }
//     return word.slice(vowelIndex) + word.slice(0, vowelIndex) + 'ay';
// }

// }

// console.log(pigLatin('Pig Latin'));

// let str = '';
// let vowels = ['a', 'e', 'i', 'o', 'u']

// if(vowels.indexOf(str[index])!== -1){ 
//     return str+"ay";
// }
// for(index=1;index<str.length;index++){
//     if(vowels.indexOf(str[index]) !==-1){
//         break;
//    }
//    console.log(str("pig latin"))
// }

// str = 'Pig Latin';
// console.log(stfr);