function mindGame(number){
    // function for input positive number and output doing some mathemetical operations
    if(typeof number != 'number' || number < 0) {
        return "Provide positive number.";
    }
    // function code start here
    const result = (((number * 3) + 10) / 2) - 5;
    return result;
}


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


function isLGSeven(number){
    // function for input a number and output compare with 7 and return substruction or multiply by 2
    if (typeof number != 'number'){
        return "Provide a number";
    }
    // function code start here
    const difference = number - 7;
    if (difference < 7 ){
        return number - 7;
    } else {
        return number * 2;
    }
}


function findingBadData(numbers){
    // function for input an array and output negetive number count
    if (Array.isArray(numbers) != true){
        return "Povide an array as input.";
    }
    // function code start here
    let count = 0;
    for (let i = 0; i < numbers.length; i++ ){
        const element = numbers[i];
        if (element < 0){
            count++;
            }
    }
    return count;
}


function gemsToDiamond(num1, num2, num3){
    // function for input 3 numbers and output some calculations with gems and diamond
    if (typeof num1 != 'number' || typeof num2 != 'number' || typeof num3 != 'number'){
        return "Provide numbers only.";
    }
    // function code start here
    const fnd1GemsPower = 21;
    const fnd2GemsPower = 32;
    const fnd3GemsPower = 43;

    let fnd1diamond = num1 * fnd1GemsPower;
    let fnd2diamond = num2 * fnd2GemsPower;
    let fnd3diamond = num3 * fnd3GemsPower;

    let totalDiamond = fnd1diamond + fnd2diamond + fnd3diamond;

    if (totalDiamond > 1000 * 2){
        return totalDiamond - 2000;
    } else {
        return totalDiamond;
    }
}
