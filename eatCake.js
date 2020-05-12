function eat_cake(str){
    if(str.length==0){
        return 1;
    }
    for(var i=str.length;i>=1;i--){
        if((str.length%i)==0){
            if(str.substring(0,str.length/i)==str.substring(str.length-str.length/i,str.length)){
                return i;
            }
        }
    }
}

