"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
// a={
//     f:'sd'
// }错误
a = {
    a: 'sd',
    b: null,
    c: 4
};
let myArr;
// myArr=[1]错误
myArr = ['2'];
// let a:funInter 错误
let c = (a) => {
    return 'helloworld';
};
c(6);
