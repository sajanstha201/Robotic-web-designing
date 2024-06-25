// hello(wait);
// function hello(callback){
//     console.log("Hello");
//     callback();
// }

// function wait(){
//     console.log("wait");
// }


// sum(output,4,5);

// function sum(call ,a,b){
//     let result=a+b;
//     call(result);
// }

// function output(ans){
//     console.log(ans);
// }


let p = new Promise ((resolve,reject)=>
{
    console.log("Hello");
    reject("");
})

