function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(arr){
  var facts = [];
  var i = 0;
  while (i < arr.length){
    facts.push(arr[i] + '!!!');
    i++;
  }
  return facts;
}