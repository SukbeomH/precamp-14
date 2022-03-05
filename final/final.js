function checkTel() {
    
    if () {
        
    } else {

    }
    
}
const mail = document.getElementById("mail").Value;
    const name = document.getElementById("name").Value;
    const pwd = document.getElementById("pwd").Value;
    const pwdConfirm = document.getElementById("pwdConfirm").Value;

//모든 버튼 색상 회색, 비활성화
    //인증번호 전송
    document.getElementById("send").disabled = true;
    document.getElementById("send").setAttribute("style", "border: 1px solid #888888; color: #888888");
    //인증확인
    document.getElementById("done").disabled = true;
    document.getElementById("done").setAttribute("style", "background-color: white; border: 1px solid #888888; color: #888888");
    //가입하기
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").setAttribute("style", "border: 1px solid #888888; color: #888888");
