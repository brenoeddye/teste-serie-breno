let string = 'Eu quero trabalhar na Seri.e Design';
let stringA, stringB, stringC, stringD;

stringA = string.replace(/\s/g, '!');
stringA = stringA.split('').reverse().join('');
stringB = string.substring(29);
stringC = string;

console.log('a) ' + stringA);
console.log('b) ' + stringB);
console.log('c) ' + stringC.length);
console.log('d) ' + typeof(stringB));