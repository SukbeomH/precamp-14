const classmates = ["철수", "영희", "훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates.length
// 3
classmates.includes("훈이")
// true
classmates.includes("짱구")
// false
classmates.push("짱구")
// 4
classmates
// (4) ['철수', '영희', '훈이', '짱구']
classmates.push("맹구")
// 5
classmates
// (5) ['철수', '영희', '훈이', '짱구', '맹구']
classmates.length
// 5
classmates[4]
// '맹구'
classmates.pop()
// '맹구'
classmates.includes("맹구")
// false
classmates.pop()
// '짱구'
classmates
// (3) ['철수', '영희', '훈이']
classmates.length
// 3