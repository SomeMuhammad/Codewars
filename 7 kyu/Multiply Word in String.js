function modifyMultiply (str,loc,num){
    str = str.split(' ');
    let res ='';
    for(let i = 0; i< num;i++) res+= str[loc] + '-';
    res = res.split('') ;
    res[res.length - 1] = ''
    return res.join('')
}
