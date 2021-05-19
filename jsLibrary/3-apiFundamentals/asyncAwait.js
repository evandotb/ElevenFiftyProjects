/*
Async
- introduced in es2017
- async functions can be thought of as an alternative way of writing promise based code
- avoid chainning promises
- allows us to program using asynchronous requests, (API requests), in a "synchronous" manner
- synchronous code is executed in sequence. each statement waits for the previous statement to finish before executing.
- helps keep our site or app responsive, reducing waiting time for the user.

new keywords
- async
- await
*/

async function myFnOne() {
    // await...
}

const myFnTwo = async () => {
    //await
}

const myFnThree = () => {
    //await... (syntax error since this function is not declared an async function)
}

// async functions are normal JS function with one key difference: they always return a promise

async function fn() {
    return 'hello';
}
fn().then(console.log());
fn().then(data => {
    console.log(data);
})

/*
- fn() returns a resolved promise of "hello"
- the return value of 'hello' is wrapped in a promise via the promise constructor. the body of an async function is always wrapped in a new promise
*/

function fnAgain() {
    return Promise.resolve('Hello');
}

fnAgain().then(console.log());

async function foo() {
    throw Error('This is a mistake');
}

//foo().catch(console.log);
//foo().then(console.log);

/*
foo will return a rejected promise if the error is uncaught. async function will always return whatever you want to return, but you will always get a promise out of a async function
*/

/*
Await
- only used within an async function
- tells js that there is a promise returning and that we want to invoke and wait on the response before moving on to the next line

let testResponse = await somePromiseReturningFunction();
*/

function firstLockBox() {
    return new Promise(function(resolve, reject) {
        if(true) {
            resolve(12345);
        } else {
            reject(error('Unexpected Error'));
        }
    })
}

function secondLockBox(key) {
    return new Promise(function(resolve, reject) {
        if(key === 12345) {
            resolve(98765);
        } else {
            reject(error('Wrong Key'));
        }
    })
}

function thirdLockBox(key) {
    return new Promise(function(resolve, reject) {
        if(key === 98765) {
            resolve('Treasure Struck!');
        } else {
            reject(error('Wrong Key'));
        }
    })
}

async function openBoxes() {
    let firstBox = await firstLockBox();
    console.log(firstBox);
    let secondBox = await secondLockBox(firstBox);
    console.log(secondBox);
    let thirdBox = await thirdLockBox(secondBox);
    console.log(thirdBox);
}

openBoxes();
console.log('Hello World');