// 비동기 작업 처리하기 1. 콜백함수 예제입니다.

function task() {
  setTimeout(() => {
    console.log("안녕하세요.");
  }, 3000);
}
task();

function add(a, b) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum);
  }, 3000);
}
add(1, 2);

function add2(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}
add2(1, 2, (value) => {
  console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "허니콤보";
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
  });
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (colldownedFood) => {
    console.log(colldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
