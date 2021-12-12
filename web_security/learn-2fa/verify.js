const speakeasy = require('speakeasy');
var verified = speakeasy.totp.verify({
  secret: 'VGa^/W<!:B#ZyMch}oVxpl3unr9F]EIF',
  encoding: 'ascii',
  token: '888231'
});

var verified2 = speakeasy.totp.verify({
  secret: 'KZDWCXRPK46CCOSCENNHSTLDNB6W6VTYOBWDG5LOOI4UMXKFJFDA',
  encoding: 'base32',
  token: '888231'
});


console.log(verified);
console.log(verified2);


