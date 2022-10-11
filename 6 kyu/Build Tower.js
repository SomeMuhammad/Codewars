function towerBuilder(nFloors) {
    let last = 1,
        space = nFloors - 1,
        res = [];

    for(let i = 0;i < nFloors;i++){
        res[i] = new String(" ".repeat(space));
        res[i]+="*".repeat(last)+ " ".repeat(space);
        last+= 2;
        space--;
   }
   return res
  }
