// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;

let startSum = 1;

const limitSum = 20;

while (startSum <= limitSum) {
    sum += startSum;
    startSum++;
}

console.log(sum);
