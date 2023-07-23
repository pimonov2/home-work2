function durationBetweenDates(startDateStr, endDateStr, dimension) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const timeUnits = {
        seconds: 1000,
        minutes: 60000,
        hours: 3600000,
        days: 86400000,
    };

    const timeUnit = timeUnits[dimension];

    if (!timeUnit) {
        return 'Введите корректную размерность';
    }
    let timeDifferenceMs;
    if (startDate > endDate) {
         timeDifferenceMs = startDate - endDate;
    } else {
         timeDifferenceMs = endDate - startDate;
    }

    return Math.floor(timeDifferenceMs / timeUnit) + ' ' + dimension;
}

const startDateStr = prompt('Введите начало (формат: MM DD YYYY):');
const endDateStr = prompt('Введите конец (формат: MM DD YYYY):');
const dimension = prompt('Введите размерность ("seconds", "minutes", "hours", "days"):');

const result = durationBetweenDates(startDateStr, endDateStr, dimension);
console.log('Результат:', result);