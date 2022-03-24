let x = 2;
let w = 0;
let sum = 0;
console.log(`Numbers prime between 1 until 1000: `);

while(x < 1000){
w = 2;
  while(w < x){
    if(x % w == 0){
        w = x + 1;
    } else {
        w = w + 1;
    } 
    if( w == x ){
      console.log(x)
      sum = sum + x;
    }
  }
  x = x + 1;
}
console.log(`The sum of the prime numbers was ${sum.toLocaleString()}`);