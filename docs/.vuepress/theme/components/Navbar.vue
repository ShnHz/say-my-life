<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <router-link :to="$localePath" class="home-link">
      <img
        :alt="$siteTitle"
        :src="$withBase($site.themeConfig.logo)"
        class="logo"
        v-if="$site.themeConfig.logo"
      />
      <span
        :class="{ 'can-hide': $site.themeConfig.logo }"
        class="site-name"
        ref="siteName"
        v-if="$siteTitle"
      >{{ $siteTitle }}</span>
    </router-link>

    <div
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
      class="links"
    >
      <div @click="selectMode" class="color-button">
        <i class="say-my-life-i say-my-life-i-yueliang" v-if="currentMode == 'light'"></i>
        <i class="say-my-life-i say-my-life-i-taiyang" v-if="currentMode == 'dark'" style="color:#fff"></i>
      </div>
      <AlgoliaSearchBox :options="algolia" v-if="isAlgoliaSearch" />
      <SearchBox
        v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"
      />
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import modeOptions from '../../../../.vuepress/reco-theme/vuepress-theme-reco/components/Mode/modeOptions'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data() {
    return {
      linksWrapMaxWidth: null,
      currentMode: 'light'
    }
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, 'paddingLeft')) +
      parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)

    this.currentMode = localStorage.getItem('mode') || 'light'
    this.selectMode()
  },

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      )
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  },
  methods: {
    selectMode() {
      this.currentMode = this.currentMode == 'light' ? 'dark' : 'light'

      localStorage.setItem('mode', this.currentMode)

      if (this.currentMode == 'dark') {
        document.querySelectorAll('#app')[0].setAttribute('class', 'theme--dark')
      } else {
        document.querySelectorAll('#app')[0].setAttribute('class', '')
      }
    }
  }
}

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem;
$navbar-horizontal-padding = 1.5rem;

.navbar {
  padding: $navbar-vertical-padding $navbar-horizontal-padding;
  line-height: $navbarHeight - 1.4rem;

  a, span, img {
    display: inline-block;
  }

  .logo {
    height: $navbarHeight - 1.4rem;
    min-width: $navbarHeight - 1.4rem;
    margin-right: 0.8rem;
    vertical-align: top;
  }

  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: $textColor;
    position: relative;
  }

  .links {
    padding-left: 1.5rem;
    box-sizing: border-box;
    background-color: white;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    right: $navbar-horizontal-padding;
    top: $navbar-vertical-padding;
    display: flex;

    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }

    .color-button {
      cursor: pointer;
      height: 30px;
      line-height: 31px;
      min-width: 50px;
      margin-top: 4px;
      margin-right: 10px;
      text-align: center;
      color: rgba(0, 0, 0, 0.54);
      border-radius: 5px;
      transition: all 0.5s ease;

      &:hover {
        background: rgba(0, 0, 0, 0.05);
      }

      i {
        font-size: 22px;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    padding-left: 4rem;

    .can-hide {
      display: none;
    }

    .links {
      padding-left: 1.5rem;
    }

    .site-name {
      width: calc(100vw - 9.4rem);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
