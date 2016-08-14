//use .empty to delete td value
//use .remove or .detach to delete table and controls

//this = $table
$.fn.addRow = function (){
  var newRowNumber = $("tr", this).length
  var cols = $("tr", this).first().children().length
  this.append("<tr>")
  var $newRow = $("tr", this).last()
  for (var j=0; j<cols; j++){
    var cell = $("<td>").attr({
      row: newRowNumber, col: j
    })
    $newRow.append(cell)
  }
}
//this = $table
$.fn.addCol = function (){
  var newColNumber = $("tr", this).first().children().length
  var rows = $("tr", this).length
  for (var i=0; i<rows; i++){
    var cell = $("<td>").attr({
      row: i, col: newColNumber
    })
    $("tr", this).eq(i).append(cell)
  }
}