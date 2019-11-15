<template>
  <div class="filter-col multiple">
    <a>
      <span class="icon">@</span>
      <span class="amp">
        <i class="shni shn-cloud-download"></i>
      </span>
      <span class="default-text">Hover</span>
      <span class="hover-text">Down</span>
    </a>
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
.multiple {
  position: relative;
  width: 20%;
  min-width: 200px;
  height: 100px;
  span {
    transition: transform 0.4s cubic-bezier(0.72, -0.61, 0.25, 1.51);
  }

  a:hover {
    width: 6.5em;
  }
  a:hover .amp {
    transform: none;
  }
  a:hover .default-text {
    transform: translateX(10em);
  }
  a:hover .hover-text {
    transform: none;
  }
  a:hover .icon {
    transform: translateY(3em);
  }

  /* Non-hover styles */
  p {
    overflow: hidden;
  }
  a {
    position: relative;
    width: 100px;
    height: 30px;
    color: #fff;
    display: block;
    background: #F39C12;
    border-radius: 1em;
    font-size: 14px;
    text-decoration: none;
    transition: width 0.25s ease-out;
    overflow: hidden;
  }

  .icon {
    position: absolute;
    left: 1.3em;
    top: 0.4em;
  }

  .amp {
    position: absolute;
    left: 1.3em;
    top: 0.5em;
    transform: translateY(-2em);
  }

  .hover-text {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.7em;
    margin-left: -0.4em;
    transform: translateX(-10em);
  }

  .default-text {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.7em;
    margin-left: -0.9em;
    transform: translateX(0);
  }
}

@media screen and (max-width: 900px) {
  .multiple {
    width: 100%;
    height: 100px;
  }
}
</style>