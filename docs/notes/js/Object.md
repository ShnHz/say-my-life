## Object 对象处理

### 剩余参数rest
###### 对象和数组都可以用这种方法
``` js {11,33}
let object = {
    a:'1',
    b:true,
    c:100
}

let object_ = {
    ...object,
    d:['数组元素1','数组元素2']
}
console.log(object_) 
/**
 * 
 * {
 *  a:'1',
 *  b:true,
 *  c:100,
 *  d:['数组元素1','数组元素2']
 * }
 * 
 **/

let object = {
    a:'1',
    b:true,
    c:100
}

let object_ = {
    ...object,
    a:'我被覆盖了'
}
console.log(object_) 
/**
 * 
 * {
 *  a:'我被覆盖了',
 *  b:true,
 *  c:100
 * }
 * 
 **/
```

### 对象序列化
###### 对象序列化是指将对象的状态转换为字符串。
``` js
JSON.stringify(o[, filter][, indent])
//序列化原始值、对象或数组
JSON.parse(s[, reviver])
//解析JSON格式的字符串
```