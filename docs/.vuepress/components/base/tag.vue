<template>
  <el-tag
    :class="`el-tag--${data.type}`"
    :closable="data.closable"
    :effect="effect ? effect : 'dark'"
    :size="size ? size : 'mini'"
    :type="data.type ? data.type : ''"
    @click="$emit('click')"
    @close="$emit('close')"
    disable-transitions
  >
    <i :class="data.icon" v-if="data.icon"></i>
    {{data.name}}
  </el-tag>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    data: {
      type: Object,
      default: {
        name: 'tag'
      }
    },
    size: {
      type: String
    },
    effect: {
      type: String
    }
  }
}
</script>
<style lang="scss">
.el-tag {
  // display: inline-flex;
  // align-items: center;
  // line-height: 0;
  i {
    font-size: 12px;
  }
}
</style>