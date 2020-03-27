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

### 返回字符串长度
###### 汉字计数为2
``` js
/**
 * 返回字符串长度，汉字计数为2
 * @param  {str} 
 */
mixin_strLength(str) {
    var a = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255)
            a += 2; //按照预期计数增加2
        else
            a++;
    }
    return a;
}
```

### 字母大小写处理
###### type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
``` js
/**
 * @param  {str} 
 * @param  {type}
 *       type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
 * @return {String}
 */
mixin_changeCase(str, type) {
    type = type || 4
    switch (type) {
        case 1:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

            });
        case 2:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case 3:
            return str.split('').map(function (word) {
                if (/[a-z]/.test(word)) {
                    return word.toUpperCase();
                } else {
                    return word.toLowerCase()
                }
            }).join('')
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}
```