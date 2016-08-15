describe("tableGenerator", function() {
  
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
    let $table;
    let expectedHTML;
    let defaultHTML1 = '<tr><td row="0" col="0"></td><td row="0" col="1"></td><td row="0" col="2"></td></tr><tr><td row="1" col="0"></td><td row="1" col="1"></td><td row="1" col="2"></td></tr>';
    let defaultHTML2 = '<tr><td row="0" col="0">1</td><td row="0" col="1">2.1</td><td row="0" col="2"></td><td row="0" col="3"></td></tr><tr><td row="1" col="0">23.5</td><td row="1" col="1">4</td><td row="1" col="2">5</td><td row="1" col="3">1</td></tr><tr><td row="2" col="0">2</td><td row="2" col="1"></td><td row="2" col="2"></td><td row="2" col="3"></td></tr>';
    
    beforeEach(function() {
      $table = null;
      expectedHTML = ""
    })
    
    it("should create table", function() {
      $table = generateTable(1,1);
      expectedHTML = '<tr><td row="0" col="0"></td></tr>';
      
      expect( $table.is("table") ).toBeTruthy();
      expect( $table.html() ).toEqual(expectedHTML);
    });
    
    it("should accept as arguments: (int totalRow, int totalColumn)", function() {
      $table = generateTable(2,3);
      expectedHTML = defaultHTML1
      
      expect( $table.is("table") ).toBeTruthy();
      expect( $table.html() ).toEqual(expectedHTML);
    });
    
    it("should accept as arguments: (string[] tableValue, undefined)", function() {
      $table = generateTable([["1","2.1"],["23.5","4","5","1"],["2"]]);
      expectedHTML = defaultHTML2;
      
      expect( $table.is("table") ).toBeTruthy();
      expect( $table.html() ).toEqual(expectedHTML);
    });
    
    it("should accept as arguments: (float[] tableValue, undefined)", function() {
      $table = generateTable([[1,2.1],[23.5,4,5,1],[2]]);
      expectedHTML = defaultHTML2;
      
      expect( $table.is("table") ).toBeTruthy();
      expect( $table.html() ).toEqual(expectedHTML);
    });
    
    it("should accept as arguments: int totalRow, int totalColumn enclosed in string", function() {
      $table = generateTable("2,3");
      expectedHTML = defaultHTML1
      
      expect( $table.is("table") ).toBeTruthy();
      expect( $table.html() ).toEqual(expectedHTML);
    });

    it("should accept as arguments: string[] tableValue enclosed in string", function() {
      $table = generateTable('[["1","2.1"],["23.5","4","5","1"],["2"]]');
      expectedHTML = defaultHTML2;
      
      expect( $table.is("table") ).toBeTruthy();
      expect( $table.html() ).toEqual(expectedHTML);
    });
    
    it("should accept as arguments: float[] tableValue enclosed in string", function() {
      $table = generateTable('[[1,2.1],[23.5,4,5,1],[2]]');
      expectedHTML = defaultHTML2;
      
      expect( $table.is("table") ).toBeTruthy();
      expect( $table.html() ).toEqual(expectedHTML);
    });
    
    it("should accept as arguments: (string tableValue, undefined) with semicolon as row separator", function() {
      $table = generateTable("1 2.1; 23.5 4 5 1; 2");
      expectedHTML = defaultHTML2;
      
      expect( $table.is("table") ).toBeTruthy();
      expect( $table.html() ).toEqual(expectedHTML);
    });
    
    it("should accept as arguments: (string tableValue, undefined) with newline character as row separator", function() {
      $table = generateTable("1 2.1\r\n23.5 4 5 1\r\n2");
      expectedHTML = defaultHTML2;
      
      expect( $table.is("table") ).toBeTruthy();
      expect( $table.html() ).toEqual(expectedHTML);
    });
  })
  
})