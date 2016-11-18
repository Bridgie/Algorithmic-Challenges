function whatIsInAName(collection, source){
    var srcKeys = Object.keys(source);
    return collection.filter(function(Obj){
        for(var i=0;i< srcKeys.length;i++){
            if(!Obj.hasOwnProperty(srcKeys[i]) || Obj[srcKeys[i]] !== source[srcKeys[i]]){
                return false;
            }
        }
        return true;
    });
}