function reverseList(list) {

  var current = list;
  var previous = temp = null;

  while ( current) {

    temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;

  }

  return previous;

}
