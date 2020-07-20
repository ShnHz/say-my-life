<template>
  <div class="blog-directory" v-loading="loading">
    <header>目录</header>
    <div class="directory-wrap">
      <!-- h3 -->
      <ul class="directory-h3-ul">
        <li
          :key="`directory-h3-${item.name}-${index}`"
          class="directory-h3-li"
          v-for="(item,index) in directory"
        >
          <a @click="scrollTo(item.href)">{{item.name}}</a>
          <!-- h4 -->
          <ul class="directory-h4-ul">
            <li
              :key="`directory-h4-${_item.name}-${_index}`"
              class="directory-h4-li"
              v-for="(_item,_index) in item.child"
            >
              <a @click="scrollTo(_item.href)">{{_item.name}}</a>
              <!-- h5 -->
              <ul class="directory-h5-ul">
                <li
                  :key="`directory-h5-${__item.name}-${__index}`"
                  class="directory-h5-li"
                  v-for="(__item,__index) in _item.child"
                >
                  <a @click="scrollTo(__item.href)">{{__item.name}}</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      directory: []
    }
  },
  mounted() {
    let _this = this
    setTimeout(() => {
      _this.getDomList()
      _this.loading = false
    }, 500)
  },
  methods: {
    getDomList() {
      let blog = document.getElementsByClassName('theme-default-content')[0]
      let items = blog.childNodes

      let tagH3Num = 0
      let tagH4Num = 0
      let tagH5Num = 0

      for (let i = 0; i < items.length; i++) {
        let tagName = items[i].tagName
        if (tagName == 'H3') {
          this.directory.push(this.setDomObjectFormat(items[i]))
          tagH3Num++
          tagH4Num = 0
        }

        if (tagName == 'H4' && this.directory[tagH3Num - 1]) {
          this.directory[tagH3Num - 1].child.push(
            this.setDomObjectFormat(items[i])
          )
          tagH4Num++
          tagH5Num = 0
        }

        if (tagName == 'H5' && this.directory[tagH3Num - 1].child.length != 0) {
          this.directory[tagH3Num - 1].child[tagH4Num - 1].child.push(
            this.setDomObjectFormat(items[i])
          )
          tagH5Num++
        }
      }
    },
    setDomObjectFormat(items) {
      let dirObj = {
        name: items.innerText.replace(/[\r\n]/g, '').replace(/[\#]/g, ''),
        href: items.innerText.replace(/[\r\n]/g, '').replace(/[\s\.]/g, '-'),
        child: []
      }

      if (!isNaN(Number(dirObj.name[0]))) {
        dirObj.href = '#_' + dirObj.href.substr(1)
      }

      return dirObj
    },
    scrollTo(href) {
      window.history.pushState({}, 0, window.location.href.split('#')[0] + href)

      console.log(href)

      href = href.split('#')[1].toLowerCase()
      window.scrollTo({
        // 通过offsetYop获取元素位置
        // -100是为了避免它直接滑动到屏幕顶部，怪丑的
        top: document.getElementById(href).offsetTop - 100,
        behavior: 'smooth' // 平滑滚动
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.blog-directory {
  position: sticky;
  top: 90px;
  width: 300px;
  height: auto;
  min-width: 300px;
  max-height: 350px;
  background: #f4f4f4;
  padding: 1rem 1.2rem;
  header {
    height: 45px;
    padding-top: 1rem !important;
    margin-bottom: 0.5rem;

    font-weight: 600;
  }
  .directory-wrap {
    height: 250px;
    overflow-y: auto;
    a {
      color: #333;
    }
  }
  .directory-h3-ul {
    font-size: 0.875rem;
    line-height: 2;

    .directory-h3-li {
      overflow: hidden;
      width: calc(100% - 10px);
      word-wrap: normal;
      white-space: nowrap;
      text-overflow: ellipsis;
      > a {
        font-weight: 600;
      }
      .directory-h4-ul {
        line-height: 2;
        .directory-h4-li {
          position: relative;
          padding-left: 15px;
          &::before {
            content: '';
            width: 4px;
            height: 4px;
            position: absolute;
            left: 4px;
            top: 12px;
            border-radius: 50%;
            background: #000;
          }
          .directory-h5-ul {
            line-height: 2;
            .directory-h5-li {
              position: relative;
              padding-left: 15px;
              &::before {
                content: '';
                width: 4px;
                height: 4px;
                position: absolute;
                left: 4px;
                top: 12px;
                border-radius: 50%;
                background: #000;
              }
            }
          }
        }
      }
    }
  }
}
</style>