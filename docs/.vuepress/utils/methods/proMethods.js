/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 11:23:58 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2020-04-26 15:05:28
 */

export default {
    /**
     * 粘贴至剪剪贴板
     * 
     * 例: <div @click="mixin_onCopy" v-clipboard:copy="'复制的数据'">点我复制</div>
     */
    formatMarkdown(data) {
        console.log(data)

        // data = data.replace(/\n/g, "<br/>")

        // // 代码块处理
        // // var options = data.match(/\`\`\`(\S*)\`\`\`/);
        // var options = data.match(/(```=?)(\S*)(?=```)/);
        // if (options) {
        //     console.log(options[2])
        //     data = data.replace(`/
        // B支付A：25元。
        // B支付C：50元。
        // D支付C：175元。
        // /g`, "<br/>")
        // }


        md = new MarkdownIt();
        let result = md.render(data);
        console.log(result)
        return data
    }
}