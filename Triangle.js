/**
 * Creates a triangle shape from '*' characters.
 * The height of the triangle can be specified default is 5.
 * 
 * @param {number} [height = 5] - The height of the triangle.
*/

function Triangle(height = 5) {
    let currentlenght = 1;
    while(currentlenght <= height) {
        let result = "";
        for(let i = 0; i < currentlenght; i++) {
            result += '* ';
        }
        console.log(result);
        currentlenght ++;
    }
}



Triangle();







