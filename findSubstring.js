
/*
* Given a string, determine whether or not it contains a given substring.  If so,
* remove the substring and return the remainder.  If not, return -1;
* Example: 'abc' in 'qfabczx' returns 'qfzx'
*/

function findSubstring(string, target) {

  var start;
  var len = 0;
  var result;

  for ( var i = 0; i < string.length; i++ ) {

    var char = string.charAt(i);

    if ( !!start && char === target[len] ) {
      len++;
      if ( len === target.length) {
        result = string.slice(0, start) + string.slice(start+len);
        return result;
      }
      continue;
    } else {
      if ( char === target[0] ) {
        start = i;
        len++;
      } else {
        start = null;
        len = 0;
      }
    }

  }

  return -1;
}


//If native methods are available.
function findSubstring (string, target) {

  var result = string.replace(target, '');

  if ( result.length === string.length ) {
    return -1;
  } else {
    return result;
  }

}
