/*
What is an API

- Application program interface
-Allows application to communicate with one another
-Not the database or server
-Allows us access point(s) to the server
-come in the form of an endpoint

Asynchronous programming

-allows a program to do more than one thing at a time.

fetch()
-an asynchronous method 
-is a part of the browser window, not JavaScript
-starts the process of fetching a resource from the network
-returns a promise which is fulfilled once the response is available

promise(s)

Always one of three states
-pending
initial state neither fulfilled or rejected

-fulfilled
meaning the operation completed successfully

-rejected
meaning the operation failed

with a fetch()
-will resolve into a response object that represents the response of the rquest made.

*/

const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

//console.log(searchForm, spaceShips);

function fetchSpace() {
    event.preventDefault();
//    1
    fetch(baseURL)
    .then(results => {
        console.log(results);
//              2
        return results.json();
    })
    .then(json => {
        console.log(json);
//              3
        displayRockets(json);
    })
//      4
    .catch(err => console.log(err))
}

//fetchSpace();

/*
1: fetch() method starts the process of fetching a resource from a network. returns a promise which is fulfilled once the response is avialable.

2: capture the results from an api in a promise resolver, received as a JSON
*JavaScript object notation
- done by using the json() method 
-returns a promise

3: A callback function that is executed by another callback function (first '.then') is resolved.

4: best practice for each fetch is using a .catch() method so we can catch any errors that occur throughout the fetch and promise process.
*/

function displayRockets(rockets) {
    console.log('API Response:', rockets);
    //when working with any api we will always want to console.log the response to see how the data is structured so we can effectively step through it and grab what we need.

    rockets.forEach(r => {
        console.log(r);
        let rocket = document.createElement('li'); rocket.innerText = r.name;
        spaceShips.appendChild(rocket);
    })

    //created elements
    let rocketOne = document.createElement('li');

    //add attributes
    rocketOne.innerText = `sample: ${rockets[0].name}`;

    //place elements
    spaceShips.appendChild(rocketOne);

}

//! CHALLENGE:
/*
    Add the following functionality: 
    -When we click the submit button, the fetchSpace function should be invoked.
    note: comment out the line where we invoke it ourselves: fetchSpace()
*/

searchForm.addEventListener('submit', fetchSpace);

/*
document.querySelector('form').addEventListener('submit', fetchSpace)
*/

console.log(document);
console.log(document.getElementsByTagName('form'));