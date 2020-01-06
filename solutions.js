// Jan 3, 2020
// 1. 
function multiplesOf3and5(number) {
  let multiples = [];
  for(let i = 0; i < number; i++){
    if(i % 3 === 0 || i % 5 === 0){
      multiples.push(i);
    }
  }
  let sum = multiples.reduce((a,b) => a + b, 0);
  return sum;
}

// Jan 5, 2020
// 2. 
function fiboEvenSum(n) {
  let fibNumbers = []; 
  if(n === 1){
    fibNumbers = [0, 1];
  } else{
    fibNumbers[0] = 0;
    fibNumbers[1] = 1;
    for (let i = 2; i <= n; i++) {
      // Next fibonacci number = previous + one before previous
      fibNumbers[i] = fibNumbers[i - 2] + fibNumbers[i - 1];
    }
  }

  let evenFibNumbers = [];
  fibNumbers.map(num => {
    if(num % 2 === 0){
      evenFibNumbers.push(num);
    }
  });

  let evenFibSum = evenFibNumbers.reduce((a, b) => {
    return a + b;
  }, 0);

  return evenFibSum;
}