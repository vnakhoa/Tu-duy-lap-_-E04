import {question} from "readline-sync";
let n: number = Number(question('Nhap n: '));

let sum_soChan: number = 0;

for(let i: number = 1; i<=n ; i++) {
    if(i%2 ==0 && i !=0)
        sum_soChan += i;
}
console.log(sum_soChan);