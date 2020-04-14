/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:46:23 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2020-04-14 11:57:15
 */

Date.prototype.Format = function (fmt) {
    var o = {
        "MC": numberToChinese(this.getMonth() + 1),
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };

    function numberToChinese(num) {
        let AA = new Array("一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月")
        
        return AA[num - 1]
    }

    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export default {
    /**
     * 填0
     */
    mixin_appendZero(value) {
        if (value < 10) return "0" + "" + value;
        else return value;
    },
    /**
     * 返回 是否是今天
     *
     * @param {Date,String} date  传入日期
     * @return {Boolean} 例:2019-12-11
     */
    minxin_isToday(date) {
        return (new Date() == new Date(date))
    },
    /**
     * 返回 是否是昨天
     *
     * @param {Date,String} theDate  传入日期
     * @return {Boolean} 例:2019-12-11
     */
    minxin_isLastday(theDate) {
        theDate = new Date(theDate)
        var date = new Date()
        var today = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
        var yestday = new Date(today - 24 * 3600 * 1000).getTime();
        return theDate.getTime() < today && yestday <= theDate.getTime();
    },
    /**
     * 返回 今天
     *
     * @param {String} format = 'yyyy-MM-dd' 传入日期格式
     * @return {String} 例:2019-12-11
     */
    mixin_getToday(format = 'yyyy-MM-dd') {
        return new Date().Format(format)
    },
    /**
     * 返回 指定日期
     *
     * @param {String} format = 'yyyy-MM-dd' 传入日期格式
     * @param {String,Number,Date} date = new Date 指定日期
     * @return {String} 例:2019-12-11
     */
    mixin_getDate(date = new Date, format = 'yyyy-MM-dd') {
        if (new Date(date) == 'Invalid Date') {
            return '-'
        }
        return new Date(date).Format(format)
    },
    /**
     * 返回 指定日期是星期几
     *
     * @param {String,Number,Date} date = new Date 指定日期
     * @param {Boolean} type = true 是否转换为中文
     * @return {String} 例:星期三
     */
    mixin_getDayWeek(date = new Date, type = true) {
        if (type) {
            return '星期' + ['日', '一', '二', '三', '四', '五', '六'][new Date(date).getDay()]
        } else {
            return new Date(date).getDay()
        }
    },
    /**
     * 返回 今天-前n天
     *
     * @param {String} format = 'yyyy-MM-dd' 传入日期格式
     * @param {Number} num = 7 前n天
     * @return {Array} 例:[ "2019/12/04", "2019/12/11" ]
     */
    mixin_getLastDate(format = 'yyyy-MM-dd', num = 7) {
        let today = new Date().getTime()
        let lastnday = today - num * 24 * 60 * 60 * 1000
        return [new Date(lastnday).Format(format), new Date(today).Format(format)]
    },
    /**
     * 返回 某年某月的最后一天
     *
     * @param {Number} year = '2019' 年
     * @param {Number} month = 12 越=月
     * @return {String} 例:31
     */
    mixin_getLastDateOfMonth(year = 2019, month = 12) {
        let date = new Date(year, month - 1, '01');
        //设置日期
        date.setDate(1);
        //设置月份
        date.setMonth(date.getMonth() + 1);
        //获取本月的最后一天
        let cdate = new Date(date.getTime() - 1000 * 60 * 60 * 24);
        //返回结果

        return cdate.getDate();
    },
    /**
     * 返回指定长度的月份集合
     * 
     * @param time}时间
     * @param len 长度
     * @param direction 方向：  1: 前几个月;  2: 后几个月;  3:前后几个月  默认 3
     * @return {Array} 数组
     * 
     * @example   getMonths('2018-1-29', 6, 1)  // ->  ["2018-1", "2017-12", "2017-11", "2017-10", "2017-9", "2017-8", "2017-7"]
     */
    mixin_getMonths(time, len, direction) {
        var mm = new Date(time).getMonth(),
            yy = new Date(time).getFullYear(),
            direction = isNaN(direction) ? 3 : direction,
            index = mm;
        var cutMonth = function (index) {
            if (index <= len && index >= -len) {
                return direction === 1 ? formatPre(index).concat(cutMonth(++index)) :
                    direction === 2 ? formatNext(index).concat(cutMonth(++index)) : formatCurr(index).concat(cutMonth(++index))
            }
            return []
        }
        var formatNext = function (i) {
            var y = Math.floor(i / 12),
                m = i % 12
            return [yy + y + '-' + (m + 1)]
        }
        var formatPre = function (i) {
            var y = Math.ceil(i / 12),
                m = i % 12
            m = m === 0 ? 12 : m
            return [yy - y + '-' + (13 - m)]
        }
        var formatCurr = function (i) {
            var y = Math.floor(i / 12),
                yNext = Math.ceil(i / 12),
                m = i % 12,
                mNext = m === 0 ? 12 : m
            return [yy - yNext + '-' + (13 - mNext), yy + y + '-' + (m + 1)]
        }
        // 数组去重
        var unique = function (arr) {
            if (Array.hasOwnProperty('from')) {
                return Array.from(new Set(arr));
            } else {
                var n = {},
                    r = [];
                for (var i = 0; i < arr.length; i++) {
                    if (!n[arr[i]]) {
                        n[arr[i]] = true;
                        r.push(arr[i]);
                    }
                }
                return r;
            }
        }
        return direction !== 3 ? cutMonth(index) : unique(cutMonth(index).sort(function (t1, t2) {
            return new Date(t1).getTime() - new Date(t2).getTime()
        }))
    },
    /**
     * 返回指定长度的天数集合
     * 
     * @param time 时间
     * @param len 长度
     * @param direction 方向： 1: 前几天;  2: 后几天;  3:前后几天  默认 3
     * @return {Array} 数组
     *
     * @example date.getDays('2018-1-29', 6) // -> ["2018-1-26", "2018-1-27", "2018-1-28", "2018-1-29", "2018-1-30", "2018-1-31", "2018-2-1"]
     */
    mixin_getDays(time, len, diretion) {
        var tt = new Date(time)
        var getDay = function (day) {
            var t = new Date(time)
            t.setDate(t.getDate() + day)
            var m = t.getMonth() + 1
            return t.getFullYear() + '-' + m + '-' + t.getDate()
        }
        var arr = []
        if (diretion === 1) {
            for (var i = 1; i <= len; i++) {
                arr.unshift(getDay(-i))
            }
        } else if (diretion === 2) {
            for (var i = 1; i <= len; i++) {
                arr.push(getDay(i))
            }
        } else {
            for (var i = 1; i <= len; i++) {
                arr.unshift(getDay(-i))
            }
            arr.push(tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate())
            for (var i = 1; i <= len; i++) {
                arr.push(getDay(i))
            }
        }
        return diretion === 1 ? arr.concat([tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()]) :
            diretion === 2 ? [tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()].concat(arr) : arr
    }

}