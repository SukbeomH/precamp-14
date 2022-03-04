//모든 버튼을 비활성화 한 뒤 시작
    //인증번호전송버튼 비활성화, 색 바꿈
document.getElementById("send").disabled = true;
document.getElementById("send").style.color = "#d2d2d2";
    //인증완료버튼 비활성화, 색 바꿈
document.getElementById("done").disabled = true;
document.getElementById("done").style.background = "#d2d2d2";
    //가입하기 버튼 비활성화, 색 바꿈
document.getElementById("submit").disabled = true;
document.getElementById("submit").style.border = "1px solid #d2d2d2";
document.getElementById("submit").style.color = "#d2d2d2";

//타이머 & 토큰
    //타이머 초기화
let isStarted = false;
let isAuthed = false;
//타이머 실행
let time = 180;
const tokenSend = () => {
    if (isStarted === false) {
        isStarted = true;
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
        document.getElementById("auth").innerText = token;
        document.getElementById("send").disabled = false;
        document.getElementById("done").style.background = "#0068ff";
        document.getElementById("done").disabled = false;

        //타이머
        let interval = null;

        // 시간이 줄어든다
        interval = setInterval(function () {
        if (time >= 0) {
            const min = String(Math.floor(time / 60));
            const sec = String(time % 60).padStart(2, "0");
            document.getElementById("timer").innerText = (min + ":" + sec);
            time = time - 1;
        } else {
            // 타이머가 끝나면 초기화
            document.getElementById("send").disabled = true;
            document.getElementById("send").style.color = "#d2d2d2";
            isStarted = false;
            clearInterval(interval);
        }
        }, 1000);
    } else {
        console.log("Already in Countdown..")
    }
}
// 시간 안에 인증완료를 누른다
let isAuthedVaild = null;
const authComplete = () => {
    if (time > 0) {
        //시간 내에 인증을 완료, 가입하기 버튼을 활성화
        isAuthed = true;
        alert("인증이 완료되었습니다.")
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").style.border = "1px solid #0068ff";
        document.getElementById("submit").style.color = "#0068ff";
        //timer, auth 숫자 시간 초기화
        document.getElementById("timer").innerText = 3+":"+00;
        document.getElementById("auth").innerText = 000000;
        //인증이 완료되었는가?
        isAuthedVaild = true;
    } else {
        isAuthed = false;
        console.log("TimeOut!!")
    }
}


//입력창 확인
let validation = null;
function checkValidation() {
    const mail = document.getElementById("mail").Value;
    const pw1 = document.getElementById("pwd").Value;
    const pw2 = document.getElementById("pwdConfirm").Value;
    if (mail.value.includes("@") === true && pw1 === pw2 && pw !== ""){
        validation = true;
    } else {
        validation = false;
    }
}

//전화번호가 입력되었는가?
//첫번째 전화번호 칸을 채우면 다음으로 넘어간다
function changeFocus1() {
    const num1 = document.getElementById("num1").value;
    if (num1.length === 3) {
        document.getElementById("num2").focus();
    }
}
//두번쨰 전화번호 칸을 채우면 세번째로 넘어간다
function changeFocus2() {
    const num2 = document.getElementById("num2").value;
    if (num2.length === 4) {
        document.getElementById("num3").focus();
    }
}
//세번째 전화번호 칸을 채우면 인증번호 전송버튼 활성화
// 마지막 전화번호 자릿수 확인 - 저장
const tel = document.getElementById("num3");
function changeFocus3() {
    if (tel.value.length === 4) {
        // 전화번호 작성 후 인증번호전송 버튼 활성화
            // 자릿수 맞으면 버튼 활성화
            document.getElementById("send").disabled = false;
            document.getElementById("send").style.color = "#0068ff";
    } else {
        document.getElementById("send").disabled = true;
    }
}


//지역이 선택되었는가? 
const isRegion = document.getElementById("regionSelect");
let isRegionVaild = false;
isRegion.addEventListener("option", () => {
    if (isRegion.value !== "") {
        isRegionVaild = true;
    } else {
        isRegionVaild = false;
   }
});

// //성별이 선택되었는가?
let isGenderVaild = false;
function checkbox() {
    const isGender = document.querySelector('input[name="gender"]:checked');
    if (isGender.value !== "") {
        isGenderVaild = true;
    } else {
        isGenderVaild = false;
    }
}


//가입하기 버튼을 누른다
function submit() {
//가입하기 가능한지 검증 - 빈칸이 없는가?
    if (validation === true) {
        alert("코드캠프 가입을 축하합니다.")
    }
}



