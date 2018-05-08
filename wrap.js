const wrap = function(input, maxLen){
  if(maxLen >= input.length){
    return input;
  }else{
    const numSplits = Math.floor(input.length/maxLen);
    let splitIndex = maxLen;
    //console.log(splitIndex);
    //return input.substring(0,maxLen) + "\n" + input.substring(maxLen);
    let result = [];
    for(let i = 0; i < numSplits; i++){

      result.push(input.substring(i*maxLen,splitIndex));
      splitIndex+= maxLen;
    }
    result = result.join('\n');
    return result;


  }
}

const splitter = function(input, splits){

}

module.exports = wrap;
