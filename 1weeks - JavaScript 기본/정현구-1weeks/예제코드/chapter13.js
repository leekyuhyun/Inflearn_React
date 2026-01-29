//* 1. 콜백함수: 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미

function main(value) {
    // console.log(1);
    // console.log(value);
    value();
}

// main(sub);

main(() => {
    // console.log("i am sub");
});

// 2. 콜백함수의 활용 
function repeat(count) {
    for(let idx=1; idx <= count; idx++){
        console.log(idx);
    }
}

function repeatDouble(count) {
    for(let idx=1; idx <= count; idx++){
        console.log(idx*2);
    }
}

repeat(5); //1,2,3,4,5까지 출력 
repeatDouble(5); 
// * -> 중복 코드의 문제 

//* 해결 방법 
function repeatA (count, callback){
    for(let idx=1; idx <= count; idx++) {
        callback(idx);
    }
}

repeatA(5, (idx) => {
    console.log(idx);
}); //* 간결화 function 생략 


// repeatA(5, function (idx) {
//     console.log(idx);
// });

// repeatA(5, function (idx) {
//     console.log(idx*2);
// });



