// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
      min = max = arr[0]; 
      sum = 0;
      avg = 0;

  // Ваш код
for (let i = 0; i < arr.length; i++) {
  if (arr [i] > max) {
    max = arr[i];}
    else if (arr[i] < min) {
      min = arr[i];
    };
    sum +=arr[i];
  };


  avg = sum / arr.length;
  avg = avg.toFixed(2);
  avg = parseFloat(avg);

  
  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
  // Ваш код
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  };
  return sum;
}
console.log(worker ([1, 2, 3]))
function makeWork(arrOfArr, func) {
  let max;
  max = 0;
  // Ваш кода
  // for ...
  for (let i=0; i<arrOfArr.length; i++) {
  let result = func(arrOfArr[i]);

  if (result > max) {
    max = result;
  }
  };
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш 
  let max, min, difference;
    min = max = arr [0];
  difference = 0;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < min){
      min = arr[i];
    }
    else if (arr[i] > max) {
      max = arr[i];
    }
  }
  difference = Math.abs(max - min);

  return difference;
}


