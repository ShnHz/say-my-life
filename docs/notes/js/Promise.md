## Promise 同步
### 普通同步执行
``` js {24,25}
function foo() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(10)
        }, 1000)
    })
}
function bar() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(20)
        }, 1500)
    })
}

async function test() {
    let start = new Date().getTime()
    let val1 = await foo()
    let val2 = await bar()
    
    let val  = val1 +&emsp;val2
    let end  = new Date().getTime()
    let time = end - start
    console.log(val) //输出30
    console.log(time) //输出2500
    
}
```
### 并发执行
``` js {24,25}
function foo() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(10)
        }, 1000)
    })
}

function bar() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(20)
        }, 1500)
    })
}

async function test() {
    let start = new Date().getTime()
    let vals = await Promise.all([foo(), bar()])
    
    let val = vals[0] + vals[1]
    let end  = new Date().getTime()
    let time = end - start
    console.log(val) //输出30   
    console.log(time) //输出1500
}
```