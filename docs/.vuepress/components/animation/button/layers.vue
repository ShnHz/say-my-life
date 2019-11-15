<template>
  <div class="filter-col layers">
    <div class="button">HOVER</div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.layers {
  width: 20%;
  min-width: 200px;
  height: 100px;
  .button {
    cursor: pointer;
    display: block;
    width: 100px;
    height: 30px;
    line-height: 25px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'PT Sans Narrow', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -15px;
    margin-left: -50px;
    color: #363537;
    border: 3px solid #363537;
    border-radius: 24px;
    background: #85cb33;
    box-shadow: 0 0 0 #ed7d3a, 0 0 0 #ef2d56, 0 0 0 #2fbf71;
    transition: all 0.15s ease-in;
    &:hover {
      margin-top: -22.5px;
      margin-left: -57.5px;
      box-shadow: 5px 5px 0 #ed7d3a, 10px 10px 0 #ef2d56, 15px 15px 0 #2fbf71;
    }
  }
}

@media screen and (max-width: 900px) {
  .layers {
    width: 100%;
    height: 100px;
  }
}
</style>