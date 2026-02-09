const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수 
    //executor

    setTimeout(() => {
        const num = 10;

        if (typeof num === 'number') {
            resolve(num + 10);
        } else {
            reject("num이 숫자가 아닙니다.")
        }
    }, 2000);
});

//* them 메서드 
// -> 그 후에 
//* then 메서드를 이용하면 Promise로 관리하는 비동기 작업 결과값을 자유롭게 이용할 수 있음
//* reject 상태 일시 them 실행 안됨. -> catch 사용 

// promise.then((value) => {
//     console.log(value);
// });

// promise.catch((error) => {
//     console.log(error);
// });

//* 연달아 사용하는 방법 
promise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
}); // Promise Chaining: then과 catch를 연달아 사용하는 것 과 같음 


//* 실용예제: 함수 안에서 프로미스 객체를 새롭게 생성하여 
//* 동적으로 매개변수를 받아 숫자의 값을 바꿔가면서 해보기 

function add(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수 
        //executor

        setTimeout(() => {

            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다.")
            }
        }, 2000);
    });
    return promise;
}

add(0).then((result) => {
    console.log(result);
    return add(result);
}).then((result) => {
    console.log(result);
    return add(undefined);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})