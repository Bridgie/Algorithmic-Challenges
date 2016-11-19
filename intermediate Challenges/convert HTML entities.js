function convertHTML(str) {

  var newlyMade = str.split('');

  for (var i = 0; i < newlyMade.length; i++) {
    switch (newlyMade[i]) {
      case '<':
        newlyMade[i] = '&lt;';
        break;
      case '&':
        newlyMade[i] = '&amp;';
        break;
      case '>':
        newlyMade[i] = '&gt;';
        break;
      case '"':
        newlyMade[i] = '&quot;';
        break;
      case "'":
        newlyMade[i] = "&apos;";
        break;
    }
  }

  newlyMade = newlyMade.join('');
  return newlyMade;
}