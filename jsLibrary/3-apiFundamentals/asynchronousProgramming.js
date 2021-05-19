//                  1
function getData(callback) {
//      2
    setTimeout(() => {
            3
        callback("Some Data");

    }, 3000);
}
//         4
getData((data) => {
    console.log(data);
})
console.log("Hello World");

/*
1: added a parameter to the getData() function. this parameter is going to expect a callback function when invoked
2: set the setTimeout() method. This will wait the allotted milliseconds (3000) before executing the code inside it.
3: we get the parameter, it is expecting a function to be invoked and send any data we receive ("some data").
4: we invoke our getData() function with an anonymous function as the argument. This anonymous function simply console.logs the received data ("Some Data")
*/