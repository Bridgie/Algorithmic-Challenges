function destroyer(arr){
    var args = Array.prototype.slice.call(arguments);
    args.splice(0,1);
    return arr.filter(function(elemenet){
        return args.indexOf(elemenet) === -1;
    });
}