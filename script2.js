var numbers = [1,2,3,4]
var result = numbers.map(n=>n*2)
// console.log(result)

//filter() method
var numbers = [10,20,30,40]
var result = numbers.filter(n=>n>20)
console.log(result)

//reduce() Method
var numbers = [10,20,30]
var sum = numbers.reduce((total,n)=>total+n,0)
console.log(sum)

//Promises
//A promise represents the result of an asynchronous operation.
/*

1.pending
2.fulfilled
3.rejected
*/

var promise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("Data loaded")
    }
    else{
        reject("Error occured")
    }
})

promise.then(result => console.log(result))
.catch(error=>console.log(error))