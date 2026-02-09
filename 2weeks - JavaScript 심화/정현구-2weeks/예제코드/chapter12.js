//* 비동기 작업 처리 1. 콜백함수 

function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b; // 3
        callback(sum);
    }, 3000);
}

add(1, 2, (value) => { //sum 변수를 add함수 바깥에서도 사용 
    console.log(value);
});

// 1. add 함수가 호출되면서 setTimeout함수가 호출
// 2. setTimeout함수는 콜백함수를 3초뒤에 실행
// 3. 콜백함수에는 sum을 계산하고 매개변수로 받음 callback함수를 다시 호출 하면서 값 전달

//* 음식을 주문하는 상황 (실용 예제)
function orderFood(callback) {
    setTimeout(() => {
        const food = "뼈찜";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);

}
orderFood((food) => {
    console.log(food);

    cooldownFood((food), (cooldownedFood) => {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});

//* 이러한 코드 문제점
//* 콜백함수를 이용해서 받아옴 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 넣어주는 과정
//* 이러한 코드가 반복되면 인덴트: 들여쓰기 ->가 발생, 결국 많아질수록 가독성이 떨어짐
//* 이러한 것을 콜백지옥이라 부름
//* 지옥을 피할려면 promise라는 비동기 작업을 도와주는 객체를 사용해야 함.