// // let sum = 0;
// // const calc = n => {
// // 	for (let i = 0; i <= n; i++){
// // 		sum += 1;
// // 	}
// // 	return sum;
// // }

// // const memorize = func => {
// // 	let cache = {}
// // 	return function (...args) {
// // 		let n = args[0];
// //         if (n in cache) {
// //             console.log("Data is commong from cache")
// //             return cache[n]
// // 		} else {
// // 			console.log("Calculating the first time ......")
// //             let result = func(n)
// //             cache[n] = result
// //             return result;
// // 		}
// // 	}
// // }

// // // console.log('Before Memorization')
// // // console.log(calc(5))
// // // console.log('After Memorization')

// // console.log("========================After Optimization===========================")

// // console.log('Before Memorization')
// // console.time()
// // let efficientWay = memorize(calc);
// // console.log(efficientWay(500000000000000000000000000000000))
// // console.timeEnd()

// // console.log('After Memorization')

// //! -------------------------------------------------------------

// function sum(...rest) {
//     return rest.reduce((accumulator,currentValue)=> accumulator+currentValue)
// }

// const MemorizedFun = func => {
//     let cache = {}
//     return function (...args) {
//         let keys = JSON.stringify(args)
//         if (cache[keys]) {
//             console.log(cache)
//             console.log("Data is comming from cache")
//             return cache[keys]
//         } else {
//             console.log("First time executing ... and calculating")
//             const result = func(...args)
//             cache[keys]=result
//             return result
//         }
//     }
// }

// let calculate = MemorizedFun(sum)
// console.time();
// console.log(calculate(10, 10, 10,40))
// console.timeEnd()


// //? second time

// console.warn("===================Second time after is same input=========");
// console.time();
// console.log(calculate(10,10,10,40))
// console.timeEnd()


let x = "prajwal"

let obj1 = {
    x: x,
}
console.log(obj1.x)