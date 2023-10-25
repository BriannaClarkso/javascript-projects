
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["LC101", "LaunchCode Women+", "CodeCamp"],
  LaunchOutput: function(num) {
    let result = "";
    if(num % 2 === 0){
        result += "Launch";
    } else if (num % 3 === 0){
        result += "Code";
    } else if (num % 5 === 0){
        if (result.length > 0){
            result += " ";
        }
        result += "Rocks";
    }
    if (result.length === 0){
      return = "Rutabages! That doesn't work."
    } else {
    return result += "!";
    }
    if (result === "Launch Rocks!") {
      result += "(CRASH!!!!)";
    }
    return result;
  }
};

module.exports = launchcode;

