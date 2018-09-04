const expect=require('chai').expect;
const match=require('../match-read');

var fs=require('fs');
var readme=fs.readFileSync('matches.json','utf8');
var obj=JSON.parse(readme);

describe('App',function(){
  it('app should return correct result',function(){
    var object=[{
      "season": 2017,
    },
  {
    "season": 2016,
  },
  {
"season": 2017}];
    expect(match.readingMatch(object)).to.be.deep.equal({"2017":2,"2016":1});
  });

  it('app should return object',function(){
    expect(typeof match.readingMatch(obj)).to.be.equal(typeof {})
  });
});
