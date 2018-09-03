const assert=require('chai').assert;
const wins=require('../number-of-wins')

describe('App',function(){
  it('app should return hello',function(){
    assert.equal(wins(),'hello')
  });
});
