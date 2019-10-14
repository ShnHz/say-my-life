<template>
  <div class="photo-wall">
    <div class="header">
      <div class="button" style="background:#FE7A79"></div>
      <div class="button" style="background:#F7CD8E"></div>
      <div class="button" style="background:#A8D898"></div>
    </div>
    <div class="content"></div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@media screen and (max-width: 900px) {
  .photo-wall {
    width: 100% !important;
  }
}

.photo-wall {
  position: relative;
  width: 840px;
  height: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  overflow: hidden;

  .header {
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;

    .button {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin: 0 5px;
    }
  }

  .content {
    background: #000;
    height: calc(100% - 50px);
  }
}
</style>