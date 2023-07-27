let numbers = [2, 4, 6, 7, 3, -4, -6]

const sumPositiveNum = (numbers) => {
    let sum = 0;
    for (num of numbers) {
        if (num > 0) {
            sum = sum + num ;
        }
    }
    return sum;
}

const result = sumPositiveNum(numbers)
console.log(result);