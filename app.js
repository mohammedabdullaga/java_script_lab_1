const maxOfTwoNumbers = (num1, num2) => {
  if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(6, 23))


const isAdult = age => {
    if (age >=18 ){
        return 'Adult'
    }
    else return 'Minor'
}
console.log('Exercise 2 Result:', isAdult(17))

const isCharAVowel = char => {
    if (char === 'a' || char === 'e' || char === 'o' || char === 'i' || char === 'u')
    return true
else {
    return false
}
}

console.log('Exercise 3 Result:', isCharAVowel("c"))

const generateEmail = (name , domain) => {
    return (name + '@' + domain)
}
console.log('Exercise 4 Result:', generateEmail("mohammed", "gasoftware.com"))

const greetUser = (name , timeOfDay) => {
    if (timeOfDay === 'morning') {
        return('good morning ' + name + '!')
    }
    else if (timeOfDay === 'afternoon') {
        return ('good afternoon ' + name + '!')
    }
    else {
        return ( 'good evening ' + name + '!')
    }
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"))



const maxOfThree = (a , b , c) => {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else {
        return c
    }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))


function calculateTip (billAmount,tipPercentage) {
    return billAmount * (tipPercentage / 100);
}
console.log('Exercise 7 Result:', calculateTip(50, 20))


function convertTemperature(temperature, scale) {
    if (scale === 'C') {
        return (temperature * 9/5) + 32;
    } else if (scale === 'F') {
        return (temperature - 32) * 5/9;
    } else {
        return 'scale not valid';
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, 'F'))



// Exercise 9

function basicCalculator(num1, num2, operation) {
    if (operation === 'add') {
        return num1 + num2;
    } else if (operation === 'subtract') {
        return num1 - num2;
    } else if (operation === 'multiply') {
        return num1 * num2;
    } else if (operation === 'divide') {
        return num1 / num2;
    } else {
        return 'Invalid operation';
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));