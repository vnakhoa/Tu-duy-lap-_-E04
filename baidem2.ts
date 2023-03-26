import {question} from "readline-sync";
let m: number = Number(question('Nhap m: '));
let n: number = Number(question('Nhap n: '));

let count: number = 0;

for(let i: number = m; i<=n ; i++) {
    if(i%2 ==0 && i !=0)
        count +=1;
}
console.log(count);