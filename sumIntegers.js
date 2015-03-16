
/*
 * Write a function to sum two integers without using the '-' or '+' operators.
 * You may only use increment or decrement numbers using '++' or '--'.
 */


function sumIntegers(a,b) {

  var count = Math.abs(b);
  var positive = count === b;
  var sum = a;

  while ( count-- ) {
    if ( positive ) {
      sum++;
    } else {
      sum--;
    }
  }

  return sum;

}
