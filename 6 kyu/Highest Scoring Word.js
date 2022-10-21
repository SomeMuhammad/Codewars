let al = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
function high(x){
    let words = x.split(" ");
    let out = words.map(word => {
        let score = 0;
        let letters = word.split("");
        letters.map(c => {for(let el in al) if(c == el) score+=al[el]});
        return {Wordname:word,score:score};
    })
    let max = out.reduce((prev, cur) => {
        if (prev.score > cur.score) return prev
        if(prev.score == cur.score) return  prev
        return cur
    })
    return max.Wordname;
}
