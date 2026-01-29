// 함수 선언
// * 자바 스크립트 특성상 다른 언어와 다르게 함수가 호출문 아래에 있어도 실행 가능(호이스팅-> 끌어올리다)
function getArea(width,height){
    function another() { // 중첩 함수 
        console.log("another");
    }
    another();
    let area = width * height;
    return area;
}

let area1 = getArea(10,20);
console.log(area1);


