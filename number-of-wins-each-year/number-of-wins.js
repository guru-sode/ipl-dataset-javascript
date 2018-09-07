module.exports.numberOfWins=function(obj){
var fs = require('fs');
var res = {};
// var readme = fs.readFileSync('matches.json', 'utf8');
// var obj = JSON.parse(readme);
obj.map(ele=> {
  if (ele["season"] in res) {

  } else
    res[ele["season"]] = {};
});
var array = Object.keys(res);
obj.map(ele=> {
  array.map(resEle=> {
    if (resEle == ele["season"]) {
      if (ele["winner"] in res[resEle])
        res[resEle][ele["winner"]]++;
      else
        res[resEle][ele["winner"]] = 1;
    } else {

    }
  });
});
//Starts here
var insideObjects = {};
var keysIn = [];
var valuesIn = [];
var UniqueTeam = {};
var keysOut = Object.keys(res);
keysOut.map(ele=> {
  insideObjects = res[ele];
  keysIn = Object.keys(insideObjects);
  valuesIn = Object.values(insideObjects);
  keysIn.map(val => {
    if (val in UniqueTeam) {

    } else {
      UniqueTeam[val] = 0;
    }
  });
});
//Ends here
fs.writeFileSync('number-of-wins.json', JSON.stringify(res));
var readme = fs.readFileSync('number-of-wins.json', 'utf8');
var obj = JSON.parse(readme);
var KeysJSON = Object.keys(obj);
KeysJSON.map(element=> {
  for (var team in UniqueTeam) {
    if (team in obj[element]) {

    } else {
      obj[element][team] = 0;
    }
  };
});
fs.writeFileSync('number-of-wins.json', JSON.stringify(obj));
var wins = {};
var readme = fs.readFileSync('number-of-wins.json', 'utf8');
var obj = JSON.parse(readme);
var year = Object.keys(obj);
var insideObjects = {};
year.map(teamsAndWins=> {
  insideObjects = obj[teamsAndWins];
  var teams = Object.keys(insideObjects);
  var teamsUnique = Object.keys(UniqueTeam);
  teams.map(team=> {
    if (team in wins) {
      // console.log(insideObjects[team])
      wins[team].push(insideObjects[team]);
    } else {
      wins[team] = [];
      wins[team].push(insideObjects[team]);
      //console.log(Object.valueOf(teamUnique));
    }
  });
});
fs.writeFileSync('final.json', JSON.stringify(wins));
return wins;
};
