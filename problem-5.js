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

const output = gemsToDiamond(1, 1, 1);
// const output = gemsToDiamond(20, 200, 50);
// const output = gemsToDiamond(100, 5, 1);
// const output = gemsToDiamond('a', 5, 1);
// const output = gemsToDiamond(100, -1, 1);
// const output = gemsToDiamond(100, 5, '1');
console.log(output);


// let x = 5;
// let x = '5';
// let x = true;
// console.log(typeof x);