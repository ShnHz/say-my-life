<template>
  <div class="filter-col add-to-cart-box">
    <button class="add-to-cart">
      <div class="default">添加</div>
      <div class="success">已添加</div>
      <div class="cart">
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="dots"></div>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', e => {
        button.classList.toggle('added')
      })
    })
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.add-to-cart-box {
  width: 20%;
  min-width: 200px;
  height: 100px;
  .add-to-cart {
    --color: #fff;
    --icon: var(--color);
    --cart: #fff;
    --dots: #fff;
    --background: #34495E;
    --shadow: #{rgba(#00093d, 0.16)};
    cursor: pointer;
    position: relative;
    outline: none;
    border: none;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    font-size: 14px;
    border-radius: 22px;
    height: 30px;
    width: 100px;
    font-weight: 500;
    line-height: 10px;
    transform: scale(var(--s, 0.97));
    box-shadow: 0 var(--s-y, 4px) var(--s-b, 12px) var(--shadow);
    color: var(--color);
    background: var(--background);
    transition: transform 0.3s, box-shadow 0.3s;
    .default {
      padding-left: 26px;
      position: relative;
      opacity: var(--o, 1);
      transform: scale(var(--s, 1));
      transition: transform 0.3s, opacity 0.3s;
      transition-delay: var(--d, 0.3s);
      &:before,
      &:after {
        content: '';
        width: 2px;
        height: 12px;
        left: 22px;
        top: -1px;
        border-radius: 1px;
        background: var(--icon);
        position: absolute;
        transform: rotate(var(--r, 0deg));
        transition: transform 0.25s;
      }
      &:after {
        --r: 90deg;
      }
    }
    .success {
      opacity: var(--o, 0);
      transform: translate(-50%, var(--y, 12px));
      position: absolute;
      top: 10px;
      left: 50%;
      transition: opacity 0.3s, transform 0.3s;
      transition-delay: var(--d, 0s);
    }
    .dots {
      width: 4px;
      height: 4px;
      top: 20px;
      left: 52%;
      margin-left: -7px;
      border-radius: 2px;
      position: absolute;
      transform-origin: 10px 50%;
      background: var(--dots);
      box-shadow: 5px 0 0 var(--dots), 10px 0 0 var(--dots);
      opacity: var(--o, 0);
      transform: scale(var(--s, 0.4));
      transition: opacity 0.3s, transform 0.3s;
      transition-delay: var(--d, 0s);
    }
    .cart {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      border-radius: inherit;
      overflow: hidden;
      -webkit-mask-image: -webkit-radial-gradient(white, black);
      &:before {
        content: '';
        position: absolute;
        width: 20px;
        height: 16px;
        background: var(--background);
        top: 10px;
        right: 100%;
        z-index: 1;
        margin-right: -20px;
        transform: translateX(-18px) rotate(-16deg);
      }
      & > div {
        top: 5px;
        right: 100%;
        transform: translateX(-18px) rotate(-16deg);
        position: absolute;
        z-index: 2;
        transform-origin: 1px 21px;
        &:before,
        &:after {
          content: '';
          position: absolute;
          top: var(--t, 4px);
          left: var(--l, 0);
          height: 2px;
          width: var(--w, 18px);
          background: var(--cart);
          border-radius: 1px;
        }
        &:after {
          --w: 16px;
          --t: 14px;
          --l: 1px;
        }
        & > div {
          width: 2px;
          height: var(--h, 15px);
          border-radius: 1px;
          transform: rotate(var(--r, -8deg));
          background: var(--cart);
          position: relative;
          &:before,
          &:after {
            content: '';
            position: absolute;
            background: inherit;
          }
          &:after {
            width: 4px;
            height: 4px;
            border-radius: 2px;
            bottom: var(--b, -6px);
            left: var(--l, 0);
          }
          &:first-child {
            &:before {
              border-radius: inherit;
              top: 0;
              right: 0;
              height: 2px;
              width: 6px;
              transform-origin: 5px 1px;
              transform: rotate(16deg);
            }
          }
          &:last-child {
            --h: 12px;
            --r: 8deg;
            position: absolute;
            left: 16px;
            bottom: -1px;
            &:after {
              --l: -2px;
              --b: -5px;
            }
          }
        }
      }
    }
    &.added {
      .default {
        --o: 0;
        --s: 0.8;
        --d: 0s;
        &:before {
          --r: -180deg;
        }
        &:after {
          --r: -90deg;
        }
      }
      .dots {
        --o: 1;
        --s: 1;
        --d: 0.3s;
        animation: dots 2s linear forwards;
      }
      .success {
        --o: 1;
        --y: 0;
        --d: 1.8s;
      }
      .cart {
        &:before,
        & > div {
          animation: cart 2s forwards;
        }
      }
    }
    &:not(.added) {
      &:hover {
        --s: 1;
        --s-y: 8px;
        --s-b: 20px;
      }
      &:active {
        --s: 0.94;
        --s-y: 2px;
        --s-b: 6px;
      }
    }
  }

  @keyframes cart {
    41%,
    49%,
    57%,
    60% {
      transform: translateX(44px) rotate(0deg);
    }
    40%,
    47%,
    54% {
      transform: translateX(44px) rotate(0deg) translateY(1px);
    }
    100% {
      transform: translateX(120px) rotate(-16deg);
    }
  }

  @keyframes dots {
    5% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-22px) rotate(-32deg);
      box-shadow: 5px 0 0 var(--dots), 10px 0 0 var(--dots);
    }
    31% {
      box-shadow: 5px -4px 0 var(--dots), 10px -8px 0 var(--dots);
    }
    32%,
    50% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    45%,
    100% {
      box-shadow: 5px 0 0 var(--dots), 10px 0 0 var(--dots);
    }
    51%,
    100% {
      opacity: 0;
    }
  }
}
</style>