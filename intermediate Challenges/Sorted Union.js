
function uniteUnique(arr1,arr2,arr3) {
  var sorted = [];
  for(var a = 0; a < arguments.length;a++){
    var arrayArguments = arguments[a];
    
    for(var j = 0; j < arrayArguments.length;j++){
      var indexValue = arrayArguments[j];
      if(sorted.indexOf(indexValue) < 0){
        sorted.push(indexValue);
      }
    }
  }
  return sorted;
  
}
