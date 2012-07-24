var compare = require('./index').compare;
var eql = require('./');

describe('eql', function () {

  it('throws a error with the compare string, result and expected', function () {

    var user = { username: 'Geert' };
    var evilTwin = { usrname: 'Gert' };

    ( function() { eql( user, evilTwin ); } ).should.throw('\n\u001b[0m\n\nResult:   {\"username\":\"Geert\"}\nExpected: {\"usrname\":\"Gert\"}\nDiff: \n{\u001b[32m\u001b[1m\n  \"usrname\" : \"Gert\"\u001b[0m,\n  \u001b[31m\u001b[1m\"username\" : \"Geert\"\u001b[0m\n}');

  });


  it('should know the difference between an int and a string', function () {

    (function () { eql({ number: { deep: '1' } }, { number:  { deep: 1 } }); }).should.throw();

  });
});
