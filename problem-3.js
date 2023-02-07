function isLGSeven(number){
    // function for input a number and output compare with 7 and return substruction or multiply by 2
    if (typeof number != 'number'){
        return "Provide a number";
    }
    // function code start here
    // const difference = Math.abs(number - 7);
    const difference = number - 7;
    if (difference < 7 ){
        return number - 7;
    } else {
        return number * 2;
    }
}

// const x = isLGSeven(6);
// const x = isLGSeven(-15);
// const x = isLGSeven(15);
// const x = isLGSeven('15');
console.log(x);