function checkValidation() {
    const email = document.getElementById("email").Value;
    const pw1 = document.getElementById("pw1").Value;
    const pw2 = document.getElementById("pw2").Value;
    //만약 이메일, 비밀번호1, 비밀번호2 가 빈 값이 아닐때
    //버튼 비활성화를 제거하고
    //버튼의 배경색을 노란색으로 변경
    if (email !== "" && pw1 !== "" && pw2 !== "") {
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").setAttribute("style", "background-color: yellow");
    } else {
        //버튼의 배경색을 제거하고
        //버튼을 다시 비활성화한다
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").setAttribute("style", "background-color: none");
    }
}