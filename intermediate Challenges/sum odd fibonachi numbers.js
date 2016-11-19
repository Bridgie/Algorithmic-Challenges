
function sumFibs(num) {
  var current = 0;
  var previous = 1;
  var result = 0;
  while(current <= num){
    if(current % 2 !== 0){
      result += current; 
    }
    current += previous;
    previous = current - previous;
  }
  return result;
}
