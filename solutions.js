// Thurs Jan 9, 2020
// 4. Largest palindrome product
function largestPalindromeProduct(n) {
  let result = 0;
  // Find largest number
  let largestNum = '9';
  largestNum += Number(largestNum.repeat(n - 1));
  largestNum = Number(largestNum);
  // Test if # is a palindrome
  const isPalindrome = num => Number([...`${num}`].reverse().join("")) === num;
  // Multiply largest numbers first to test for palindrome product
  for(let i = largestNum; i > 0; i--){
    for(let j = largestNum; j > 0; j--){
      let mult = i * j;
      if(isPalindrome(mult) === true && mult > result){
        result = mult;
      }
    }
  }
  return result;
}


// Wed Jan 8, 2020
// 3. Largest prime factor
function largestPrimeFactor(number) {
  let primeFactors = [];
  // add 2's to array until number no longer even
  while (number % 2 === 0){
    primeFactors.push(2);
    number = number / 2;
  }
  // divide number starting with 3 until sqrt of input number reached
  let sqrtNum = Math.sqrt(number);
  for(let i = 3; i < sqrtNum; i++){
    while(number % i === 0){
      primeFactors.push(i);
      number = number / i;
    }
    console.log(number);
  }
  // exclude 1 from array list
  if(number > 2) primeFactors.push(number);
  // return lasgest prime factor
  return primeFactors.pop();
}


// Jan 5, 2020
// 2. 
function fiboEvenSum(n) {
  let fibNumbers = []; 
  if(n === 1){
    fibNumbers = [1, 1];
  } else{
    fibNumbers[0] = 1;
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



