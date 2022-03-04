for (let i=0; i<3; i++) {
    console.log("I PRINT THREE TIMES!!!");
}

// I PRINT THREE TIMES!!!
// I PRINT THREE TIMES!!!
// I PRINT THREE TIMES!!!

const children = ["철수", "영희", "훈이"]

for (let i = 0; i <3; i++) {
    console.log(children[i] + "야 안녕!")
}
// 철수야 안녕!
// 영희야 안녕!
// 훈이야 안녕!

// 배열의 길이를 모른다면?
for (let i = 0; i < children.length; i++) {
    console.log(children[i] + "야 안녕!")
}

//백틱을 이용
let student = ["신주용", "송준영", "정세진", "신홍석", "김지웅"]

for (i=0; i<student.length; i++){
    console.log(`환영합니다! ${student[i]}님 안녕하세요~`)
}
// 환영합니다! 신주용님 안녕하세요~
// 환영합니다! 송준영님 안녕하세요~
// 환영합니다! 정세진님 안녕하세요~
// 환영합니다! 신홍석님 안녕하세요~
// 환영합니다! 김지웅님 안녕하세요~

// 어레이 속 오브젝트 반복조건문
let persons = [
    {name: '철수', age:18},
    {name: '영희', age:22},
    {name: '도우너', age:5},
    {name: '말포이', age:14},
    {name: '도비', age:3},
  ]
  
  for(i=0; i<persons.length;i++){
      if (persons[i].age >= 18) {
          console.log(persons[i].name + "님은 성인입니다")
      }else{
          console.log(persons[i].name + "님은 성인이 아닙니다")
      }
  }
  //철수님은 성인입니다
  //영희님은 성인입니다
  //도우너님은 성인이 아닙니다
  //말포이님은 성인이 아닙니다
  //도비님은 성인이 아닙니다