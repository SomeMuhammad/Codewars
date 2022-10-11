function divisions(n, divisor){
     if(n < divisor) return 0;
     let res = 0;
     while(n !== 1){
          n = Math.floor(n / divisor);   
          if(n < 1) return res;          
          res++;
     }
     return res;
}
