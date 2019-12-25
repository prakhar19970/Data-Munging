const fs = require("fs");
const csv = require("fast-csv");
const dataRead = []
let object = { 'mindifference': 0, 'attribute': '' }
class Common {
  static readfile(path) {
    return new Promise((resolve, reject) => {
      fs.createReadStream(path)
        .pipe(csv.parse({ headers: false }))
        .on("data", row => {
          dataRead.push(row);
        })
        .on("end", () => {
          if (dataRead)
            resolve(dataRead)
          reject()
        })
    });
  }
  static findingMinimum(mindifference, data1, data2, attribute) {

    let difference = Math.abs(Number(data1 - data2));
    if (mindifference === 0 || mindifference > difference) {
      object.mindifference = difference;
      object.attribute = attribute;

    }
    return object;
  }
  static modifyData(startIndex, attribute1, attribute2, attribute3, data) {
    let row = [];
    let modifiedData = [];
    for (let i = startIndex; i < data.length; i++) {
      row = data[i][0].trim().replace("*", "").split(" ");
      modifiedData.push(row.filter(data => data !== ""));
    }
    let mindifference = 0;
    let resultObject = {};
    for (let i = 0; i < modifiedData.length; i++) {
      let data1 = modifiedData[i][attribute1];
      let data2 = modifiedData[i][attribute2];
      let data3 = modifiedData[i][attribute3];
      resultObject = Common.findingMinimum(mindifference, data1, data2, data3)
      mindifference = resultObject.mindifference;
    }
    return resultObject;
    // console.log(`${resultObject.attribute}`);
  }
}
module.exports = {
  Common
}