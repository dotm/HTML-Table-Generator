describe("tableGenerator", function() {
  
  describe("formatString", function(){
    it("replace multiple spaces and tab character with single space", function() {
      expect( formatString("1  2\t3 4") ).toEqual("1 2 3 4");
    })
    
    it("remove carriage return and newline characters", function() {
      expect( formatString("1\r2\n3\r\n4") ).toEqual("1 2 3 4");
    })
  })

  describe("string_To_StringArray", function(){
    it("should convert string to array of string", function() {
      let result;
      let expectedResult = [["1","2.1"],["23.5","4","5","1"],["2"]];
      
      result = string_To_StringArray( "1 2.1; 23.5 4 5 1; 2" );
      expect(result).toEqual(expectedResult);
      
      result = string_To_StringArray( "1    2.1; 23.5  4\t5 1; 2" );
      expect(result).toEqual(expectedResult);
      
      result = string_To_StringArray( "1\r2.1; 23.5\r\n4\n5 1; 2" );
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
    
  describe("generateTable", function() {
    let $container = $("<div>").addClass("container");
    
    it("should create table", function() {
      let $table = generateTable(1,1)
      expect($table.is("table")).toBeTruthy();
    });
  })
  
})