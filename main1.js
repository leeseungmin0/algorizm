// if,else 사용한 홀,짝 판별 프로그램

function solution(num){
    if(num%2===0){
        console.log("짝수 입니다.");
    }else{
        console.log("홀수 입니다.")
    }
}

solution(3)


// if,else if 를 이용한 홀,짝 프로그램
function solution2(num){
    if(num%2===1){
        console.log("홀수 입니다.");
    }else if(num%2===0){
        console.log("짝수 입니다.");
    }
}

solution2(10);