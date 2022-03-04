// 총 시간을 60초로 나누면 몫이 분, 나머지가 초
// let sec = time % 60;
// let min = Math.floor(time / 60);

// 자릿수를 채워주기 위해서 padStart(2, "0")
// padStart를 쓰려면 문자열이어야 하므로 String()

let time = 180; //총 제한시간 지정
setInterval(function(){
    if(time >= 0){
        const min = String(Math.floor(time / 60)).padStart(2, "0");
        const sec = String(time % 60).padStart(2, "0");
        //console.log(min + " : " + sec);
        time = time - 1;
    }
},1000)
