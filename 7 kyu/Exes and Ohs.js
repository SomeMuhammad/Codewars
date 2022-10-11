function XO(str){
    str = str.split('');
    let counterX = 0;
    let counterO = 0;
    str.forEach(elem => {
        if(elem.toUpperCase()      ===' X') counterX++
        else if(elem.toUpperCase() === 'O') counterO++
    })
    return counterO === counterO

}
