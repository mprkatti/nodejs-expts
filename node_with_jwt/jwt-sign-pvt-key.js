const jwt = require('jsonwebtoken');


const payload = "Hello there !!!";

const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDDr4cNLD+M27QT
FEdxpdWeYNhM38I+AoMz0lV/xKX8yB/aECb8vC4Nh+9O9XydaCnZpuo5rR3laQb9
hUTPy00U2dgTcRGPo4cGXYz2l9HciqYbycoLtkJffRavKs2zpKfhx+kpymX3k348
FdcjbspdTQJyol7MvD5aVg1bU6FrEXK7InArTcSf4nl9GHz1RepTDkeM3SlJO1wX
Vb6gms/hVaopZ0NuFKaHIk1IAYs9vlc+H6X9Ty6fZK7mFo/1V1GZTaM2L1qyjxEd
IV5NVcC0Ho0Ek8vHaXIzHp76uobv09Kt4lpE0a/Gs/eToBL+5SYbzzB4s6s9CCV4
N15dm7XxAgMBAAECggEAWlvU6rpB5hMVRbIZg1rmFyn09xpjoSqb1vQK0uLFGsJ2
IsVOm2lxgoIAeN9WWYDdwkkW4ucTZPloZuyA58qinzwwUFnnmAIUuVW9X6ifGU1U
goRdLadNYrZqIRyMu6UOeG1NNyTkjLuokKotG4lvHEIRHUnoqHVL/X660C7/3GX0
r4cxXJBbpAz/Uq18kL7/TOHkgV2b8DVV5nJxKuyYSOnKnCj/NZjdFdnW2Qx2g6E3
Uh1k3wuUyccekqkj7YE/P5goA31ZVWuz1g6FlsFEPMTyE5sxih/nMdhyPq+j2waV
OovVaZ3A6JrVejR0uM7WIzDiNLe3oZf3th5Kba5neQKBgQD0Fsy/1DO07iXYFV9K
N7Z3Y9nlTpCkc/jsH4oAKwftUl9sn8DV5CmuLdXqnn1tyzHxsH02pDYuI8mFiHBK
gNe19dvVaUsMpxdSLUZV1dMDfuoYv95+U+IxZIkrlAMkeMqjU0YrLnVOPFmCJwvF
P/cSEAYRxed8Ji64NRiT4Ksa4wKBgQDNPBCETWjeK0+K7DVjr1XSoPYk731aTOqK
8EOZzSXma4zJ8rhIXOVhj7xQotJvtNbH9ZQHU64GaO2sEPVhD6+IaVVILYVmVXZZ
DaWSg6sMZ6n7kHGEBUFvQGIm4mUAe2FdOn0wWBBkzYG1uV/y4W5vHss5FBCm3TFt
jJCzi9agGwKBgENSto6CXPCebtm2q12xGCa956+Th9mUEygtWsbJF5qhiahQN8PG
9qgQBFx98mKCFPhwkVis2jTHsiGejDpAZz7M3SFztTt8KraDvk6Wd2kTbEX/RcLa
KB0veZYHcQZyOpHpugTW/4vgoV+AnYJ+LgtRWBs21q4rad9s5aaD5S25AoGATvNL
O0n4DHdGyx9gzm81qagn6D+EzkcGdtpEdxb2/HPlHg7UG2o5B1Xe0HpCT5yWfyeW
gVcMfATDYUzIyETbdrNmjjSMu7gmpc1dI0apd0Utm8uOD4ZiDKUM3P58cjoEU3Pb
ksxdyhlQS5L7ORjFfdOvw85XNYmjqQvI4njp4H8CgYBmcMWn7xauUq9DORgJtyHU
GwGwYo4qd/dL8AVAiF6RGra47YFQuhR1RtZ04PLlVpPbrKe+WuO8R2jLg/1WfK4G
7QXLxUitYokNHE6+wZkVqwFDNG3YUXmIuNwIos5iIIXcYENzdfA7CX/7fxGquC93
ecOswKHhqdz25tHUtEPolA==
-----END PRIVATE KEY-----`;

const signed = jwt.sign({ payload }, privateKey, {
  algorithm: 'RS256',
  expiresIn: '5s'
});

// console.log(signed);


const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw6+HDSw/jNu0ExRHcaXV
nmDYTN/CPgKDM9JVf8Sl/Mgf2hAm/LwuDYfvTvV8nWgp2abqOa0d5WkG/YVEz8tN
FNnYE3ERj6OHBl2M9pfR3IqmG8nKC7ZCX30WryrNs6Sn4cfpKcpl95N+PBXXI27K
XU0CcqJezLw+WlYNW1OhaxFyuyJwK03En+J5fRh89UXqUw5HjN0pSTtcF1W+oJrP
4VWqKWdDbhSmhyJNSAGLPb5XPh+l/U8un2Su5haP9VdRmU2jNi9aso8RHSFeTVXA
tB6NBJPLx2lyMx6e+rqG79PSreJaRNGvxrP3k6AS/uUmG88weLOrPQgleDdeXZu1
8QIDAQAB
-----END PUBLIC KEY-----
`;

const decoded = jwt.verify(signed, publicKey, {
  // Never forget to make this explicit to prevent
  // signature stripping attacks.
  algorithms: ['RS256'],
});

console.log(decoded);