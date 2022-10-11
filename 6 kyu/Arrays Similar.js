function arraysSimilar(arr1, arr2) {
    arr1.sort(),arr2.sort();
    let result = arr1.length == arr2.length && arr1.every((value,i)=>value === arr2[i])
    return result;
}
