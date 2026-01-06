// currying lets you lock in arguments before hand

let multiply = (a,b)=> a*b;

// console.log(multiply(2,10))
// console.log(multiply(2,20))
// console.log(multiply(2,30))

// with currying lock 2

const curryMultiply = a=> b => a*b;

let curryMul = curryMultiply(2);

// console.log(curryMul(70))
// console.log(curryMul(80))
// console.log(curryMul(90))

// Real world Example

function log (type){
    return function (data) {
        console.log(type, data);
    }
}

let info = log("INFO");
let danger = log("DANGER")

// info("You are warned")
// danger("You are in Danger")


// Curry Utility

function sum(a, b, c) {
  return a + b + c;
}

// for all these to work

function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args)
        }else{
            return function (...nextArgs){
                return curried(...args, ...nextArgs)
            }
        }
    }
}


const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3))
console.log(curriedSum(1)(2)(3))
console.log(curriedSum(1, 2)(3))
console.log(curriedSum(1)(2, 3))
console.log(curriedSum(1, 2, 3))

