<template>
  <div :style="{'height':height}" class="face-box flex" id="container">
    <div class="face flex">
      <span class="face-container" style="transform: matrix(1, 0, 0, 1, 0, 0);">
        <span class="eye left"></span>
        <span class="eye right"></span>
        <span class="mouth"></span>
      </span>
    </div>
  </div>
</template>
<script>
import { TweenMax } from 'gsap/TweenMax'

export default {
  data() {
    return {
      height: 0
    }
  },
  mounted() {
    this.height = window.innerHeight - 58 + 'px'

    const faceButton = document.querySelector('.face')
    const faceContainer = document.querySelector('.face-container')
    const containerCoords = document.querySelector('#container')
    const mouseCoords = containerCoords.getBoundingClientRect()

    containerCoords.addEventListener('mousemove', function(e) {
      const mouseX = e.pageX - containerCoords.offsetLeft
      const mouseY = e.pageY - containerCoords.offsetTop

      TweenMax.to(faceButton, 0.3, {
        x: ((mouseX - mouseCoords.width / 2) / mouseCoords.width) * 50,
        y: ((mouseY - mouseCoords.height / 2) / mouseCoords.width) * 50,
        ease: Power4.easeOut
      })
    })

    containerCoords.addEventListener('mousemove', function(e) {
      const mouseX = e.pageX - containerCoords.offsetLeft
      const mouseY = e.pageY - containerCoords.offsetTop

      TweenMax.to(faceContainer, 0.3, {
        x: ((mouseX - mouseCoords.width / 2) / mouseCoords.width) * 50 - 10,
        y: ((mouseY - mouseCoords.height / 2) / mouseCoords.width) * 50 - 15,
        ease: Power4.easeOut
      })
    })

    faceButton.addEventListener('mouseenter', function(e) {
      TweenMax.to(faceButton, 0.3, {
        scale: 0.975
      })
    })

    faceButton.addEventListener('mouseleave', function(e) {
      TweenMax.to(faceButton, 0.3, {
        x: 0,
        y: 0,
        scale: 1
      })

      TweenMax.to(faceContainer, 0.3, {
        x: 0,
        y: 0,
        scale: 1
      })
    })
  }
}
</script>
<style lang="scss" scoped>
$black: #2a2927;
$white: #fff;
$bg: #fbf6e6;
$face: #fdda5f;
$face-shadow: #fd9744;

.face-box {
  width: 100%;
  background: #fff;
  text-align: center;
  .face {
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 50%;
    background: #fdda5f;
    box-shadow: inset 2px -4px 18px #00000020;
    .face-container {
      position: relative;
      display: block;
      width: 40px;
      height: 20px;
      margin: auto;
    }

    .eye {
      position: absolute;
      height: 0.5rem;
      width: 0.5rem;
      background: $black;
      border-radius: 50%;
      animation: eyeBlink 3200ms linear infinite;
      &.left {
        left: 0;
      }
      &.right {
        left: 2rem;
      }
    }

    .mouth {
      position: absolute;
      top: 1.125rem;
      left: 0.8rem;
      width: 1rem;
      height: 0.125rem;
      background: $black;
      border-radius: 0;
    }

    .eye,
    .mouth {
      box-shadow: inset 1px 2px 4px #121110;
    }

    &:hover .mouth,
    &:active .mouth {
      left: 1rem;
      width: 0.5rem;
      height: 0.4rem;
      border-radius: 1rem 1rem 0.125rem 0.125rem;
    }

    &:hover .eye,
    &:active .eye {
      height: 0.375rem;
      width: 0.375rem;
      box-shadow: 0 0 0 0.25rem #fff;
    }

    @keyframes eyeBlink {
      0%,
      30%,
      36%,
      100% {
        transform: scale(1);
      }
      32%,
      34% {
        transform: scale(1, 0);
      }
    }
  }
}
</style>