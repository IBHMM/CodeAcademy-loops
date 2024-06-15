/**
 * Create sequence of fibonacci numbers the lenght of sequence can be specified otherwice it considered as 5 
 * 
 * @param {number} [number = 5] - The number of elements in the Fibonacci sequence to generate.
 */

function Fibonacci(number) {
    if (number <= 0) {
        console.log([]);
        return;
    }
    
    const fibonacci = [0];
    if (number > 1) {
        fibonacci.push(1);
    }
    
    for (let i = 2; i < number; i++) {
        const newNumber = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(newNumber);
    }
    let result = "";
    fibonacci.forEach((n, index) => {
        if (index == number - 1) {
            result += n;
        }else {
            result += n + ', ';
        }
    })

    console.log(result)
}

Fibonacci(10);
