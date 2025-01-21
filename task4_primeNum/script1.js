let number = parseInt(prompt('Введи число від 2 до 50'))
let checkedNumber = check(number)
if (checkedNumber != 0) {
  primeNumber(checkedNumber)
} else {
  console.log('кінець')
}

//чи є число простим?
function primeNumber(num) {
  for (let i = 2; i <= 10; i++) {
    if (num != i && num % i === 0) {
      console.log(` ${num} % ${i} = ${num % i}`)
      return console.log(`${num} не просте`)
    }
  }
  console.log(`${num} просте`)
}

//перевірка
function check(y) {
  if (y === undefined || y === null || isNaN(y) || y > 50 || y < 2) {
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
