// 2022.02.24 입력된 수 합 구하기
function solution(num){
    let sum = 0;
    for(let i=0; i<=num; i++){
        sum += i;
    }
    return console.log(sum);
}

solution(3);
// 2022.02.24 입력된 수 까지 순서대로 나열 하기
function number(num){
    for(let i=1; i<=num; i++){
        console.log(i)
    }
}

number(8)