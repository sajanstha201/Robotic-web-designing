let a = new Promise((resolve, reject) => {
    console.log("hello")
    resolve(true)
})
let b = new Promise((resolve, reject) => {
    console.log("OOPS something went wrong");
    reject(true)
})
console.log(b.catch)
