function duplicateCount(text){
    let res = 0;
    let temp;
    text = text.toLowerCase().split('').sort();
    for(let i = 0; i< text.length - 1;i++){
        for(let j = i+1;j < text.length;j++){
            if(text[i] ===  text[j]){
                if(temp !== text[j]){
                    temp = text[i]
                    res++;
                }
            }
        }
    }
    return res
}
