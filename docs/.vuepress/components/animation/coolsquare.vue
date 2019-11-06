<template>
  <div :style="{'height':height}" class="coolsquare flex">
    <div class="wrapper" style="$total: 81;">
      <div class="grid">
        <div class="item" style="$index: 1;"></div>
        <div class="item" style="$index: 2;"></div>
        <div class="item" style="$index: 3;"></div>
        <div class="item" style="$index: 4;"></div>
        <div class="item" style="$index: 5;"></div>
        <div class="item" style="$index: 6;"></div>
        <div class="item" style="$index: 7;"></div>
        <div class="item" style="$index: 8;"></div>
        <div class="item" style="$index: 9;"></div>
        <div class="item" style="$index: 10;"></div>
        <div class="item" style="$index: 11;"></div>
        <div class="item" style="$index: 12;"></div>
        <div class="item" style="$index: 13;"></div>
        <div class="item" style="$index: 14;"></div>
        <div class="item" style="$index: 15;"></div>
        <div class="item" style="$index: 16;"></div>
        <div class="item" style="$index: 17;"></div>
        <div class="item" style="$index: 18;"></div>
        <div class="item" style="$index: 19;"></div>
        <div class="item" style="$index: 20;"></div>
        <div class="item" style="$index: 21;"></div>
        <div class="item" style="$index: 22;"></div>
        <div class="item" style="$index: 23;"></div>
        <div class="item" style="$index: 24;"></div>
        <div class="item" style="$index: 25;"></div>
        <div class="item" style="$index: 26;"></div>
        <div class="item" style="$index: 27;"></div>
        <div class="item" style="$index: 28;"></div>
        <div class="item" style="$index: 29;"></div>
        <div class="item" style="$index: 30;"></div>
        <div class="item" style="$index: 31;"></div>
        <div class="item" style="$index: 32;"></div>
        <div class="item" style="$index: 33;"></div>
        <div class="item" style="$index: 34;"></div>
        <div class="item" style="$index: 35;"></div>
        <div class="item" style="$index: 36;"></div>
        <div class="item" style="$index: 37;"></div>
        <div class="item" style="$index: 38;"></div>
        <div class="item" style="$index: 39;"></div>
        <div class="item" style="$index: 40;"></div>
        <div class="item" style="$index: 41;"></div>
        <div class="item" style="$index: 42;"></div>
        <div class="item" style="$index: 43;"></div>
        <div class="item" style="$index: 44;"></div>
        <div class="item" style="$index: 45;"></div>
        <div class="item" style="$index: 46;"></div>
        <div class="item" style="$index: 47;"></div>
        <div class="item" style="$index: 48;"></div>
        <div class="item" style="$index: 49;"></div>
        <div class="item" style="$index: 50;"></div>
        <div class="item" style="$index: 51;"></div>
        <div class="item" style="$index: 52;"></div>
        <div class="item" style="$index: 53;"></div>
        <div class="item" style="$index: 54;"></div>
        <div class="item" style="$index: 55;"></div>
        <div class="item" style="$index: 56;"></div>
        <div class="item" style="$index: 57;"></div>
        <div class="item" style="$index: 58;"></div>
        <div class="item" style="$index: 59;"></div>
        <div class="item" style="$index: 60;"></div>
        <div class="item" style="$index: 61;"></div>
        <div class="item" style="$index: 62;"></div>
        <div class="item" style="$index: 63;"></div>
        <div class="item" style="$index: 64;"></div>
        <div class="item" style="$index: 65;"></div>
        <div class="item" style="$index: 66;"></div>
        <div class="item" style="$index: 67;"></div>
        <div class="item" style="$index: 68;"></div>
        <div class="item" style="$index: 69;"></div>
        <div class="item" style="$index: 70;"></div>
        <div class="item" style="$index: 71;"></div>
        <div class="item" style="$index: 72;"></div>
        <div class="item" style="$index: 73;"></div>
        <div class="item" style="$index: 74;"></div>
        <div class="item" style="$index: 75;"></div>
        <div class="item" style="$index: 76;"></div>
        <div class="item" style="$index: 77;"></div>
        <div class="item" style="$index: 78;"></div>
        <div class="item" style="$index: 79;"></div>
        <div class="item" style="$index: 80;"></div>
        <div class="item" style="$index: 81;"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      height: 0
    }
  },
  mounted() {
    this.height = window.innerHeight - 58 + 'px'
  }
}
</script>
<style lang="scss" scoped>
$black: #111111;
$white: #ffffff;
$color-el: $black;
$color-bg: $white;

.coolsquare {
  width: 100%;
  animation: swap-colors calc(4s) steps(2, end) infinite;
  align-items: center;
  background-color: $color-bg;
  display: flex;
  justify-content: center;
}

.wrapper {
  animation: push 2s ease-out infinite;
  border: 0.5vmin solid $color-el;
  max-width: 30vmin;
  overflow: hidden;
  // padding: $pad);
  width: 100%;
}

.grid {
  animation: grow 2s ease-in-out infinite;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: 1fr;
  width: 100%;
}

.item {
  animation: shrink 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  background-color: $color-el;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
}

@keyframes grow {
  0%,
  40% {
    transform: scale(1);
  }
  60% {
    transform: scale(10) rotate(100deg);
  }
  65% {
    transform: scale(10) rotate(84deg);
  }
  70% {
    transform: scale(10) rotate(92deg);
  }
  75% {
    transform: scale(10) rotate(88deg);
  }
  80% {
    transform: scale(10) rotate(90deg);
  }
  85%,
  95% {
    transform: scale(9) rotate(90deg);
  }
  100% {
    transform: scale(20) rotate(90deg);
  }
}

@keyframes shrink {
  0%,
  5% {
    transform: scale(1);
  }
  20%,
  80% {
    transform: scale(0.5);
  }
  95% {
    transform: scale(0.45, 0.5) skew(5deg);
  }
  100% {
    transform: scale(0.5);
  }
}

@keyframes push {
  0% {
    transform: scale(1.1);
  }
  10% {
    transform: scale(1);
  }
}

@keyframes swap-colors {
  to {
    $color-el: $white;
    $color-bg: $black;
  }
}
</style>