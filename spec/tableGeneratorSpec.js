describe("string_To_StringArray", function(){
  it("should convert string to array of string", function() {
    let result = string_To_StringArray( "1 2.1; 23.5 4 5 1; 2" );
    let expectedResult = [["1","2.1"],["23.5","4","5","1"],["2"]];
    expect(result).toEqual(expectedResult);
  })
})

describe("stringArray_To_FloatArray", function(){
  it("should convert array of string to array of floating point", function() {
    let result = stringArray_To_FloatArray ( [["1","2.1"],["23.5","4","5","1"],["2"]] );
    let expectedResult = [[1,2.1],[23.5,4,5,1],[2]];
    expect(result).toEqual(expectedResult);
  })
})
  
describe("tableGenerator", function() {
  let $container = $("<div>").addClass("container");
  
  it("should create table", function() {
    let $table = generateTable(1,1)
    expect($table.is("table")).toBeTruthy();
  });
})