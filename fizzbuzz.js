function fizzBuzz() {
    let number = 1;
    while (number <= 100) {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log("FizzBuzz");
        }      
        else if (number % 7 ===0 && (number % 3 === 0 || number % 5 === 0)) {
            console.log('FizzBang');
        }
        else if (number % 11 === 0) {
            console.log("Bong")
        }
        else if (number % 13 === 0) {
            console.log("Fezz")
        }
        else if (number % 3 === 0) {
            console.log("Fizz");
        } 
        else if (number % 5 === 0) {
            console.log("Buzz");
        }
        else if ( number % 7 === 0) {
            console.log("Bang");
        }
        else {
            console.log(number);
        }
        number ++;
    }
}

fizzBuzz();