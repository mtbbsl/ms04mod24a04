function mindGame(number){
    // function for input positive number and output doing some mathemetical operations
    if(typeof number != 'number' || number < 0) {
        return "Provide positive number.";
    }
    // function code start here
    const result = (((number * 3) + 10) / 2) - 5;
    return result;
}

const x = mindGame(5);
console.log(x);