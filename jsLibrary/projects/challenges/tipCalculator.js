/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/


let check = (bill, tip) => {
    console.log('Bill:', '$' + bill);
    console.log('Tip:', '$' + tip);

    let tipAmount = bill * tip;
    console.log('Tip Amount:', '$' + tipAmount);

    let total = bill + tipAmount;
    console.log('Total:', '$' + total);
    return total;
}

let payment = check (20, .20);

console.log('Payment:', '$' + payment);