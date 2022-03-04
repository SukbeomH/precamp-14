const startWord = () => {
    const word = document.getElementById("word").innerText;
    const myword = document.getElementById("myword").value;
    const lastword = word[word.length - 1];
    const firstword = myword[0];

    if (lastword === firstword) {
        document.getElementById("result").innerText = "맞습니다!!"
        document.getElementById("word").innerText = myword;
        document.getElementById("myword").value = "";
    } else {
        document.getElementById("result").innerText = "틀렸다....";
        document.getElementById("myword").value = "";
    }
}