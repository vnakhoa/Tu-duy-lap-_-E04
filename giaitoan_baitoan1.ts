import {question} from "readline-sync";
let n: number = Number(question('Nhap n: '));

let sum: number = 0;

for(let i: number = 1; i<=n ; i++) {
    sum +=i;
}
console.log(sum);