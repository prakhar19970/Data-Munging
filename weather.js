const fs = require("fs");
const csv = require("fast-csv");
const weatherData = [];
fs.createReadStream("weather.dat")
  .pipe(csv.parse({ headers: false }))
  .on("data", row => {
    weatherData.push(row);
  })
  .on("end", () => {
    //console.log(weatherData);
    transferdata(weatherData);
  });

function transferdata(weatherData) {
  let row = [];
  let mintempspread=0,day=0,x=0,y=0;
  for (let i=2 ; i < weatherData.length;i++) {
    row = weatherData[i].toString().trim().split(" ");
    if(String(row[0])=== 'mo')
    {
    x=String(row[2]);
    y=String(row[4]);
    }
    else{
    x = String(row[2]);
    y = String(row[6]);
    if (x.includes("*") || y[6] === ' ') {
      x = x.replace("*", "");
      y = row[5];
    } else {
      y = y.replace("*", "");
    }
}
    let tempspread=Number(x-y);
    if(mintempspread === 0 || mintempspread >tempspread)
    {
        mintempspread=tempspread;
        day=row[0];
    }
  // console.log(`Max temp: ${x} Min temp: ${y} Temp spread: ${x - y}`);
  }
  console.log(`minimum temperature spread for day ${day} = ${mintempspread}`);
}
