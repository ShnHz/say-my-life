<template>
  <div :style="{'height':height}" class="mountains flex">
    <div class="main__container">
      <div class="hills__container">
        <div class="hill">
          <div class="tree"></div>
          <div class="tree"></div>
          <div class="tree"></div>
          <div class="tree"></div>
          <div class="tree"></div>
        </div>
        <div class="hill">
          <div class="tree"></div>
          <div class="tree"></div>
          <div class="tree"></div>
          <div class="tree"></div>
          <div class="tree"></div>
          <div class="tree"></div>
        </div>
      </div>
      <div class="mountain__container">
        <div class="left__mountain"></div>
        <div class="right__mountain"></div>
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
.mountains {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
}

$background: #c9b3c3;
$circle-bg: #d6e3f8;
$hills: #6e9173;
$mountains: #8e7159;
$streaks: lighten($mountains, 1%);

.main__container {
  position: relative;
  width: 30rem;
  height: 30rem;
  background: $circle-bg;
  box-shadow: inset 0px 0px 0 transparentize(darken($background, 30%), 0.3),
    4px 4px 8px 0 transparentize(darken($background, 30%), 0.4),
    6px 6px 12px 0 transparentize($background, 0.4);
  border-radius: 50%;
  overflow: hidden;
}
.mountain__container {
  position: absolute;
  width: 100%;
  height: 60%;
  animation: slide-up 4s cubic-bezier(0.71, 0.07, 0, 0.68) 1;
  .left__mountain {
    z-index: 5;
    position: absolute;
    left: -15%;
    bottom: 10%;
    border-left: 10rem solid transparent;
    border-right: 13rem solid transparent;
    border-bottom: 10rem solid darken($mountains, 8%);
    &::before {
      content: '';
      display: block;
      position: absolute;
      z-index: 5;
      top: 0;
      left: -15rem;
      background: darken($mountains, 8%);
      clip-path: polygon(100% 47%, 69% 76%, 75% 100%, 0% 100%, 100% 0, 89% 35%);
      width: 15rem;
      height: 15rem;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      background: transparent;
      transform: translate(-50%, 10px);
      border-left: 15rem solid transparent;
      border-right: 15rem solid transparent;
      border-bottom: 15rem solid darken($mountains, 3%);
    }
  }
  .right__mountain {
    z-index: 5;
    position: absolute;
    right: -30%;
    bottom: -15%;
    border-left: 15rem solid transparent;
    border-right: 18rem solid transparent;
    border-bottom: 15rem solid darken($mountains, 10%);
    &::before {
      content: '';
      display: block;
      position: absolute;
      z-index: 5;
      top: 0;
      left: -20rem;
      background: darken($mountains, 8%);
      clip-path: polygon(
        90% 25%,
        100% 43%,
        77% 60%,
        94% 72%,
        71% 100%,
        0 100%,
        100% 0
      );
      width: 20rem;
      height: 20rem;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      background: transparent;
      transform: translate(-50%, 10px);
      border-left: 20rem solid transparent;
      border-right: 20rem solid transparent;
      border-bottom: 20rem solid $mountains;
    }
  }
}

// Hills
.hills__container {
  z-index: 10;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  .hill:first-child {
    position: absolute;
    transform: translateX(0%);
    width: 30rem;
    height: 15rem;
    border-radius: 0% 100% 0% 0%;
    background-color: $hills;
    animation: slide-left 3s linear 1;
    .tree {
      position: absolute;
      border-left: 0.5rem solid transparent;
      border-right: 0.5rem solid transparent;
      border-bottom: 1.5rem solid darken($hills, 20%);
      &::after {
        content: '';
        display: block;
        position: absolute;
        left: -0.125rem;
        bottom: -2rem;
        width: 0.25rem;
        height: 0.5rem;
        background: darken($hills, 30%);
      }
      &:nth-child(1) {
        left: 30%;
      }
      &:nth-child(2) {
        top: 20%;
        left: 20%;
      }
      &:nth-child(3) {
        top: 5%;
        left: 5%;
      }
      &:nth-child(4) {
        top: 16%;
        left: 38%;
      }
      &:nth-child(5) {
        top: 25%;
        left: 60%;
      }
    }
  }
  .hill:last-child {
    position: absolute;
    transform: translateX(0%);
    width: 30rem;
    height: 15rem;
    border-radius: 100% 0% 0% 0%;
    background: darken($hills, 10%);
    animation: slide-right 3s linear 1;
    .tree {
      position: absolute;
      border-left: 0.5rem solid transparent;
      border-right: 0.5rem solid transparent;
      border-bottom: 1.75rem solid darken($hills, 20%);
      &::after {
        content: '';
        display: block;
        position: absolute;
        left: -0.125rem;
        bottom: -2.25rem;
        width: 0.25rem;
        height: 0.5rem;
        background: darken($hills, 30%);
      }
      &:nth-child(1) {
        right: 30%;
      }
      &:nth-child(2) {
        top: 30%;
        right: 20%;
      }
      &:nth-child(3) {
        top: 5%;
        right: 5%;
      }
      &:nth-child(4) {
        top: 50%;
        right: 45%;
      }
      &:nth-child(5) {
        top: 35%;
        right: 65%;
      }
      &:nth-child(6) {
        top: 15%;
        right: 45%;
      }
    }
  }
}

// Animations
@keyframes slide-left {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes slide-right {
  0% {
    transform: translateX(25%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>