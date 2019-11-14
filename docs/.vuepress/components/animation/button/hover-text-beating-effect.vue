<template>
  <div>
    <div class="filter-col hover-text-beating-effect">
      <a class="button" id="hover-text-beating-effect-button">Button</a>
    </div>
    <div class="filter-col hover-text-beating-effect">
      <a class="button reverse dark" id="hover-text-beating-effect-reverse">Reverse</a>
    </div>
    <div class="filter-col hover-text-beating-effect">
      <a class="button fast" id="hover-text-beating-effect-fast">Fast</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    let list = ['button', 'reverse', 'fast']
    for (let i = 0; i < list.length; i++) {
      let button = document.getElementById('hover-text-beating-effect-' + list[i])
      let span =
        '<span><i>' +
        button.innerHTML
          .trim()
          .split('')
          .join('</i><i>') +
        '</i></span>'

      button.innerHTML = span
    }
  }
}
</script>
<style lang="scss">
.hover-text-beating-effect {
  width: 20%;
  min-width: 200px;
  height: 100px;
  .button {
    width: 100px;
    --background: #275efe;
    --text: #fff;
    --font-size: 14px;
    --duration: 0.44s;
    --move-hover: -4px;
    --shadow: 0 2px 8px -1px #{rgba(#275efe, 0.32)};
    --shadow-hover: 0 4px 20px -2px #{rgba(#275efe, 0.5)};
    --font-shadow: var(--font-size);
    padding: 8px 0;
    font-family: 'Roboto';
    font-weight: 500; 
    line-height: var(--font-size);
    border-radius: 24px;
    display: block;
    outline: none;
    text-decoration: none;
    font-size: var(--font-size);
    letter-spacing: 0.5px;
    background: var(--background);
    color: var(--text);
    box-shadow: var(--shadow);
    transform: translateY(var(--y));
    transition: transform var(--duration) ease, box-shadow var(--duration) ease;
    &.dark {
      --background: #2f3545;
      --shadow: 0 2px 8px -1px #{rgba(#151924, 0.32)};
      --shadow-hover: 0 4px 20px -2px #{rgba(#151924, 0.5)};
    }
    &.white {
      --background: #fff;
      --text: #275efe;
      --shadow: 0 2px 8px -1px #{rgba(#121621, 0.04)};
      --shadow-hover: 0 4px 20px -2px #{rgba(#121621, 0.12)};
    }
    &.fast {
      --duration: 0.32s;
    }
    span {
      display: flex;
      overflow: hidden;
      justify-content: center;
      text-shadow: 0 var(--font-shadow) 0 var(--text);
      i {
        display: block;
        backface-visibility: hidden;
        font-style: normal;
        transition: transform var(--duration) ease;
        transform: translateY(var(--m));
        $i: 1;
        @while $i < 12 {
          &:nth-child(#{$i}) {
            transition-delay: $i / 20 + s;
          }
          $i: $i + 1;
        }
      }
    }
    &:hover {
      text-decoration: none !important;
      --y: var(--move-hover);
      --shadow: var(--shadow-hover);
      i {
        --m: calc(var(--font-size) * -1);
      }
    }
    &.reverse {
      --font-shadow: calc(var(--font-size) * -1);
      &:hover {
        i {
          --m: calc(var(--font-size));
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .hover-text-beating-effect {
    width: 100%;
    height: 100px;
  }
}
</style>