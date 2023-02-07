function evenOdd(string){
    // function for input a string and output even or odd based on string length
    if (typeof string != 'string' || string.length == 0){
        return "Provide valid input";
    }
    // function code start here
    if (string.length % 2 == 0){
        return "even";
    } else {
        return "odd";
    }
}

const x = evenOdd('chatgpt');
console.log(x);
// console.log(typeof x);