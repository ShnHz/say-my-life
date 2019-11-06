## String 字符串处理
###### 参考网址 [简书 - JS字符串的操作](https://www.jianshu.com/p/c487f26f0eb1)

### substr函数
###### 小括号内的参数有两个，第一个是截取开始位置，第二个是截取的长度
``` js {3}
let string = '123456789abcdefg'

console.log(string.substr(2,5)) // 输出34567
```

### substring函数
###### 两个参数第一个也是起始位置，但是第二个是结束为止，并且该位并不包含在内
``` js {3}
let string = '123456789abcdefg'

console.log(string.substring(2,5)) // 输出345
```

### slice函数
###### slice方法与substring方法类似，得到的结果也类似，但是有一点不同的是slice接受负参，而substring如果有负参则直接将负参转化为0slice的负参中，-1表示最后一位，-2倒数第二位，以此类推
``` js {3}
let string = '123456789abcdefg'

console.log(string.slice(2,-1)) // 输出3456789abcdef
```

### replace函数
###### 用于查找并替换字符，该方法不会影响原字符串，可以填入两个参数，第一个参数为需要被替换的字符，第二个是用来替换的字符，返回替换字符后的新字符串
``` js {3}
let string = '123456789abcdefg'

console.log(string.replace('789','123')) // 输出123456123abcdefg
```