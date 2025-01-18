let number = parseInt(prompt('Введи число від 1 до 50'))

let checkedNumber = check(number)
function check(y) {
  if (y === undefined || y === null || isNaN(y) || y > 50 || y < 1) {
    //перевірка на undefined, null, isNaN(), число більше 50 або менше 1
    console.log('помилка')
    return 0
  } else if (typeof y === 'string' && y.trim() === '') {
    //перевірка на пусту строку
    console.log('помилка')
    return 0
  } else {
    return y
  }
}
function f(num) {
  if (num > 80 || num === 0) {
    console.log('кінець')
    return false
  } else {
    console.log(num)
    return f(num + 0.5) //крок 0.5
  }
}

f(checkedNumber)
