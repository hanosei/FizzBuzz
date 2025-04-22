function fizzBuzz() {
    let number = 1;
    
    while (number <= 100) {
        console.log(number); number ++;
        if (number % 3 === 0) {
            console.log("Fizz");
        }
        if (number % 5 === 0) {
            console.log("Buzz");
        }
        if (number % 3 === 0 && 5 === 0) {
            console.log("FizzBuzz");
        }
    }
}

fizzBuzz()