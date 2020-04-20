/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:46:48 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2020-04-20 10:40:55
 */

export default {
    // 筛选undefind       
    mixin_filter(val) {
        return val.filter(x => {
            return x != undefined
        })
    },
    // 筛选过滤，保留偶数       
    mixin_even(val) {
        return val.filter(x => {
            return x % 2 == 0; /* 筛选偶数 */
        })
    },
    // 筛选过滤，保留奇数       
    mixin_odd(val) {
        return val.filter(x => {
            return x % 2 != 0; /* 筛选奇数 */
        })
    },
    // 筛选空格      
    mixin_space(val) {
        return val.filter(x => {
            return x; /* 筛选空格 */
        })
    },
    // 去重     
    mixin_repeat(val) {
        return val.filter((element, index, self) => {
            return self.indexOf(element) == index;
        })
    },
}