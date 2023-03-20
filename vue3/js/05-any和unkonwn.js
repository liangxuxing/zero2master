"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
a = 1;
a = 'sj';
a = a.toFixed(1);
let b;
b = 4;
b = "sa";
// b=b.toFixed(2) //报错
// unknown代表未知的类型
if (typeof b == 'number') {
    b.toFixed(2);
}
// 就不会报错
