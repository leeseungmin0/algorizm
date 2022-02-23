// 더하기
function plus(a,b,c){
    console.log(a+b+c);
}
plus(6,7,14);

// 빼기
function minus (d,e,f){
    console.log(d-e-f);
}
minus (20,10,3)

// 곱하기
function multiply (g,h){
    console.log(g*h);
}
multiply (2,24)



const minvalue = Math.min(2,44,555,5,22,9,1000);
console.log('최소값:'+ minvalue);

const arr = [1,11,111,1111,22222];
const maxvalue = Math.max.apply(null,arr)
console.log('최대값:'+maxvalue);