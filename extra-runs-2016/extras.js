// let csvToJson = require('convert-csv-to-json');
//
// let fileInputName = 'deliveries.csv';
// let fileOutputName = 'deliveries.json';
// csvToJson.fieldDelimiter(',') .getJsonFromCsv(fileInputName);
//
// csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
// csvToJson.formatValueByType().getJsonFromCsv(fileInputName);
var res={};
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


var res=deliverObj.reduce((acc1,delivery)=>{
  idObject.reduce((acc2,id)=>{
    if(delivery["match_id"]==id){
    idDelivery=delivery;
    if(idDelivery["bowling_team"] in acc1){
      acc1[idDelivery["bowling_team"]]=parseInt(acc1[idDelivery["bowling_team"]])+parseInt(idDelivery["extra_runs"]);
    }
    else{
      acc1[idDelivery["bowling_team"]]=0;
    }
  }
  });
  return acc1;
},{});
console.log(res);

fs.writeFileSync('extras.json', JSON.stringify(res));
