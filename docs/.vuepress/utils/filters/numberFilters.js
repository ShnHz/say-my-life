/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:46:55 
 * @Last Modified by:   sanghangning 
 * @Last Modified time: 2019-12-11 10:46:55 
 */

export default {
    // 保留两位小数        
    mixin_fixed2(val) {
        return val.toFixed(2)
    },
    // 数字转汉字，16000 => 1.60万        
    mixin_num2chinese(val) {
        return val > 9999 ? (val / 10000).toFixed(2) + '万' : val;
    }
}