const expect=require('chai').expect;
const wins=require('../number-of-wins');

var fs = require('fs');
var res = {};
var readme = fs.readFileSync('matches.json', 'utf8');
var obj = JSON.parse(readme);

describe('App',function(){
  it('app should return an object with number of wins',function(){
    expect(typeof wins.numberOfWins(obj)).to.be.equal(typeof {})
  });

  it('app should return an object with number of wins',function(){
      var object=[{
        "season":2016,
        "winner":"Sunrisers Hyderabad"
      },
      {
        "season":2016,
        "winner":"Rising Pune Supergiant"
      },
      {
        "season":2016,
        "winner":"Sunrisers Hyderabad"
      }];
      expect(wins.numberOfWins(object)).to.be.deep.equal({"Sunrisers Hyderabad":[2],"Rising Pune Supergiant":[1]});
    });
});
