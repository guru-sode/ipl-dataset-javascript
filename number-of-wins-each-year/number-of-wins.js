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
console.log(res);
