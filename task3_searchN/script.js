function search() {
  try {
    let number = parseInt(prompt('Введи ціле число'))
    let checkedNumber = check(number)
    console.log(`Введене число ${checkedNumber}`)
    for (let i = 1; Math.pow(i, 2) <= checkedNumber; i++) {
      console.log(`${i}`)
    }
  } catch (error) {
    console.error(`Помилка: ${error.message}`)
  } finally {
    console.log('Перевірено')
  }
}

function check(y) {
  if (y === undefined || y === null) throw new TypeError('Невірний тип даних.')
  if (typeof y === 'string' && y.trim() === '')
    throw new TypeError('Пуста строка.')
  if (isNaN(y)) throw new ReferenceError('Значення не є числом.')
  if (y > 10000 || y < 1) throw new RangeError('Число більше 10000 або менше 1')

  return y
}

search()
