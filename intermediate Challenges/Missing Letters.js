function fearNotLetter(str) {

  for(var a = 0; a < str.length; a++) {
   
    var character = str.charCodeAt(a);

    
    if (character !== str.charCodeAt(0) + a) {

      
      return String.fromCharCode(character - 1);
    }  
  }
  return undefined;
}