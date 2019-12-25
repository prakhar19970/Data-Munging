const { Common } = require("./common");
let footballData = [];
class Football extends Common {


}

Football.readfile('football.dat')
  .then(result => {
    // console.log(result);
    const goalsScoredColumn = 6;
    const goalsAgainstColumn = 8;
    const teamNameColumn = 1;
    const startIndex = 1;
    resultObject = {};
    resultObject = Football.modifyData(startIndex, goalsScoredColumn, goalsAgainstColumn, teamNameColumn, result);
    console.log(`Team ${resultObject.attribute} has minimum difference = ${resultObject.mindifference}`);
  })
  .catch(error => {
    console.log(error);
  });