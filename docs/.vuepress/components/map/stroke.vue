<template>
  <div :style="{'height':height,'width':'100%','position':'relative'}">
    <div :style="{'height':height}" class="map" id="map" v-loading="true"></div>
    <el-button @click="textShow = true" class="text-show-btn" size="mini" v-if="!textShow">展开文字路线</el-button>
    <div class="text-wrap" v-show="textShow">
      <i @click="textShow = false" class="shni shn-close_1"></i>
      <el-timeline>
        <el-timeline-item
          :key="'stroke-text-item-' + item + index"
          size="normal"
          v-for="(item, index) in address"
        >{{item}}</el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
import position from '../../public/img/position.png' //以import的方式导入图片文件

export default {
  data() {
    return {
      height: 0,
      width: 0,

      address: ['浙江省杭州市杭州东站', '浙江省杭州市余杭区人民广场'],
      textShow: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      this.height = window.innerHeight - 58 + 'px'
      let _this = this
      _this.loadScript('XX997fp9jKEMv6p70M8lB4i4jIq3npRu').then(() => {
        let strokeAddress = []
        if (_this.$cookies.get('strokeAddress')) {
          strokeAddress = _this.$cookies.get('strokeAddress').split(',')
        }
        _this.address =
          strokeAddress.length == 0 ? _this.address : strokeAddress
        _this.getPoint(_this.address[0], null, false).then(initPoint => {
          var map = new BMap.Map('map')

          var point = new BMap.Point(initPoint[0], initPoint[1])
          map.centerAndZoom(point, 13)

          map.addControl(
            new BMap.NavigationControl({ type: BMAP_NAVIGATION_CONTROL_SMALL })
          )

          map.enableScrollWheelZoom(true)
          map.enableDoubleClickZoom(true)
          map.setMapStyleV2({
            styleId: '8f64f5f3e7beeb19c413a5467a593fa5'
          })

          for (let i = 0; i < _this.address.length - 1; i++) {
            _this.setLine(map, _this.address[i], _this.address[i + 1])
          }
        })
      })
    },
    /**
     * 加载地图
     */
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
    },
    /**
     * 绘制折线
     */
    async setLine(map, adStart, adEnd) {
      let pointStart = await this.getPoint(adStart, map, true)
      let pointEnd = await this.getPoint(adEnd, map, true)

      var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
        scale: 0.5,
        strokeColor: '#fff',
        strokeWeight: 2,
        anchor: new BMap.Size(0.5, 0),
        strokeOpacity: 0.8
      })
      var icons = new BMap.IconSequence(sy, '100%', '20', false)

      var polyline = new BMap.Polyline(
        [
          new BMap.Point(pointStart[0], pointStart[1]),
          new BMap.Point(pointEnd[0], pointEnd[1])
        ],
        {
          strokeColor: '#F56C6C',
          strokeWeight: 5,
          strokeOpacity: 0.5,
          icons: [icons]
        }
      )

      map.addOverlay(polyline)
    },
    /**
     * 获取目标点的经纬度
     */
    getPoint(address, map = null, isAddPoint = false) {
      return new Promise(function(resolve, reject) {
        let myGeo = new BMap.Geocoder()
        myGeo.getPoint(address, function(point) {
          if (point) {
            if (isAddPoint) {
              addPoint(point)
            }
            resolve([point.lng, point.lat])
          }
        })

        const deviceSize = new BMap.Size(27, 27) //图标大小
        function addMarker(point) {
          // 创建图标对象
          var myIcon = new BMap.Icon(position, deviceSize, {
            imageSize: deviceSize
          })
          // 创建标注对象并添加到地图
          var marker = new BMap.Marker(point, {
            icon: myIcon,
            offset: new BMap.Size(-1, -11),
            title: address
          })

          marker.setZIndex(100)

          map.addOverlay(marker)
        }
        function addPoint(data) {
          let point = new BMap.Point(data.lng, data.lat)
          addMarker(point)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
.text-show-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.text-wrap {
  z-index: 9999;
  position: absolute;
  top: 20px;
  right: 20px;

  background: #fff;
  border-radius: 10px;
  padding: 20px;
  padding-bottom: 0px;

  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  i {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    color: rgb(175, 175, 175);
  }

  ::v-deep {
    .el-timeline-item {
      padding-bottom: 5px;
    }
  }
}
</style>