/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 11:23:58 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2020-04-23 14:39:36
 */

export default {
    /**
     * 粘贴至剪剪贴板
     * 
     * 例: <div @click="mixin_onCopy" v-clipboard:copy="'复制的数据'">点我复制</div>
     */
    formatMarkdown(data) {
        console.log(data)
        data = data.replace(/\n/g,"<br/>")
        return data
    }
}

