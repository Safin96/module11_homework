задание 1

function arrayNumber(){
let arr = [5, 10, 1, 0, 8, 76, 33, null, undefined,];
let zerocount = 0;
let numbercount = 0;
let nullcount = 0;
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        numbercount += 1;
        if (arr[i] === 0) {
            zerocount += 1;
        } else if (arr[i] === null) {
            nullcount += 1;
        } else if (arr[i] % 2 === 0) {
            evencount += 1;
        } else {
            oddcount += 1;
        }
    }
}
console.log(`В массиве: ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);
};
arrayNumber();


задание 2

function isPrime(n) {
    if (!Number.isInteger(n) || n < 2 || n > 1000) return "данные неверны";
    let k = Math.sqrt(n);
    for (let i = 2; i <= k; i++)
    if (n % i === 0) return "не простое число";
    return "простое число";
    }
     
    console.log(isPrime(97));
    console.log(isPrime(50));
    console.log(isPrime(1010));
    console.log(isPrime(0));


задание 3
function sum(a) {
    const a = 2;
      return function(){
        console.log(a);
      }
    }
    function argsum(b) {
      const b = 1;
      return function(){
        a + b;
      }
    };
    
    
    const result = sum(argsum);
    
