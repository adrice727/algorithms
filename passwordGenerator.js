

/*
Question :

Create a simple password given these rules:

  1) It must have at least 1 Numeric
  2) One Special Character
  3) One Capital Letter
  4) Min Length 6 - Max 72
  5) AA is allowed not AAA , that is same character cannot repeat 3 times, 2 times is allowed

*/

function createPassword(length){

  if ( !length || (length < 6 || length > 72) ) {
    length = (Math.random() * 72) + 1 | 0;
  }

  // Create a pool of random characters
  var characters = [];
  characters.push(getRandomChar(numeric));
  characters.push(getRandomChar(capital));
  characters.push(getRandomChar(special));

  for ( var i = 0; i <= length - 3; i++ ) {
    characters += getRandomChar();
  }


  //Randomly take characters from pool to build password
  //TODO: Only need to move the first three characters in the pool instead of all
  var password = '';
  var previous = { char: '', count: 0 };
  while ( characters.length > 0 ) {
    var randomIndex = ((Math.random() * characters.length) + 1) | 0;
    var char = characters.splice(randomIndex,1);
    while ( char === previous.char && previous.count < 2 ) {
      char = getRandomChar();
    }
    finalPassword += char;
    if ( previous.char === char ) {
      previous.count++;
    } else {
      previous.char = char;
      previous.count = 0;
    }
  }

  function getRandomChar(type){

    var char;

    switch (type){
      case: 'special'
        // get special char
        break;
      case: 'numeric'
          // get random number
          break;
      case: 'uppercase'
            // get uppercase letter
            break;
      default:
            //get any random char
    }

    return char;

  }






}
