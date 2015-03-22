
/* Find all possible combinations of a series of characters */

function allCombinations(string) {

  var combinations = [];

  function buildCombos(current){

    if ( current.length === string.length ) {
      combinations.push(current);
      return;
    }

    for ( var i = 0; i < string.length; i++ ) {
      buildCombos(current + string[i]);
    }

  }

  buildCombos('');

  return combinations;

}
