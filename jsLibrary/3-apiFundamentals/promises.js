/*
promise: 
have 3 states
- pending - undefined results
- fulfilled - value result
- rejected - error object result
*/

function getData() {
//              1
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
//          2
        if(true) {
            resolve('Some Data');
        } else {
            reject('Error');
        }
    }, 3000)
})
}

getData()
//      3
.then(data => console.log(data))
//      4
.catch(error => console.log(error))

//console.log(data);

/*
1: creating a new instance of the promise class using the constructor.
This constructor expects a function with two parameters, resolve and reject.
- resolve & reject are callback functions built into the promise class constructor.

2: set up a conditional to direct if it should resolve or reject it.
(resolve: "Some Data" / reject: "Error")

3: when invoked (getData()), returns a promise. Must append promise resolvers to the end of the function call (.then()).
.then() method is our promise resolver. these take in a function to execute once the promise is received.

4: .catch() method handles the reject cases. good practice to include these so we dont have unhandled rejections.
*/

// Boolean declaration
let amIGood = false;

// Promise 
let iCanHaveGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            let gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift); //fulfilled
        } else {
            let naughty = "You've made Santa's naughty list; enjoy your coal!";
        }
        reject(naughty); // rejected
    }
);

//promise call
let checkTwice = function () {
    iCanHaveGift
    .then(function(fulfilled) {
        //nice list = gift
        console.log(fulfilled);
        // output: {brand: 'HasMattelbro', item: 'Turbo-Man action figure'}
})
    .catch(function (error) {
        //naughty list = coal
        console.log(error);
        // output: "You've made Santa's naughty list; enjoy your coal!"
    })
};

checkTwice();