
function flipBits(array) {

  var sum = 0;

  var flippedArray = [];
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
    flippedArray[i] = array[i] === 1 ? -1 : 1;
  }

  var max = {sum: 0, left: 0, right: 0};
  var current = {sum: 0, left: 0};

  var element;
  for (var i = 0; i < flippedArray.length; i++) {
    element = flippedArray[i];

    if ( current.sum + element >= 0 ) {
      current.sum += element;
    } else {
      current.left = i + 1;
      current.sum = 0;
    }

    if ( max.sum < current.sum ) {
      max.left = current.left;
      max.right = i;
      max.sum = current.sum;
    }
  }
  var maxSum = sum + max.sum;

  var result = 'Swapping the bits between ' + max.left + ' and ' + max.right + ' yields\
  the maximum sum of ' + maxSum;

  return result;
}

var testArray = [1,0,0,1,0,0,1,0];
flipBits(testArray);