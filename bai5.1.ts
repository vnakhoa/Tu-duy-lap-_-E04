import {question} from "readline-sync";
let a: number = Number(question('Nhap a: '));
let b: number = Number(question('Nhap b: '));

let empty: string = ' ';
let soChan: string = '';
let soLe: string = '';

//Cách 1
for(let i: number = a; i<=b ; i++) {
    if(i%2 == 0)
        soChan += (empty + i);
    else
        soLe += (empty +i);
}
console.log('So chan: '+ soChan);
console.log('So le: '+ soLe);

// //Cách 2

// for(let i: number = a; i<=b ; i++) {
//     if(i%2 == 0)
//         soChan += (empty + i);
// }
// console.log('So chan: '+ soChan);

// for(let i: number = a; i<=b ; i++) {
//     if(i%2 != 0)
//         soLe += (empty + i);
// }
// console.log('So le: '+ soLe);


