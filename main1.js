// // if,else 사용한 홀,짝 판별 프로그램

// function solution(num){
//     if(num%2===0){
//         console.log("짝수 입니다.");
//     }else{
//         console.log("홀수 입니다.")
//     }
// }

// solution(3)


// // if,else if 를 이용한 홀,짝 프로그램
// function solution2(num){
//     if(num%2===1){
//         console.log("홀수 입니다.");
//     }else if(num%2===0){
//         console.log("짝수 입니다.");
//     }
// }

// solution2(10);

// function solution(a){
//     if(a==="흐림"){
//         console.log("날씨가 좋지않습니다.");
//     }else if (a==="눈"){
//         console.log("눈이 내릴 예정입니다 .")
//     }else if (a==="비"){
//         console.log("비가 예상됩니다.")
//     }else{
//         console.log("오늘하루는 맑습니다.")
//     }

// }

// solution("비");


function tri(a,b,c){
    if(a>b-c){
        console.log("yes");
    }else{
        console.log("no");
    }

}

tri(13,33,17);