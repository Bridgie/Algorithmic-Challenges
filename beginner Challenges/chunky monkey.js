function chuckArrayInGroup(arr,size){
    var temp = [];                              //temporary array
    var result = [];                            //end result array
    for ( var a = 0; a< arr.length;a++){        
        if(a % size !== size - 1){              
            temp.push(arr[a]);          
        }else{
            temp.push(arr[a]);
            temp = [];

        }
    }
    if(temp.length !== 0){
        result.push(temp);
        return result;
    }
}