/**
 * This function create a pryamid from letter which can be specified by user 
 * The height of pryamid must be specified  
 * 
 * @param {char} char specify the letter that pryamid start
 * @param {height} height is just the height of pryamid  
 */

function CharPyramid(char, height) {
    for (let i = 0; i < height; i++) {
        let row = '';

        for (let j = 0; j < height - i - 1; j++) {
            row += ' ';
        }
      
        for (let k = 0; k <= i; k++) {
            row += String.fromCharCode(char.charCodeAt(0) + k);
        }
        
        for (let l = i - 1; l >= 0; l--) {
            row += String.fromCharCode(char.charCodeAt(0) + l);
        }
        console.log(row);
    }
}

CharPyramid('C', 5);
