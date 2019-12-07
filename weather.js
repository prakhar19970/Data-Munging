const { Common } = require("./common");
const weatherData = [];
class weather extends Common {

  static operateData(weatherData) {
    let row = [];
    let rowswithoutspaces = []
    let resultObject = {};
    let mintempspread = 0;
    for (let i = 2; i < weatherData.length; i++) {
      row = weatherData[i][0].trim().replace("*","").split(" ");
      rowswithoutspaces = row.filter((data) => data !== '');
      resultObject = weather.findingMinimum(mintempspread, rowswithoutspaces[1], rowswithoutspaces[2], row[0])
      mintempspread = resultObject.mindifference;
    }
    console.log(`minimum temperature spread for day ${resultObject.attribute} = ${resultObject.mindifference}`);
  }
}

weather.readfile('weather.dat')
  .then(result => {
    weather.operateData(result)
  })
  .catch(error => {
    console.log(error);
  });