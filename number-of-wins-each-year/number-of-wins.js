// module.exports=function(){
var fs=require('fs');
var res={};
var readme=fs.readFileSync('matches.json','utf8');
var obj=JSON.parse(readme);
obj.forEach(function(ele){
  if(ele["season"] in res)
  {

  }
    else
    res[ele["season"]]={};
});
var array=Object.keys(res);
obj.forEach(function(ele){
  // res[ele["season"]] = res[ele["season"]] || {};
  array.forEach(function(resEle){
    if(resEle==ele["season"]){
      if(ele["winner"] in res[resEle])
        res[resEle][ele["winner"]]++;
        else
        res[resEle][ele["winner"]]=1;
    }
    else{

    }
  });
});
//Starts here
var insideObjects = {};
var keysIn = [];
var valuesIn=[];
var UniqueTeam = {};
var keysOut = Object.keys(res);
keysOut.forEach(function(ele) {
  insideObjects = res[ele];
  keysIn = Object.keys(insideObjects);
  valuesIn=Object.values(insideObjects);
  keysIn.forEach(val => {
    if (val in UniqueTeam) {

    } else {
      UniqueTeam[val] = 0;
    }
  });
});
// console.log(UniqueTeam);
//Ends here
fs.writeFileSync('number-of-wins.json',JSON.stringify(res));
var readme=fs.readFileSync('number-of-wins.json','utf8');
var obj=JSON.parse(readme);
var KeysJSON=Object.keys(obj);
KeysJSON.forEach(function (element){
  for(var team in UniqueTeam){
     // console.log(obj[element]);
    if(team in obj[element]){

    }
    else{
      obj[element][team]=0;
    }
  };
});
fs.writeFileSync('number-of-wins.json',JSON.stringify(obj));



// };
