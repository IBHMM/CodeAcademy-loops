/**
 * Creates a square shape from '*' characters.
 * The length of the side can be specified; default is 5.
 * 
 * @param {number} [length=5] - The length of the square.
 */
function Square(length = 5) {
    for (let i = 0; i < length; i++) {
        let result = "";
        for (let j = 0; j < length; j++) {
            result += '* ';
        }
        console.log(result);
    }
}

Square(10);
