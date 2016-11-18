function getINdexToIns(arr, num){
    arr.srt(function(a,b){
        return a - b;
    })
    for (var a = 0; a < arr.length; a++){
        if(arr[a] >= num){
            return parseInt(a);
        }
        return arr.length;
    }
}