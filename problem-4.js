function findingBadData(numbers){
    // function for input an array and output negetive number count
    if (Array.isArray(numbers) != true){
        return "Povide an array as input.";
    }
    // function code start here
    let count = 0;
    // let negetiveNumber = [];
    for (let i = 0; i < numbers.length; i++ ){
        const element = numbers[i];
        if (element < 0){
            count++;
            // negetiveNumber.push(element);
            }
    }
    return count; // negetiveNumber;
}

// let numbers = [1, 2, 5];
let numbers = [2, -5, -7, -13];
// let numbers = [-4, -9, -5, -33, -55];
// let numbers = 'abc';
// let numbers = 2;
const x = findingBadData(numbers);
console.log(x);
// console.log(Array.isArray(numbers));