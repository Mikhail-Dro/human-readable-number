let unit = prompt('Введите число', 0);
let arr = [];
let sum = 0;
while (unit * 0 === 0 && unit !== null) {
    arr.push(+unit);
    unit = prompt('Введите число', 0);
}
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
alert(sum);


function sumInput() {
    let numbers = [];
    while (true) {
      let value = prompt("Введите число", 0);
      // Прекращаем ввод?
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  alert( sumInput() );


  function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // для каждого элемента массива
      partialSum += item; // добавляем значение элемента к partialSum
      maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
      if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }
  
    return maxSum;
  }

  alert( getMaxSubSum([100, -100, -9, 2, -3, 5]) );