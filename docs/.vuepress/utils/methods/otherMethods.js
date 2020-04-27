/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 11:23:58 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2020-04-27 16:29:43
 */

export default {
    /**
     * 节流
     */
    mixin_throttle(fn, interval = 300) {
        let canRun = true;
        return function () {
            if (!canRun) return;
            canRun = false;
            setTimeout(() => {
                fn.apply(this, arguments);
                canRun = true;
            }, interval);
        };
    },
    /**
     * 防抖
     */
    mixin_debounce(fn, interval = 300) {
        let timeout = null;
        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                fn.apply(this, arguments);
            }, interval);
        };
    },
    /**
     * 粘贴至剪剪贴板
     * 
     * 例: <div @click="mixin_onCopy" v-clipboard:copy="'复制的数据'">点我复制</div>
     */
    mixin_onCopy() {
        this.$copyText(true).then(
            function (e) {
                console.log('已将分享地址粘贴到剪贴板上，尽情去分享吧~')
            }
        )
    },
    /**
     * 排序 指定对象的某个key进行排序
     * 
     * 例: list = list.sort(this.mixin_objectKeyCompare(key,1))
     * 
     * @param {String} property 指定key
     * @param {Number} order = 1 排序方式,1 升序 else 降序
     * @return {Array}
     * 
     */
    mixin_objectKeyCompare(property, order = 1) {
        return function (obj1, obj2) {
            let value1 = obj1[property]
            let value2 = obj2[property]
            let reDateTime = /^(?:19|20)[0-9][0-9]-(?:(?:0[1-9])|(?:1[0-2]))-(?:(?:[0-2][1-9])|(?:[1-3][0-1])) (?:(?:[0-2][0-3])|(?:[0-1][0-9])):[0-5][0-9]:[0-5][0-9]$/
            if (reDateTime.test(value1) && reDateTime.test(value2)) {
                value1 = new Date(value1)
                value2 = new Date(value2)
            }
            if (order == 1) {
                return value1 - value2 // 升序
            } else {
                return value2 - value1 // 降序
            }
        }
    },
    /**
     * 绑定回车事件
     * 
     * @param {Function}
     */
    mixin_enterKeyup(fun) {
        document.onkeydown = function (ev) {
            var event = ev || event
            if (event.keyCode == 13) {
                fun()
            }
        }
    },
    /**
     * 解绑回车事件 
     */
    mixin_enterKeyupDestroyed(fun) {
        document.onkeydown = undefined
    },
    /**
     * 数组过滤掉false, null, 0, "", undefined, and NaN值的方法 
     */
    mixin_bouncer(arr) {
        return arr.filter(function (val) {
            return !(!val || val === "");
        });
    }
}