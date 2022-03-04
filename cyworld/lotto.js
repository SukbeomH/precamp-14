// function lottoFunc() {
//     for (let i = 0; i < 6; i++) {
//         lotto[i] = Math.floor(Math.random() * 45) + 1;
//     }
//     document.getElementById("luckeyNum").innerText = lotto.toString().replace(/,/g,"  ");
//         // console.log(lotto.toString());
// }

// function lottoFunc() {
//     for (let i = 1; i < 6; i++) {
//         if (lotto.includes(lotto[i-1]) === true) {
//             lotto.pop()
//         } else {
//             lotto.push(lottoRand);
//         }
//     }
//     document.getElementById("luckeyNum").innerText = lotto.toString().replace(/,/g,"  ");
// }


function lottoFunc() {
    let lotto = [];
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 45) + 1;
        for (let j in lotto) {
            if (num === lotto[j]) {
                num = Math.floor(Math.random() * 45) + 1;
            }
        }
        lotto.push(num)
    }
    document.getElementById("luckeyNum").innerText = lotto.toString().replace(/,/g, "  ");
    console.log(lotto.toString());
}