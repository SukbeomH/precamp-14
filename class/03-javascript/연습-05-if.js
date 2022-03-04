const profile = {
    name: "철수",
    age : 12,
    school: "다람쥐초등학교"
}

if (profile.age >= 20) {
    console.log("성인입니다")
}else if (profile.age >= 8 && profile.age <= 19){
    console.log("학생입니다")
}else if (profile.age <= 7 && profile.age >= 0){
    console.log("어린이입니다")
}
// 학생입니다

//위 코드를 최적화
if (profile.age >= 20) {
    console.log("성인입니다")
}else if (profile.age >= 8){ //20살 이상은 위 조건문에서 전부 확인되었으므로 생략
    console.log("학생입니다")
}else if (profile.age >= 0){ //마찬기지로 8세 이상도 생략
    console.log("어린이입니다")
} else {
    console.log("잘못된 값입니다") //존재할 수 있는 문제상황에 대비
}