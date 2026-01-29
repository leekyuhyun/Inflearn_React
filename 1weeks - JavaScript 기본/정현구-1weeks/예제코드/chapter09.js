// 1. if 조건문 (if문)
let num = 9;

if (num>=10){
    // console.log("num은 10이상입니다.");
}
else if(num>=5){
    // console.log("num은 5이상입니다.");
}
else{
    // console.log("조건이 거짓입니다.");
}   

// 2. Switch문 
// 다수의 조건 이용시 if 보다 직관적 

let animal = "cat";

switch (animal){
    case "cat":{
        console.log("고양이");
        break;
    }
    case "dog":{
        console.log("강아지");
        break;
    }
    case "bear":{
        console.log("곰");
        break;
    }
    case "tiger":{
        console.log("호랑이");
        break;
    }       
    default:{
        console.log("그런 동물은 없습니다.");
    }
}

