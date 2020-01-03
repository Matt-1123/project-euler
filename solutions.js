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