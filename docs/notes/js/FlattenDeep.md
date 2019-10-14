## FlattenDeep  多维数组降维
### reduce方法
``` js {5}
const flattenDeep = arr => Array.isArray(arr)
  ? arr.reduce( (a, b) => [...a, ...flattenDeep(b)] , [])
  : [arr]

console.log(flattenDeep([1, [[2], [3, [4]], 5]])) // 输出[1, 2, 3, 4, 5]
```