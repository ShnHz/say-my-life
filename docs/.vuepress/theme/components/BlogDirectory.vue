<template>
  <div class="blog-directory">
    <header>目录</header>
    <div class="directory-wrap">
      <!-- h3 -->
      <ul class="directory-h3-ul">
        <li
          :key="`directory-h3-${item.name}-${index}`"
          class="directory-h3-li"
          v-for="(item,index) in directory"
        >
          <a :href="item.href">{{item.name}}</a>
          <!-- h4 -->
          <ul class="directory-h4-ul">
            <li
              :key="`directory-h4-${_item.name}-${_index}`"
              class="directory-h4-li"
              v-for="(_item,_index) in item.child"
            >
              <a :href="_item.href">{{_item.name}}</a>
              <!-- h5 -->
              <ul class="directory-h5-ul">
                <li
                  :key="`directory-h5-${__item.name}-${__index}`"
                  class="directory-h5-li"
                  v-for="(__item,__index) in _item.child"
                >
                  <a :href="__item.href">{{__item.name}}</a>
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
      directory: []
    }
  },
  mounted() {
    this.getDomList()
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

        if (tagName == 'H4') {
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
      .directory-h4-ul {
        line-height: 2;
        .directory-h4-li {
          padding-left: 20px;
          .directory-h5-ul {
            line-height: 2;
            .directory-h5-li {
              padding-left: 20px;
            }
          }
        }
      }
    }
  }
}
</style>