// QUESTION NO 1
var age = prompt('what is your age')
console.log(age)
if (age >= 18) { alert('your are an adult') }
else {
    (age <= 18)
    alert('your are a minor')
}


// QUSETION NO 2
var UserName = prompt('what is yor name')
console.log(UserName)
if (UserName === 'john') { alert('Hello john') }
else {
    (UserName !== 'john')
    alert('Hello stranger')
}


// QUESTION NO 3
let Height = prompt('Height')
let width = prompt('width')
let area = Height * width
alert('area of the rectangule' + area)

// QUESTION NO 5
let UserAge = prompt('what is your age')
if (UserAge >= 13 && UserAge <= 19) { alert('you are a teenager') }
else { alert('you are not a teenager') }


// QUESTION NO 6
let radius = prompt('radius')
let height = prompt('height')
let volume = 3.14 * radius ^ 2 * height
alert('volume of cylinder' + ' ' + volume)


//QUESTION NO 7


//question no 8
let userpercentage = prompt('your percentage')
if (userpercentage >= 90 && userpercentage <= 100) {
    alert('your grade is A')
}
else if (userpercentage >= 80 && userpercentage <= 90) {
    alert('your grade is B')
}
else if (userpercentage >= 70 && userpercentage <= 80) {
    alert('your grade is C')
}
else if (userpercentage >= 60 && userpercentage <= 70) {
    alert('your grade is D')
}
else if (userpercentage >= 50 && userpercentage <= 60) {
    alert('your grade is F You are failed.')
}


//QUESTION NO 12
let price = prompt('price')
let discount = prompt('discount')
let discountedAmount = (price * discount / 100)
let discountedPrice = price - discountedAmount
{ alert('price after discount is' + discountedPrice) }


//QUESTION NO 13
let userage = prompt('Enter your age')
if (userage <= 13) {
    alert('You are a child')
}
else if (userage >= 13 && userage <= 19) {
    alert('You are a teenager')
}
else if (userage >= 20) {
    alert('You are an adult')
}

//QUESTION NO 16
let ClientAge = prompt('age')
let clientExperience = prompt('experience')
if (ClientAge >= 20 || clientExperience >= 2) {
    alert('your job is done')
}
else { alert('sorry we cant provide you job') }