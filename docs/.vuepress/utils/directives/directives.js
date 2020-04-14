export default {
    // v-focus 当页面加载时，该元素将获得焦点
    focus: {
        inserted: function (el) {
            el.focus()
        }
    },
    // v-enterFloat 只能输入指定位数的小数 <input type="text" v-enterFloat:2 />
    enterFloat: {
        bind: function (el, binding = 2) {
            el.handler = function () {
                if (binding.arg) {
                    let str = el.value
                    let len1 = str.substr(0, 1)
                    let len2 = str.substr(1, 1)
                    //如果第一位是0，第二位不是点，就用数字把点替换掉
                    if (str.length > 1 && len1 === 0 && len2 !== '.') {
                        str = str.substr(1, 1)
                    }
                    //第一位不能是.
                    if (len1 === '.') {
                        str = ''
                    }
                    // 限制只能输入一个小数点
                    if (str.indexOf('.') !== -1) {
                        let str_ = str.substr(str.indexOf('.') + 1)
                        if (str_.indexOf('.') !== -1) {
                            str = str.substr(0, str.indexOf('.') + str_.indexOf('.') + 1)
                        }
                    }
                    str = str.replace(/[^0-9\.]+/, '')
                    // 限制小数位数
                    if (str.indexOf('.') !== -1) {
                        str = str.slice(0, str.indexOf('.') + parseInt(binding.arg) + 1)
                    }
                    el.value = str
                } else {
                    el.value = el.value.replace(/\D+/, '')
                }
                el.dispatchEvent(new Event('input')) // 触发一次input事件去更新v-model的值
            }
            el.addEventListener('keyup', el.handler)
        },
        unbind: function (el) {
            el.removeEventListener('keyup', el.handler)
        }
    },
    // v-enterNumber 只能输入正整数 <input type="text" v-enterNumber />
    enterNumber: {
        bind: function (el) {
            el.handler = function () {
                el.value = el.value.replace(/\D+/, '')
                el.dispatchEvent(new Event('input'))
            }
            el.addEventListener('keyup', el.handler)
        },
        unbind: function (el) {
            el.removeEventListener('keyup', el.handler)
        }
    }
}