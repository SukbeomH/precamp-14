const pressedBtn = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("auth").innerText = token;
    document.getElementById("auth").style.color = "#" + String(token);
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
