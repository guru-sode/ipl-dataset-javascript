// let csvToJson = require('convert-csv-to-json');
//
// let fileInputName = 'deliveries.csv';
// let fileOutputName = 'deliveries.json';
// csvToJson.fieldDelimiter(',') .getJsonFromCsv(fileInputName);
//
// csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
// csvToJson.formatValueByType().getJsonFromCsv(fileInputName);
var fs = require('fs');
var readmeDelivery = fs.readFileSync('deliveries.json', 'utf8');
var deliverObj = JSON.parse(readmeDelivery);


var readmeMatches = fs.readFileSync('matches.json', 'utf8');
var MatchesObj = JSON.parse(readmeMatches);
let idArray = MatchesObj.reduce((acc, match) => {
  if (match["season"] == 2016)
    acc.push(match["id"]);
  return acc
}, []);
console.log(idArray.includes(636));


// idObject = MatchesObj.filter(match => match.season == 2016).map(match => match.id)

var res = deliverObj.reduce((acc, delivery) => {
  if (idArray.includes(parseInt(delivery["match_id"]))) {
    if (delivery["bowling_team"] in acc) {
      acc[delivery["bowling_team"]] = parseInt(acc[delivery["bowling_team"]]) + parseInt(delivery["extra_runs"]);
    }
    else {
      acc[delivery["bowling_team"]] = 0;
    }
  }
  return acc;
}, {});
console.log(res);


fs.writeFileSync('extras.json', JSON.stringify(res));
