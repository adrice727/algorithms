
//    Given a list of integers and a target value return the
//    shortest combination of integers that come as close as possible to the
//    target value. Numbers may only appear in the solution as many times
//    are they appear in the original list
//
//    Given the values 5,2,7,13,4,6 and a target of 20
//    you would return [7, 13] and not [5,2,7,6]



var shortestCombination = function(array, target) {

  var set = [];
  var output = {set: [], sum: 0};

  var buildSet = function(sum, set, rest) {

    if ( Math.abs(sum - target) < Math.abs(output.sum - target) ) {
      output.set = set;
      output.sum = sum;
    } else if (  Math.abs(sum - target) === Math.abs(output.sum - target) && set.length < output.set.length ) {
      output.set = set;
      output.sum = sum;
    }

    if ( rest.length === 0 ) { return; }

    for ( var i = 0; i < rest.length; i++ ) {
      var next = rest[i];
      buildSet(sum+next, set.concat(next), rest.slice(i+1));
    }
  }

  buildSet(0,[], array);
  
  return output;
};


