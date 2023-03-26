import {question} from "readline-sync";
let k: number = Number(question('Nhap do dai k: '));

let s: string = ' *';
let e: string = '';

for( let i: number = 1; i<=k ; i++) {
    e += s;
}
console.log(e);



