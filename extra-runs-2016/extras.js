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


var idObject=[];
var readmeMatches=fs.readFileSync('matches.json','utf8');
var MatchesObj=JSON.parse(readmeMatches);
MatchesObj.forEach(function(match){
  if(match["season"]==2016)
  idObject.push(match["id"]);
});

var idDelivery={};
deliverObj.forEach(function(delivery){
  idObject.forEach(function(id){
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
