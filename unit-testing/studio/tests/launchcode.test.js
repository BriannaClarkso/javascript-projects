// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode object", function(){

  // Write your unit tests here!
  it("Should have a property called organization", function(){
    expect(launchcode.organization).toEqual("nonprofit");
  });
  it("Should have a property called executiveDirector", function(){
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });
  it("Should have a property called percentageCoolEmployees", function (){
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });
  it("Should havea property called programsOffered", function(){
    expect(launchcode.programsOffered[0]).toEqual("LC101");
    expect(launchcode.programsOffered[1]).toEqual("LaunchCode Women+");
    expect(launchcode.programsOffered[2]).toEqual("CodeCamp");
    expect(launchcode.programsOffered.length).toEqual(3)
  });

  describe("Should have a method, LaunchOutput, which", function(){
    it("Should return 'Launch!' for numbers evenly divisible by only 2", function(){
      expect(launchcode.LaunchOutput(2)).toEqual("Launch!");
    } );

    it("Should return 'Code!' for numbers evenly divisible by only 3", function(){
      expect(launchcode.LaunchOutput(3)).toEqual("Code!");
    });

    it("Should return 'Rocks!' for numbers evenly divisible by only 5", function(){
      expect(launchcode.LaunchOutput(5)).toEqual("Rocks!");
    });

    it("Should return 'Code!' for numbers evenly divisible by only 3", function(){
      expect(launchcode.LaunchOutput(2)).toEqual("Code!");
    });

    it("Should return 'LaunchCode!' for numbers evenly divisible by only 2 and 3", function(){
      expect(launchcode.LaunchOutput(6)).toEqual("LaunchCode!");
    });

    it("Should return 'Code Rocks!' for numbers evenly divisible by only 3 and 5", function(){
      expect(launchcode.LaunchOutput(15)).toEqual("Code Rocks");
    });

    it("Should return 'Launch Rocks!' for numbers evenly divisible by only 2 and 5", function(){
      expect(launchcode.LaunchOutput(10)).toEqual("Launch Rocks");
    });
  });

});