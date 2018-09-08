
let fs=require('fs');
let readme=fs.readFileSync('matches.json','utf8');
let obj=JSON.parse(readme);

module.exports.readingMatch=function(obj){
  let count= obj.reduce((acc,cur)=>{
    if(cur["season"] in acc)
    acc[cur["season"]]++;
    else
    acc[cur["season"]]=1;
    return acc;
},{}); 
  return count;
};
fs.writeFileSync('match-count.json',JSON.stringify(this.readingMatch(obj)));
