/**
 * Creates an inverted triangle shape from '*' characters.
 * The height of the triangle can be specified default is 5.
 * 
 * @param {number} [height = 5] - The height of the triangle.
*/

function InvertedTriagle(height = 5) {
    let currentlenght = height;
    while(currentlenght >= 0) {
        let result = "";
        for(let i = currentlenght; i > 0; i--) {
            result += '* ';
        }
        console.log(result);
        currentlenght --;
    }
}

Triangle(5);







