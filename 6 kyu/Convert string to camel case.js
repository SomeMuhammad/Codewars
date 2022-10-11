function toCamelCase(str){
    if(str.length < 1) return '';
    str = str.split('');
    for(let i = 0;i < str.length;i++){
        if(str[i]=='_' || str[i] == '-'){
            str[i + 1] = str[i + 1].toUpperCase();
            str[i] = '';
        }
    }
    return str.join('');
}
