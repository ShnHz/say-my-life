<template>
  <p @click="strokeClick">#行程地图</p>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    strokeClick() {
      this.$cookies.set('strokeAddress', this.data)
      window.location.href = '/journey/Stroke'
    }
  }
}
</script>
<style lang="scss" scoped>
p {
  cursor: pointer;
  color: #3eaf7c;
}
</style>