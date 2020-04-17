<template>
  <div :class="{'show':show,'unlock':!lock}" class="hide-password">
    <i
      :class="{'center':lock,'left':!lock,'error':error,'shake-slow shake-constant shake-constant--hover':shake && error}"
      class="shni shn-lock"
    ></i>
    <i :class="{'center':!lock,'right':lock}" class="shni shn-unlock"></i>
    <div :class="{'hide':!lock}" @click="inputFocus" class="code-input-main">
      <div class="code-input-main-item">{{code[0] ? '*' : ''}}</div>
      <div class="code-input-main-item">{{code[1] ? '*' : ''}}</div>
      <div class="code-input-main-item">{{code[2] ? '*' : ''}}</div>
      <div class="code-input-main-item">{{code[3] ? '*' : ''}}</div>
    </div>
    <input maxlength="4" ref="input" type="tel" v-model="code" />
  </div>
</template>
<script>
import md5 from 'js-md5'

export default {
  data() {
    return {
      show: false,
      code: '',
      lock: true,
      error: false,
      shake: false
    }
  },
  watch: {
    code: function(val) {
      let _this = this
      this.error = false
      if (val.length === 4) {
        if (md5(val) == '62429b8219194f0722dfea6509875729') {
          this.lock = false
          setTimeout(() => {
            _this.show = false
          }, 600)

          _this.unlock()
        } else {
          this.shake = true
          this.error = true
          setTimeout(() => {
            _this.shake = false
          }, 300)
          setTimeout(() => {
            _this.code = ''
          }, 700)
        }
      } else {
        this.lock = true
      }
    },
    lock: function(val) {
      this.$store.commit('setLock', val)
    },
    getVisible: function(val) {
      if (!this.show && val) {
        this.show = true
        this.inputFocus()
      }
    }
  },
  computed: {
    getVisible() {
      return this.$store.state.pwboxVisible
    }
  },
  created() {
    this.lock = this.$store.state.lock
  },
  mounted() {
    let _this = this
    document.onkeydown = function(e) {
      var event = e || event
      if (event.keyCode == 13 && event.ctrlKey) {
        _this.$refs.input.focus()
        _this.show = true
      }
    }
  },
  destroyed() {
    document.onkeydown = undefined
  },
  methods: {
    getCode() {
      return this.code
    },
    inputFocus() {
      this.$refs.input.focus()
    },
    inputBlur() {
      this.$refs.input.blur()
    },
    handleClose() {
      this.show = false
    },
    unlock() {
      document.onkeydown = undefined
      this.inputBlur()
      this.$emit('unLock')
    }
  }
}
</script>
<style lang="scss" scoped>
.hide-password {
  z-index: 9999;
  width: 200px;
  height: 160px;
  position: fixed;
  top: -230px;
  left: 50%;
  padding: 50px 20px 20px;
  margin-left: -100px;
  text-align: center;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  overflow: hidden;
  i {
    font-size: 28px;
    transition: all 0.4s ease;
    &.center {
      position: absolute;
      left: 50%;
      margin-left: -14px;
    }
    &.left {
      position: absolute;
      left: -20px;
      margin-left: -14px;
    }
    &.right {
      position: absolute;
      left: 220px;
      margin-left: -14px;
    }
    &.error {
      color: #f56c6c;
    }
    &.shn-unlock {
      color: #67c23a;
    }
  }
  &.show {
    top: -30px;
  }
  &.unlock {
    height: 110px;
  }
  input {
    position: relative;
    opacity: 0;
    top: 0;
    margin: 0 auto;
  }
  .code-input-main {
    position: relative;
    top: 0;
    width: 100%;
    margin: 40px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    &.hide {
      top: 30px;
    }
    .code-input-main-item {
      width: 50px;
      height: 50px;
      margin: 0 10px;
      text-align: center;
      padding-bottom: 0;
      font-size: 30px;
      color: #000;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>