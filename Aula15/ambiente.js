var num = [5,8,2,9,3];

// console.log(`Valor é ${num[3]}`);

// num[3] = 6;

// console.log(`Valor é ${num[3]}`);

// console.log(`O vetor tem ${num.length} posições`);

num.push(1);
num.sort();

console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
var pos = num.indexOf(8);
console.log(`O valor 8 está na posição ${pos}`);