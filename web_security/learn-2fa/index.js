const speakeasy = require('speakeasy');
const qrcode = require('qrcode');

const secret = speakeasy.generateSecret({ name: 'WeAreKNative' });
console.log(secret);
let qrcode_data = '';
qrcode.toDataURL(secret.otpauth_url, (err, data) => {
  // console.log(data);
  
  return data;
});
console.log('qr_Cde: ', qrcode_data);
