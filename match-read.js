var fs=require('fs');
var count={
  "2008":"0",
  "2009":"0",
  "2010":"0",
  "2011":"0",
  "2012":"0",
  "2013":"0",
  "2014":"0",
  "2015":"0",
  "2016":"0",
  "2017":"0"
};

var readme=fs.readFileSync('matches.json','utf8');
var obj=JSON.parse(readme);
obj.forEach(function(ele){
    if(ele.hasOwnProperty("season")){
      if(ele['season']=='2008')
      count[2008]=(parseInt(count[2008])+1).toString();
      if(ele['season']=='2009')
      count[2009]=(parseInt(count[2009])+1).toString();
      if(ele['season']=='2010')
      count[2010]=(parseInt(count[2010])+1).toString();
      if(ele['season']=='2011')
      count[2011]=(parseInt(count[2011])+1).toString();
      if(ele['season']=='2012')
      count[2012]=(parseInt(count[2012])+1).toString();
      if(ele['season']=='2013')
      count[2013]=(parseInt(count[2013])+1).toString();
      if(ele['season']=='2014')
      count[2014]=(parseInt(count[2014])+1).toString();
      if(ele['season']=='2015')
      count[2015]=(parseInt(count[2015])+1).toString();
      if(ele['season']=='2016')
      count[2016]=(parseInt(count[2016])+1).toString();
      if(ele['season']=='2017')
      count[2017]=(parseInt(count[2017])+1).toString();
    }
});
fs.writeFileSync('match-count.json',JSON.stringify(count));
var readme=fs.readFileSync('match-count.json','utf8');
console.log(readme);
