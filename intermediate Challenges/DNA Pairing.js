
function pairElement(str) {
  var two = [];
  var pair = function(char){
    switch(char){
      case 'A':
        two.push(['A','T']);
        break;
      case 'T':
        two.push(['T','A']);
        break;
      case 'G':
        two.push(['G','C']);
        break;
      case 'C':
        two.push(['C','G']);
        break;  
    }
  };
  for(var a = 0; a<str.length;a++){
   pair(str[a]);
  }
  return two;
}
