const { Common } = require("./common");
const weatherData = [];
class weather extends Common {

  static operateData(weatherData) {
    let row = [];
    let rowswithoutspaces = []
    let resultObject = {};
    let mintempspread = 0, day = 0, x = 0, y = 0;
    for (let i = 2; i < weatherData.length; i++) {
      row = weatherData[i].toString().trim().split(" ");
      rowswithoutspaces = row.filter((data) => data !== '');
      x = String(rowswithoutspaces[1])

      y = String(rowswithoutspaces[2])
      if (x.includes("*")) {
        x = x.replace("*", "");
      } else {
        y = y.replace("*", "");
      }
      resultObject = weather.findingMinimum(mintempspread, x, y, row[0])
      mintempspread = resultObject.mindifference;
    }
    console.log(`minimum temperature spread for day ${resultObject.attribute} = ${resultObject.mindifference}`);
  }
}

weather.readfile('weather.dat')
  .then(result => {
    //console.log(result);
    weather.operateData(result)
  })
  .catch(error => {
    console.log(error);
  });