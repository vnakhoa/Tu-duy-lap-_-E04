import {question} from "readline-sync";
let n: number = Number(question('Nhap n: '));

let count: number = 0;
for(let i: number = 1; i<=n ; i++) {
    if(n%i == 0)     
        count +=1;
}

if(count < 3 && n >= 2)       // Số âm, số 0 và 1 không phải số nguyên tố
    console.log('Yes');
else
    console.log('No');