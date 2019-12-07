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
          // console.log(dataRead)
          if(dataRead)
          resolve(dataRead)
          reject(error)
        })
    });
  }


  static findingMinimum(mindifference, x, y, attribute) {

    let difference = Math.abs(Number(x - y));
    if (mindifference === 0 || mindifference > difference) {
      object.mindifference = difference;
      object.attribute = attribute;

    }
    return object;
  }
}
module.exports = {
  Common
}