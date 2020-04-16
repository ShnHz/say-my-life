<template>
  <div class="css-shadow">
    <h3>基础用法</h3>
    <div class="box box-1"></div>
    <h6>基础投影 box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)</h6>
    <div class="box box-2"></div>
    <h6>浅色投影 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)</h6>
    <div class="box box-3"></div>
    <h6>深色投影 box-shadow: 0 2px 8px rgba(0,0,0,0.2)</h6>

    <!-- 曲线投影DEMO -->
    <shn-el-demo-block :height="543" :title="'曲线投影'" id="shadow-curve">
      <template v-slot:demo>
        <div class="box box-curve"></div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(curve.code.html)}}</code>
        <code class="css">{{fCode(curve.code.css)}}</code>
      </template>
    </shn-el-demo-block>

    <!-- 翘边投影DEMO -->
    <shn-el-demo-block :height="816" :title="'翘边投影'" id="sharp-edge-curve">
      <template v-slot:demo>
        <div class="box box-sharp-edge"></div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(sharpEdge.code.html)}}</code>
        <code class="css">{{fCode(sharpEdge.code.css)}}</code>
      </template>
    </shn-el-demo-block>

    <shn-el-demo-block :height="353" id="sharp-edge-curve" title="3D内嵌感">
      <template v-slot:demo>
        <div class="box box-4"></div>
        <div class="box box-5"></div>
      </template>
      <template v-slot:code>
        <code class="css">
          .box{
          border: 1px solid #8f9092;
          box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
          0 -6px 4px #fefefe, inset 0 0 3px 0 #cecfd1;
          background-image: linear-gradient(
          to top,
          #d8d9db 0%,
          #fff 80%,
          #fdfdfd 100%
          );
          }
        </code>
      </template>
    </shn-el-demo-block>
  </div>
</template>
<script>
import ShnElDemoBlock from '../shn-el-demo-block'
import { TOOLS } from '../../../public/js/shn-base.js'

export default {
  components: {
    ShnElDemoBlock
  },
  props: {
    value: {
      type: String,
      default: '409EFF'
    },
    text: {
      type: String,
      default: 'BRAND COLOR'
    },
    sub: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      curve: {
        code: {
          html: `
          <div class="box box-curve"></div>
          `,
          css: `
          .box{
            width: 400px;
            height: 150px;
          }

          .box-curve{
            position: relative;
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
            background: #fff;
            &::after, &::before{
              z-index: -1;
              content: '';
              position: absolute;
              top: 50%;
              bottom: 0px;
              left: 20px;
              right: 20px;
              box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
              border-radius: 100px/10px;
            }
          }
          `
        }
      },
      sharpEdge: {
        code: {
          html: `
          <div class="box box-sharp-edge"></div>
          `,
          css: `
          .box{
            width: 400px;
            height: 150px;
          }

          .box-sharp-edge {
            position: relative;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
            background: #fff;
            &::after{
              z-index: -1;
              content: '';
              position: absolute;
              background: transparent;
              top: 50%;
              bottom: 12px;
              left: 10px;
              right: 10px;
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
              transform: skew(12deg) rotate(4deg)
            }
            &::before{
              z-index: -1;
              content: '';
              position: absolute;
              background: transparent;
              top: 50%;
              bottom: 12px;
              left: 10px;
              right: 10px;
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
              transform: skew(-12deg) rotate(-4deg)
            }
          }
          `
        }
      }
    }
  },
  methods: {
    fCode(code) {
      return TOOLS.fCode(code)
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 900px) {
  .css-shadow {
    width: 100% !important;
    .box {
      width: 100% !important;
    }
  }
}
.css-shadow {
  display: inline-block;
  position: relative;
  margin: 0 10px 10px 2px;
  width: 840px;
  .box {
    width: 350px;
    height: 150px;
    border-radius: 5px;
    background: #fff;
  }
  .box-1 {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  .box-2 {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .box-3 {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  .box-4 {
    display: inline-block;
    width: 150px;
    height: 50px;
    border-radius: 30px;
    border: 1px solid #8f9092;
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 3px 0 #cecfd1;
    background-image: linear-gradient(
      to top,
      #d8d9db 0%,
      #fff 80%,
      #fdfdfd 100%
    );
  }

  .box-5 {
    display: inline-block;
    width: 50px;
    height: 50px;
    margin-left: 20px;
    border-radius: 50px;
    border: 1px solid #8f9092;
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 3px 0 #cecfd1;
    background-image: linear-gradient(
      to top,
      #d8d9db 0%,
      #fff 80%,
      #fdfdfd 100%
    );
  }

  .box-curve {
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    background: #fff;
    &::after,
    &::before {
      z-index: -1;
      content: '';
      position: absolute;
      top: 50%;
      bottom: 0px;
      left: 20px;
      right: 20px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      border-radius: 100px/10px;
    }
  }

  .box-sharp-edge {
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    background: #fff;
    &::after {
      z-index: -1;
      content: '';
      position: absolute;
      background: transparent;
      top: 50%;
      bottom: 12px;
      left: 10px;
      right: 10px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      transform: skew(12deg) rotate(4deg);
    }
    &::before {
      z-index: -1;
      content: '';
      position: absolute;
      background: transparent;
      top: 50%;
      bottom: 12px;
      left: 10px;
      right: 10px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      transform: skew(-12deg) rotate(-4deg);
    }
  }
}
</style>