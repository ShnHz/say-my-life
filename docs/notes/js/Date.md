## Date 日期处理

### 格式化日期
``` js {17}
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

console.log(new Date().Format('yyyy-MM-dd')) // 输出 2020-03-27
```

### 返回某年某月的最后一天
``` js {21}
/**
 * 返回 某年某月的最后一天
 *
 * @param {Number} year = '2019' 年
 * @param {Number} month = 12 越=月
 * @return {String} 例:31
 */
getLastDateOfMonth(year = 2019, month = 12) {
    let date = new Date(year, month - 1, '01');
    //设置日期
    date.setDate(1);
    //设置月份
    date.setMonth(date.getMonth() + 1);
    //获取本月的最后一天
    let cdate = new Date(date.getTime() - 1000 * 60 * 60 * 24);
    //返回结果

    return cdate.getDate();
}

console.log(getLastDateOfMonth()) // 输出 31
```