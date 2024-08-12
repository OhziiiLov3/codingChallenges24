// Factorial exercise using recursion 
const factorial = (number) =>{
    if( number === 2){
        return 2
    }else{
        return factorial(number - 1) * number;
    }
};

console.log(factorial([5]))

// iterative apporoach to factorial 
const iterativeFactorial = (number) =>{
    let answer = 1;
    if(number === 2){
        return answer = 2;
    }
    for(let i = 2; i <= number; i++){
     answer *= i;
    }
    return answer
};

// console.log(iterativeFactorial(5))


// Excersie Fibonacci - given a number N return the index value of the fib sequence, where the sequence is 
//  0,1,1,2,3,5,8,13,21,34,55,89,144

const fibonacciRecursive = (number) =>{
    if(number <= 1){
        return number
    }
       return  fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
};

console.log(fibonacciRecursive(5))
