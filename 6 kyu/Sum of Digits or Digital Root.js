function digital_root(n){
    n = n.toString()
    if(n.length === 1) return Number(n);
    let res = 0
    for (let i = 0 ;i<n.length;i++){
        res += Number(n[i])
    }
    return digital_root(res)
}
