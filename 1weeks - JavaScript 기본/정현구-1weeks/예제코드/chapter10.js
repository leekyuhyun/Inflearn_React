//반복문 for 

for(let idx=1; idx <= 10; idx++){
    if(idx%2===0){
        continue; //continue를 말하면 아래 실행 x 다시 반복문 돌아옴
    }
    
    console.log(idx);
    
    if(idx >= 5){
        break;
    }
}