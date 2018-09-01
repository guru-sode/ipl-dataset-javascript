var fs=require('fs');
var count={};

var readme=fs.readFileSync('matches.json','utf8');
var obj=JSON.parse(readme);
obj.forEach(function(ele){
  if(ele["season"] in count)
    count[ele["season"]]++;
    else
    count[ele["season"]]=1;
});
fs.writeFileSync('match-count.json',JSON.stringify(count));
