import {question} from "readline-sync";
let m: number = Number(question('Nhap m: '));
let n: number = Number(question('Nhap n: '));

for(let i: number = m; i<=n ; i++) {
    if(i%6 == 0) {
        console.log(i);
        break;
    }
}