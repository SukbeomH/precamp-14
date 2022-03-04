const email ="codecamp@gmail.com"
// undefined
email.includes("@")
// true
email.split('@')
// (2) ['codecamp', 'gmail.com']
const userMail = email.split('@')[0]
// undefined
userMail
// 'codecamp'
const company = email.split('@')[1]
// undefined
company
// 'gmail.com'
const maskingMail = []
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail
// (3) ['c', 'o', 'd']
maskingMail.push(userMail[3])
// 4
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
const maskedMail = maskingMail.join('') + "@" + company
// undefined
maskedMail
// 'code****@gmail.com'