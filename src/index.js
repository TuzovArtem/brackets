module.exports = function check(str, bracketsConfig) {
  let allBrackets = bracketsConfig.map( (b) => b.join("") );

  for (let i = 0; i < allBrackets.length; i++) {
   
    if( str.includes(allBrackets[i]) ) {
      str = str.replace(allBrackets[i], "");
      i = -1;
    }
  }
  
  if(str){
    return false;
  }else{
    return true;
  }
}

