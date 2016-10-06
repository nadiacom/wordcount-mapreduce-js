//MAP FUNCTION
var map= function (key, value, context){
	//Delete ’ character
	value =value.replace(/’/g, ' ');
  //Split by line
  var my_line = value.split("\n");
  //Loop : for each line,
  for (var j= 0;j<my_line.length;j++){
  //Output the number of the current line
  context.write('<strong>Line '+j+':</strong><br>');
  //Split by word
  var my_words = my_line[j].split(" ");
	//Loop on each word :
  for (var i= 0;i<my_words.length;i++){
    if(my_words[i] !==""){
			//Output ("word",1) = mapping
      context.write( '(' + my_words[i].toLowerCase()+','+1+ ')<br>');
    }
  }
  }
}

//REDUCE FUNCTION
var reduce = function (key, values, context){ //exemple : reduce("word",[1,1,1],document)
  var sum = 0;
	//Loop on values array, sum the 1
  for (var i = 0;i<values.length;i++){
    sum += parseInt(values[i]);
  }
	//Output result ("word",3)
  context.write('('+key+','+sum+')');
}
