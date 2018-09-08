var fs = require('fs');
var readmeDelivery = fs.readFileSync('deliveries.json', 'utf8');
var deliverObj = JSON.parse(readmeDelivery);


var readmeMatches = fs.readFileSync('matches.json', 'utf8');
var MatchesObj = JSON.parse(readmeMatches);
let idArray = MatchesObj.reduce((acc, match) => {
  if (match["season"] == 2015)
    acc.push(match["id"]);
  return acc
}, []); 



var res=deliverObj.reduce((acc,delivery)=>{
  if(idArray.includes(parseInt(delivery["match_id"]))){
    if(delivery["bowler"] in acc){
      acc[delivery["bowler"]]=parseInt(acc[delivery["bowler"]])+parseInt(delivery["total_runs"]);
    }
    else{
      acc[delivery["bowler"]]=0;
    }
  }
  return acc;
},{});

var NoBowls=deliverObj.reduce((acc,delivery)=>{
  if(idArray.includes(parseInt(delivery["match_id"]))){
  if(delivery["bowler"] in acc){
    acc[delivery["bowler"]]++;
  }
  else{
    acc[delivery["bowler"]]=0;
  }
}
return acc;
},{});


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
