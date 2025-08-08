const cheque = {
    drinks: ['Молочный коктейль']
}

const divider = '----------'

// Обработка основных блюд
if ('food' in cheque) {
    if (cheque.food.includes('Бургер') && !('snacks' in cheque && cheque.snacks.includes('Картошка фри'))) {
        cheque.snacks ? cheque.snacks.push('Картошка фри') : cheque.snacks = ['Картошка фри']
    }
    if (cheque.food.includes('Сырный суп') && !('snacks' in cheque && cheque.snacks.includes('Хлеб'))) {
        cheque.snacks ? cheque.snacks.push('Хлеб') : cheque.snacks = ['Хлеб']
    }

    console.log(`${divider}\nОсновные блюда (${cheque.food.length}):\n${cheque.food.join(', ')}`)
}

// Обработка закусок
if ('snacks' in cheque) {
    console.log(`${divider}\nЗакуски (${cheque.snacks.length}):\n${cheque.snacks.join(', ')}`)
}

// Обработка напитков
if ('drinks' in cheque) {
    console.log(`${divider}\nНапитки (${cheque.drinks.length}):\n${cheque.drinks.join(', ')}`)
    if (cheque.drinks.includes('Пиво')) console.log('‼️ Внимание: Есть алкоголь!')
}

console.log(divider)