import {question} from "readline-sync";
let n: number = Number(question('Nhap n: '));

let i: number = n%2;
while(i == 0) {
    console.log(n)
    n += n;
}