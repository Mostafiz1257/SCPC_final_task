const calculator = (num1, num2) => {
    const sum = num1 + num2 ;
    const minus = num1-num2 ;
    const count = num1 * num2 ;
    const division = num1 % num2 ; 
    return {sum , minus , count, division}
}

const result = calculator(3,4)
console.log(result);