const { Common } = require("./common");
let footballData = [];
class Football extends Common {
  
 static operateData(footballData) {
    let row = [];
    let matchdata = [];
    let mindifference = 0,x = 0,y = 0;
    let resultObject = {};
    for (let i = 1; i < footballData.length; i++) {
      row = footballData[i].toString().split(" ");
      matchdata = row.filter(data => data !== "");
     resultObject=Football.findingMinimum(mindifference,String(matchdata[6]),String(matchdata[8]),matchdata[1])
     mindifference=resultObject.mindifference;
    }
    console.log(`Team ${resultObject.attribute} has minimum difference = ${resultObject.mindifference}`);
  }
}

Football.readfile('football.dat')
  .then(result => {
      //console.log(result);
    Football.operateData(result)
  })
  .catch(error => {
    console.log(error);
  });