import {question} from "readline-sync";
let w: number = Number(question('Nhap w: '));
let h: number = Number(question('Nhap h: '));

let star: string = ' *';
let e: string = '';
for(let k: number =1; k<=h; k++) {
    e = '';
    for(let i: number =1; i<=w ; i++) {
        e += star;
    }
    console.log(e);
}
