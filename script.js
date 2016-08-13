$(function(){
  $("#generator").submit(function(){
    var ID = Math.random().toString(36).substring(2,10);
    
    var input = $("#dataInput").val()
    var $table = generateTable(input)

    var $controls = [
      function(){ return generateControl("Clear", function(){
        $("table#"+ID+" td").empty()
      })},
      function(){ return generateControl("Delete", function(){
        alert("Are you sure?")
        $("table#"+ID).detach()
        $(".controls#"+ID).detach()
      })},
      function(){ return generateControl("Add Row", function(){
        $("table#"+ID).addRow()
      })},
      function(){ return generateControl("Add Column", function(){
        $("table#"+ID).addCol()
      })},
      function(){ return generateControl("To String", function(){
        $("#dataInput").val( $("table#"+ID).str() )
      })}
    ]
    $controls = generateTableControls($controls)
    
    $table.attr("id", ID)
    $controls.attr("id", ID)
    
    $("body").append( $controls ).append( $table )
    return false
  })
})