/**
 * 
 * This method creates empty square from '*' character 
 * The length of the side can be specified; default is 5. 
 *  
 * @param {number} [lenght = 5] - the lenght of the side default is 5 
 */

function Frame(lenght = 5) {
    for (let i = 0; i < lenght; i++) {
        let result = "";
        for (let j = 0; j < lenght; j++) {
            if (i == 0 || i == lenght - 1) {
                result += '* ';
            }else if (i > 0 && i < lenght) {
                if (j == 0 || j == lenght - 1) {
                    result += '* '
                }else if (j > 0 && j < lenght - 1) {
                    result += '  '
                }
            }
        }
        console.log(result);
    }
}

Frame(20)