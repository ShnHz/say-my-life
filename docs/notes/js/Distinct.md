## Distinct  数组去重
### reduce方法
``` js {10}
const distinct = arr => arr.sort().reduce( (init, current) => {
    
    if (init.length === 0 || init[init.length - 1] !== current) {
        init.push( current );
    }
    return init;
}, []);

let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
console.log(distinct(arr)); // 输出[1, 2, 3, 4, 5]
```
### filter方法
``` js {6}
const distinct = arr => arr.filter( (element, index, self) => {
    return self.indexOf( element ) === index;
});

let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
console.log(distinct(arr)); // 输出[1, 2, 3, 4, 5]
```

### filter方法，得到重复的元素
``` js {6}
const distinct = arr => arr.filter( (element, index, self) => {
    return self.indexOf( element ) !== index;
});

let arr = ['🐑', 1, 2, '🐑', '🐑', 3, '🐑', '🐑', 3]
console.log(distinct(arr)); // 输出["🐑", "🐑", "🐑", "🐑", 3]
```