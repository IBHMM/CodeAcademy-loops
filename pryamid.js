/**
 * This function create a pryamid from '*' character 
 * The height of pryamid must be specified  
 * 
 * @param {number} height is just the height of pryamid 
 */

function Pryamid(height) {
    for (let i = 0; i < height; i++) {
        let row = '';
        for (let j = 0; j < height - i - 1; j++) {
            row += ' ';
        }
        for (let k = 0; k < (2 * i + 1); k++) {
            row += '*';
        }
        console.log(row);
    }
}

Pryamid(3);
