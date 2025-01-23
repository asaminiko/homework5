try {
  let number = check(prompt('Введіть ціле число'))
  let isPrime = primeNumber(number)
  if (isPrime) {
    console.log(`Число ${number} просте`)
  } else {
    console.log(`Число ${number} не просте`)
  }
} catch (error) {
  console.error(`Помилка ${error}`)
} finally {
  console.log('Перевірено')
}
//чи є число простим?
function primeNumber(num) {
  if (num < 2) return false //число менше 2 - не просте
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log(` ${num} % ${i} = ${num % i}`)
      return false
    }
  }
  return true
}

//перевірка
function check(y) {
  if (
    y === undefined ||
    y === null ||
    (typeof y === 'string' && y.trim() === '')
  )
    throw new TypeError('Невірний тип даних.') //перевірка на undefined, null, пусту строку
  if (typeof y === 'string' && isNaN(Number(y)))
    throw new TypeError('Значення не є числом.') //перевірка на isNaN()
  if (!Number.isInteger(Number(y))) throw new TypeError('Не ціле число.') //перевірка на цілі числа

  return Number(y)
}
