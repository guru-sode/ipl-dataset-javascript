var res={};
var sum=0;
var fs = require('fs');
var readmeDelivery = fs.readFileSync('deliveries.json', 'utf8');
var deliverObj = JSON.parse(readmeDelivery);


var idObject=[];
var readmeMatches=fs.readFileSync('matches.json','utf8');
var MatchesObj=JSON.parse(readmeMatches);
MatchesObj.map(match=>{
  if(match["season"]==2015)
  idObject.push(match["id"]);
});

var idDelivery={};
deliverObj.map(delivery=>{
  idObject.map(id=>{
    if(delivery["match_id"]==id){
    idDelivery=delivery;
    if(idDelivery["bowler"] in res){
      res[idDelivery["bowler"]]=parseInt(res[idDelivery["bowler"]])+parseInt(idDelivery["total_runs"]);
    }
    else{
      res[idDelivery["bowler"]]=0;
    }
  }
  });
});

var NoBowls={};
deliverObj.map(delivery=>{
  idObject.map(id=>{
    if(delivery["match_id"]==id){
    idDelivery=delivery;
  if(delivery["bowler"] in NoBowls){
    NoBowls[delivery["bowler"]]++;
  }
  else{
    NoBowls[delivery["bowler"]]=0;
  }
}
});
});
var ans={};
var runs=Object.values(res);
var bowlerName=Object.keys(res);
var bowls=Object.values(NoBowls);
var eco=[];
for(var i=0;i<runs.length;i++){
  eco.push(runs[i]/bowls[i]);
}

var ans={};
for(var i=0;i<bowlerName.length;i++){
  ans[bowlerName[i]]=(eco[i]*6);
}
console.log(ans);

fs.writeFileSync('economy.json',JSON.stringify(ans));
