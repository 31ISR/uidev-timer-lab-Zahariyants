let count = 0;
let timer = setInterval(() => {
    count++;
    console.log(`Прошло секунд: ${count}`);

    // Автоматическая остановка на 10 секундах
    if (count >= 10) {
        clearInterval(timer);
    }
}, 1000);