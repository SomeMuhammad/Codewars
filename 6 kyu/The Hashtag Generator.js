function generateHashtag (str) { 
  
  if(str.split(' ').join('') === '' ) return false;

  let result = str;
  
  result = result.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join('');
  result = '#' + result;

  if (result.length >140) return false;
  else return result;
}
