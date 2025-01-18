function calculation() {
  try {
    let oneUah = parseFloat(prompt('Введи, скільки гривень коштує долар')) //запитує число
    let checkedOneUah = check(oneUah) //перевіряє
    console.log(`1 долар це ${checkedOneUah} грн`)
    for (let i = 1; i <= 10; i++) {
      let usd = i * 10
      let uah = usd * checkedOneUah
      console.log(`${usd} доларів це ${uah} грн`)
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
  if (y > 50 || y < 1) throw new RangeError('Число більше 50 або менше 1') //перевірка чи число більше 50 або менше 1

  return y
}

calculation()
