const JWT = require('jsonwebtoken');


const secret = 'my-secret';
const secret2 = 'bXktc2VjcmV0'; //base64


const payload = { message: 'hello friends !!', from: 'John', to: 'Jim' };

// console.log(Buffer.from(secret, 'base64'));
// console.log(secret2);

const signed = JWT.sign({ payload }, secret2, {

  algorithm: 'HS256',
  expiresIn: '10s'
});


console.log('\n', signed, '\n');


const decoded = JWT.verify(signed, secret2, {
  // Never forget to make this explicit to prevent
  // signature stripping attacks.
  algorithms: ['HS256']
});

// console.log(JSON.stringify(decoded));
console.log(decoded, '\n');