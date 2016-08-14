function arrayCounter(array){
  var arrayData = {}
  arrayData.rows = array.length
  arrayData.cols = array.slice().sort()[array.length-1].length
  return arrayData
}

function formatString(str){
  return str.trim().replace(/[ |\t]+/g," ").replace(/\r/g,"")
}

// string_To_StringArray( "1 2.1; 23.5 4 5 1; 2" )
// -> [["1","2.1"],["23.5","4","5","1"],["2"]]
function string_To_StringArray(str, separator = ";"){
  let str = formatString(str)
  let strArr = str.split(separator)
  strArr.forEach(
    function(els, idx, arr){
      arr[idx] = els.trim().split(" ")
    }
  )
  return strArr
}

// stringArray_To_FloatArray ( [["1","2.1"],["23.5","4","5","1"],["2"]] )
// -> [[1,2.1],[23.5,4,5,1],[2]]
function stringArray_To_FloatArray(array){
  for (var i = 0; i < array.length; i++){
    for (var j = 0; j < array[i].length; j++){
      array[i][j] = parseFloat(array[i][j])
    }
  }
  return array
}

function generateTable(a, b){
  var $table = $("<table contenteditable>")

  // generateTable(rows, cols) function signature
  if(typeof a === "number" && typeof b === "number"){
    var rows = a
    var cols = b
    for (var i=0; i<rows; i++){
      $table.append("<tr>")
      var $lastRow = $table.children().last()
      for (var j=0; j<cols; j++){
        var cell = $("<td>").attr({
          row: i, col: j
        })
        $lastRow.append(cell)
      }
    }

  // generateTable(array) function signature
  }else if(a instanceof Array && typeof b === "undefined"){
    var array = a
    var arrayObj = arrayCounter(a)
    var rows = arrayObj.rows
    var cols = arrayObj.cols

    for (var i=0; i<rows; i++){
      //$table.append("<tr row="+i+">")
      $table.append("<tr>")
      var $lastRow = $table.children().last()
      for (var j=0; j<cols; j++){
        var cellContent = array[i][j] || ""
        var cell = $("<td>"+cellContent+"</td>").attr({
          row: i, col: j
        })
        $lastRow.append(cell)
      }
    }
  
  }else if(typeof a === "string" && typeof b === "undefined"){
    // generateTable(array) function signature in string
    if( /^\s*\[.*\]\s*$/.test(a) ){
      return generateTable(JSON.parse(a))
    }
    // generateTable(rows, cols) function signature in string
    else if( /^\s*\d+\s*,\s*\d+\s*$/.test(a) ){
      var tempArray = a.split(",")
      return generateTable( parseInt(tempArray[0]), parseInt(tempArray[1]) )
    }
    // generateTable(str) function signature with new line as separator
    else if(!/;/.test(a)){
      return generateTable( string_To_StringArray(a,/\n/) )
    }

    // generateTable(str) function signature
    var array = string_To_StringArray(a)
    array = stringArray_To_FloatArray(array)
    $table = generateTable(array)

  }else{
    throw new TypeError('False arguments for generateTable()');
  }
  
  return $table
}

/* TESTS
var $body = $("body")

$body.append( generateTable(2,3) )
$body.append( generateTable([[1,2],[2,1,3,4,5],[1]]) )
$body.append( generateTable("1 2.1; 23.5 4 5 1; 2") )
*/