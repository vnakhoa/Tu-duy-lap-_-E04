import {question} from "readline-sync";
let h: number = Number(question('Nhap h: '));

let star: string = '*';
let empty: string = ' ';

let g: string = '';

for(let i: number = 1; i<=h ; i++) {
    g += (empty + star);
    console.log(g);
}
