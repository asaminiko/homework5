function calculation() {
  try {
    let oneUah = parseFloat(prompt('Введи, скільки гривень коштує долар'))
    let checkedOneUah = check(oneUah)
    for (let i = 1; i < 11; i++) {
      let usd = i * 10
      let uah = usd * checkedOneUah
      console.log(`${usd} доларів це ${uah} грн`)
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
  if (y > 50 || y < 1) throw new RangeError('Число більше 50 або менше 1')

  return y
}

calculation()
