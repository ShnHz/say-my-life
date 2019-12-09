<template>
  <div class="filter-col publish-hold">
    <button class="button-hold">
      <div>
        <svg class="icon" viewBox="0 0 16 16">
          <polygon points="1.3,6.7 2.7,8.1 7,3.8 7,16 9,16 9,3.8 13.3,8.1 14.7,6.7 8,0" />
        </svg>
        <svg class="progress" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="8" />
        </svg>
        <svg class="tick" viewBox="0 0 24 24">
          <polyline points="18,7 11,16 6,12" />
        </svg>
      </div>
      <span style="margin-left:0px">上传</span>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    // Hold button with mouse / select with tab and hold spacebar

    let duration = 800,
      success = button => {
        //Success function
        button.classList.add('success')
        setTimeout(() => {
          button.classList.remove('success')
        }, 2000)
      }

    document.querySelectorAll('.button-hold').forEach(button => {
      button.style.setProperty('--duration', duration + 'ms')
      ;['mousedown', 'touchstart', 'keypress'].forEach(e => {
        button.addEventListener(e, ev => {
          if (
            e != 'keypress' ||
            (e == 'keypress' &&
              ev.which == 32 &&
              !button.classList.contains('process'))
          ) {
            button.classList.add('process')
            button.timeout = setTimeout(success, duration, button)
          }
        })
      })
      ;['mouseup', 'mouseout', 'touchend', 'keyup'].forEach(e => {
        button.addEventListener(
          e,
          ev => {
            if (e != 'keyup' || (e == 'keyup' && ev.which == 32)) {
              button.classList.remove('process')
              clearTimeout(button.timeout)
            }
          },
          false
        )
      })
    })
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.publish-hold {
  width: 20%;
  min-width: 200px;
  height: 100px;
  .button-hold {
    --color: #f6f8ff;
    --background: #2b3044;
    --icon: var(--color);
    --progress-border: #646b8c;
    --progress-active: #fff;
    --progress-success: #5c86ff;
    --tick-stroke: var(--progress-active);
    --shadow: #{rgba(#00093d, 0.2)};
    width: 100px;
    height: 40px;
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    // padding: 12px 20px 12px 12px;
    border: 0;
    border-radius: 24px;
    outline: none;
    user-select: none;
    cursor: pointer;
    -webkit-backface-visibility: hidden;
    -webkit-appearance: none;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 var(--shadow-y, 4px) var(--shadow-blur, 12px) var(--shadow);
    transform: scale(var(--scale, 1)) translateZ(0);
    color: var(--color);
    background: var(--background);
    & > div {
      margin-right: 4px;
      border-radius: 50%;
      display: inline-block;
      vertical-align: top;
      position: relative;
      background: var(--progress-border);

      &:before {
        content: '';
        width: 16px;
        height: 16px;
        left: 2px;
        top: 2px;
        z-index: 1;
        position: absolute;
        background: var(--background);
        border-radius: inherit;
        transform: scale(var(--background-scale, 1));
        transition: transform 0.32s ease;
      }
      svg {
        display: block;
        &.icon,
        &.tick {
          position: absolute;
        }
        &.icon {
          width: 8px;
          height: 8px;
          left: 6px;
          top: 6px;
          fill: var(--icon);
          z-index: 1;
          transition: opacity 0.2s, transform 0.2s;
          opacity: var(--icon-opacity, 1);
          transform: translateY(var(--icon-y, 0)) scale(var(--icon-scale, 1));
        }
        &.progress,
        &.tick {
          fill: none;
        }
        &.progress {
          width: 20px;
          height: 20px;
          transform: rotate(-90deg) scale(var(--progress-scale, 1));
          transition: transform 0.5s ease;
          circle {
            stroke-dashoffset: 1;
            stroke-dasharray: var(--progress-array, 0) 52;
            stroke-width: 16;
            stroke: var(--progress-active);
            transition: stroke-dasharray var(--duration) linear;
          }
        }
        &.tick {
          width: 20px;
          height: 20px;
          left: 0;
          top: 0;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke: var(--tick-stroke);
          transition: stroke 0.3s ease 0.7s;
          polyline {
            stroke-dasharray: 18 18 18;
            stroke-dashoffset: var(--tick-offset, 18);
            transition: stroke-dashoffset 0.4s ease 0.7s;
          }
        }
      }
    }
    &:focus,
    &:hover {
      &:not(.process) {
        --shadow-y: 8px;
        --shadow-blur: 16px;
      }
    }
    &:active {
      &:not(.success) {
        --scale: 0.96;
        --shadow-y: 4px;
        --shadow-blur: 8px;
      }
    }
    &.process,
    &.success {
      --progress-array: 52;
      --icon-y: -4px;
      --icon-scale: 0.6;
      --icon-opacity: 0;
    }
    &.success {
      --progress-border: none;
      --progress-scale: 0.11;
      --tick-stroke: var(--progress-success);
      --background-scale: 0;
      --tick-offset: 36;
      & > div {
        svg {
          &.progress {
            animation: tick 0.3s linear forwards 0.4s;
          }
        }
      }
    }
  }

  @keyframes tick {
    100% {
      transform: rotate(-90deg) translate(0, -5px) scale(var(--progress-scale));
    }
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: inherit;
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }

  // Center & dribbble

  .dribbble {
    position: fixed;
    display: block;
    right: 20px;
    bottom: 20px;
    img {
      display: block;
      height: 28px;
    }
  }
  .twitter {
    position: fixed;
    display: block;
    right: 64px;
    bottom: 14px;
    svg {
      width: 32px;
      height: 32px;
      fill: #1da1f2;
    }
  }
}
</style>