/**
 * This function create a pryamid from numbers character 
 * The height of pryamid must be specified  
 * 
 * @param {number} height is the height of pryamid 
 * @param {number} startingnumber is the 
 */

function NumberPryamid(height, startingnumber = 0) {
    let number = startingnumber;
    for (let i = 0; i < height; i++) {
        let row = '';
        for (let j = 0; j < height - i - 1; j++) {
            row += ' ';
        }
        for (let k = 0; k < (2 * i + 1); k++) {
            row += number;
            number += 1;
        }
        console.log(row);
    }
}

NumberPryamid(3);
