import {question} from "readline-sync";
let n: number = Number(question('Nhap n: '));

let tich: number = 1;

for(let i: number = 1; i<=n ; i++) {
    tich *= i;
}
console.log(tich);