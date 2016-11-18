var decimalValue = [40,10,9,5,4,1];
var romanValue = [XL,X,IX,V,IV,I];
var romanized = '';

for(var index = 0;index < decimalValue.length;index++){
    while(decimalValue[index] <= num){
        romanized += romanValue[index];
        num -= decimalValue[index];
    }
}
return romanized;
