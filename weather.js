const { Common } = require("./common");
const weatherData = [];
class weather extends Common {

}

weather.readfile('weather.dat')
  .then(result => {
    //console.log(result);
    const startIndex = 2;
    const maxTempColumn = 1;
    const minTempColumn = 2;
    const dayOfMonthColumn = 0;
    resultObject = {};
    resultObject = weather.modifyData(startIndex, maxTempColumn, minTempColumn, dayOfMonthColumn, result);
    console.log(`minimum temperature spread for day ${resultObject.attribute} = ${resultObject.mindifference}`);
  })
  .catch(error => {
    console.log(error);
  });