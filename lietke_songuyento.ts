import {question} from "readline-sync";
let m: number = Number(question('Nhap so nguyen duong m: '));

let empty: string = ' ';
let g: string = '';

let count: number = 0;

for(let i: number = 1; i<=m ; i++) {
    if(i == 2) {                              // Sô âm, số 0 và 1 ko phải số nguyên tố.
        g += (empty + i);
    }
    if(i > 2) {                                  
        for(let k: number = 2; k<=i-1 ; k++) {
            count = 0;
            if(i%k == 0) {
                count = 1;
                break;
            } 
        }
        if(count == 1) {
            g = g;
        }
        else if(count == 0) {
            g += (empty + i);
        }
    }
} 
console.log(g);
