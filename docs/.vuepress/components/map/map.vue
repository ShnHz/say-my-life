<template>
  <div :style="{'height':height}" class="map" id="map" v-loading="true"></div>
</template>
<script>
import star from '../../public/img/star.png' //以import的方式导入图片文件

export default {
  data() {
    return {
      height: 0,
      width: 0,

      address: [
        ['越南河内', 105.84009, 21.03438],
        ['越南岘港', 108.1716007, 16.0472484],
        ['越南胡志明', 106.4143502, 10.7553405],
        ['泰国曼谷', 100.4926821, 13.7248934],
        ['泰国芭提雅', 100.8525478, 12.8868533],

        '浙江省杭州市',
        '浙江省宁波市',
        '江西省玉山',
        '重庆市重庆北站',
        '四川省成都市',
        '浙江省淳安县',
        '安徽省黄山市',
        '浙江省宁海市',
        '陕西省华阴市',
        '陕西省西安市',
        '浙江省衢州市',
        '浙江舟山市东极岛',
        '上海市',
        '江苏省无锡市',
        '天津市',
        '北京市',
        '浙江省温州市雁荡山',
        '江苏省苏州市',
        '江苏省南京市',
        '江苏省常州市',
        '浙江省奉化市',
        '浙江省绍兴市',
        '浙江省台州市',
        '海南省文昌市',
        '海南省三亚市',
        '浙江省象山市',
        '江西省婺源市',
        '福建省厦门市',
        '浙江省舟山市',
        '浙江省义乌市',
        '浙江省横店市',
        '广西省南宁市'
      ]
    }
  },
  mounted() {
    this.height = window.innerHeight - 58 + 'px'
    this.$nextTick(function() {
      let _this = this
      _this.loadScript('输入你自己百度地图申请的ak').then(BMap => {
        var map = new BMap.Map('map')
        var point = new BMap.Point(120.19, 30.26)
        map.centerAndZoom(point, 5)

        map.addControl(
          new BMap.NavigationControl({ type: BMAP_NAVIGATION_CONTROL_SMALL })
        )

        map.enableScrollWheelZoom(true)
        map.enableDoubleClickZoom(true)
        map.setMapStyleV2({
          styleId: '地图styleId'
        })

        const deviceSize = new BMap.Size(17, 17) //图标大小
        function addMarker(point) {
          // 创建图标对象
          var myIcon = new BMap.Icon(star, deviceSize, {
            imageSize: deviceSize
          })
          // 创建标注对象并添加到地图
          var marker = new BMap.Marker(point, { icon: myIcon })
          map.addOverlay(marker)
        }
        function addPoint(data) {
          let point = new BMap.Point(data[1], data[2])
          addMarker(point)
        }

        let myGeo = new BMap.Geocoder()
        for (let i = 0; i < _this.address.length; i++) {
          if (typeof _this.address[i] == 'object') {
            addPoint(_this.address[i])
          } else {
            myGeo.getPoint(_this.address[i], function(point) {
              if (point) {
                addMarker(point)
              }
            })
          }
        }
      })
    })
  },
  methods: {
    loadScript(ak) {
      return new Promise(function(resolve, reject) {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.src =
          'https://api.map.baidu.com/api?v=3.0&ak=' + ak + '&callback=init'
        script.onerror = reject
        document.head.appendChild(script)

        if (typeof BMap != 'undefined') {
          resolve(BMap)
        } else {
          setTimeout(function() {
            resolve(BMap)
          }, 1000)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
}
</style>