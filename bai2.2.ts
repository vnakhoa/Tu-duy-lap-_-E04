import {question} from "readline-sync";
let n: number = Number(question('Nhap n: '));

for( let i: number = 2; i<=n ; i++) {
    if(i%2 ==0)
        console.log(i);
}