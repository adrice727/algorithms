/**
 * Given a Roman numeral, return the equivalent integer. Assume valid input.
 */

function convertRomanNumeral(string) {
  
  var result = 0;
  var numMap = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  };
  
  var prev;
  for ( var i = string.length - 1; i >= 0; i-- ) {
    var current = string[i];
    if ( numMap[prev] > numMap[current] ) {
      result -= numMap[current];
    } else {
      result += numMap[current];
    }
    console.log('prev:', prev);
    console.log('current:', current);
    prev = current;
  }
  
  return result;
  
}

