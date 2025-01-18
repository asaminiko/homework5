function search() {
  try {
    let number = parseInt(prompt('Введи ціле число')) //запитує ціле число
    let checkedNumber = check(number)
    console.log(`Введене число ${checkedNumber}`)
    for (let i = 1; Math.pow(i, 2) <= checkedNumber; i++) {
      console.log(`${i}`)
    }
  } catch (error) {
    console.error(`Помилка: ${error.message}`) //може бути помилка
  } finally {
    console.log('Перевірено') //тобто завжди перевірить
  }
}

function check(y) {
  if (y === undefined || y === null) throw new TypeError('Невірний тип даних.') //перевірка на undefined, null
  if (typeof y === 'string' && y.trim() === '')
    //перевірка на пусту строку
    throw new TypeError('Пуста строка.')
  if (isNaN(y)) throw new ReferenceError('Значення не є числом.') //перевірка на isNaN()
  if (y > 10000 || y < 1) throw new RangeError('Число більше 10000 або менше 1') //перевірка чи число більше 10000 або менше 1

  return y
}

search()
