const classmates = [
    {name: "철수", age: 13, school: "다람쥐초등학교"},
    {name: "영희", age: 8, school: "공룡초등학교"},
    {name: "훈이", age: 11, school: "거북이초등학교"},
]
// undefined
classmates
// (3) [{…}, {…}, {…}]0: {name: '철수', age: 13, school: '다람쥐초등학교'}age: 13name: "철수"school: "다람쥐초등학교"[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()1: {name: '영희', age: 8, school: '공룡초등학교'}2: {name: '훈이', age: 11, school: '거북이초등학교'}length: 3[[Prototype]]: Array(0)
classmates.length
// 3
classmates[0]
// {name: '철수', age: 13, school: '다람쥐초등학교'}
classmates[0].school
// '다람쥐초등학교'
classmates[2].age
// 11