
/*
 * Write a generic currying function that can be applied to any existing function.
 * ex. add(3,4) returns 7;
 *     addSix = add.curry(6); addSix(7) returns 13;
 */


 Function.prototype.curry = function(){

   var args = Array.prototype.slice.call(arguments);
   var fn = this;

   return function(){
     return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
   }

 }
