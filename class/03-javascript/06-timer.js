let isStarted = false;

const pressedBtn = () => {
    if (isStarted === false) {
        isStarted = true;

        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
        document.getElementById("auth").innerText = token;
        document.getElementById("done").disabled = false;
        //타이머
        let time = 180;
        let interval = null;

        interval = setInterval(function () {
        if (time >= 0) {
            const min = String(Math.floor(time / 60)).padStart(2, "0");
            const sec = String(time % 60).padStart(2, "0");
            document.getElementById("timer").innerText = (min + " : " + sec);
            time = time - 1;
        } else {
            document.getElementById("done").disabled = true;
            isStarted = false;
            clearInterval(interval);
            // clearInterval(this);
        }
        }, 1000);
    } else {
        alert("타이머가 이미 동작 중 입니다")
    }
    
}


// //함수 선언식 - 호이스팅 문제가 있다
// function hello() {
//     alert("hey");
// }
// //함수 표현식
// const heyy = function () {
//     alert("heyyy");
// }
// //화살표함수 - 실무에서 가장 많이 사용
// const bye = () => {
//     alert("good byeee");
// }
