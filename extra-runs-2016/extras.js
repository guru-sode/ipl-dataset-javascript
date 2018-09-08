// let csvToJson = require('convert-csv-to-json');
//
// let fileInputName = 'deliveries.csv';
// let fileOutputName = 'deliveries.json';
// csvToJson.fieldDelimiter(',') .getJsonFromCsv(fileInputName);
//
// csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
// csvToJson.formatValueByType().getJsonFromCsv(fileInputName);
var res={};
var sum=0;
var fs = require('fs');
var readmeDelivery = fs.readFileSync('deliveries.json', 'utf8');
var deliverObj = JSON.parse(readmeDelivery);


var readmeMatches = fs.readFileSync('matches.json', 'utf8');
var MatchesObj = JSON.parse(readmeMatches);
let idObject = MatchesObj.reduce((acc, match) => {
  if (match["season"] == 2016)
    acc.push(match["id"]);
  return acc
}, []); console.log(idObject);

var idDelivery={};
deliverObj.map(delivery=>{
  idObject.map(id=>{
    if(delivery["match_id"]==id){
    idDelivery=delivery;
    if(idDelivery["bowling_team"] in res){
      res[idDelivery["bowling_team"]]=parseInt(res[idDelivery["bowling_team"]])+parseInt(idDelivery["extra_runs"]);
    }
    else{
      res[idDelivery["bowling_team"]]=0;
    }
  }
  });
});
fs.writeFileSync('extras.json', JSON.stringify(res));
