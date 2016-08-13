function generateTableControls (controlsArray){
  var $controls = $("<div>")
  $controls.addClass("controls")
  $(controlsArray).each(function(idx,el){
    $controls.append(el())
  })
  return $controls
}

function strToClass(str){
  var tempArr = str.split(" ")
  tempArr[0] = tempArr[0].toLowerCase()
  tempArr = tempArr.join("")
  return tempArr
}

function generateControl(name, handler){
  return $("<div>",{
    //type: "submit",
    class: strToClass(name),
    html: name
  }).click(function(){
    handler()
  })
}

/* TESTS
var $_clear = function(){ return generateControl("Clear", function(){alert(1)}) }
var $_addColumn = function(){ return generateControl("Add Column", function(){alert(2)}) }
generateTableControls([$_clear, $_addColumn]).appendTo("body")
*/