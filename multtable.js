/**
 * This function create multiplication table from 0 to 10 
 * 
 */


function CreateTable() {
    let tableowner = 1;
    while(tableowner < 11) {
        for(let i = 0; i <= 10; i++) {
            let row = ""
            row += tableowner.toString() + " x " + i.toString();
            if (i == 10) {
                row = row + " =  " + (i*tableowner).toString();
            }else {
                row = row + "  =  " + (i*tableowner).toString();
            }
            console.log(row);
        }
        tableowner ++;
        if (tableowner !== 11) {
            console.log("--------------")
        }
    }
}


CreateTable();