Array.prototype.even = function(){
    let res = [];
    this.filter((el)=> el % 2 === 0 ? res.push(el):0);
    return res;
}
Array.prototype.odd = function(){
    let res = [];
    this.filter((el)=> el % 2 !== 0 ? res.push(el):0);
    return res;
}
Array.prototype.square = function(){
    let res = [];
    this.map((el)=>res.push(el**2));
    return res;
}
Array.prototype.cube = function(){
    let res = [];
    this.map((el)=>res.push(el**3));
    return res;
}
Array.prototype.average = function(){
    let res = 0;
    this.map((el)=>res+=el);
    res= res / this.length;
    return res;
}
Array.prototype.sum = function(){
    let res = 0;
    this.map((el)=>res+=el);
    return res;
}
