import {question} from "readline-sync";
let k: number = Number(question('Nhap k: '));

let star: string = ' *';
let dolla: string = ' $';
let e: string = '';

for(let i: number =1; i<=k ; i++) {
    if(i%2 ==0)
        e += dolla;
    else
        e += star;      
}
console.log(e);