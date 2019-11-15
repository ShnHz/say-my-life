<template>
  <div class="train-ticket">
    <p>
      <span class="id">{{id}}</span>
      <span class="check-in" v-if="checkIn != 'none'">检票：{{checkIn}}</span>
    </p>
    <div class="station flex">
      <div class="train-id">
        {{trainType}}
        <span style="font-size:18px">{{trainId}}</span>
      </div>
      <div class="start-station">
        <p>
          <span class="station-cn">{{startStation}}</span>
          <span class="zhan">站</span>
        </p>
        <p>
          <span class="station-pinyin">{{startStationEn}}</span>
        </p>
      </div>
      <div class="end-station">
        <p>
          <span class="station-cn">{{endStation}}</span>
          <span class="zhan">站</span>
        </p>
        <p>
          <span class="station-pinyin">{{endStationEn}}</span>
        </p>
      </div>
    </div>
    <div class="second">
      <span class="time">
        {{year}}
        <span class="unit">年</span>
        {{month}}
        <span class="unit">月</span>
        {{day}}
        <span class="unit">日</span>
        {{hour}}:{{minute}}
        <span class="unit">开</span>
      </span>
      <span>
        {{trainNum}}
        <span class="unit">车</span>
        {{trainSeatNum}}
        <span class="unit">号</span>
      </span>
    </div>
    <div class="third flex">
      <div>
        <span class="unit">￥</span>
        {{price}}
        <span class="unit">元</span>
      </div>
      <div>
        <span v-if="net">网</span>
      </div>
      <div>{{trainSeatLv}}</div>
    </div>
    <div class="forth">限乘当日当次车</div>
    <div class="fivth">
      3623
      <span>** **** **** **</span>19 桑杭宁
    </div>
    <img alt class="qrcode" src="../../public/img/train-ticket-qrcode.png" />
    <img alt class="train-bg" src="../../public/img/train.png" />
    <div class="footer">{{footer}}</div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: 'Z95Q021361'
    },
    checkIn: {
      type: String,
      default: '4A'
    },
    trainType: {
      type: String,
      default: 'G'
    },
    trainId: {
      type: String,
      default: '1560'
    },
    trainType: {
      type: String,
      default: 'G'
    },
    startStation: {
      type: String,
      default: '杭州东'
    },
    endStation: {
      type: String,
      default: '宁波'
    },
    startStationEn: {
      type: String,
      default: 'HangZhouDong'
    },
    endStationEn: {
      type: String,
      default: 'NingBo'
    },
    date: {
      type: String,
      default: '2018/03/26 08:44'
    },
    trainNum: {
      type: String,
      default: '15'
    },
    trainSeatNum: {
      type: String,
      default: '10D'
    },
    trainSeatLv: {
      type: String,
      default: '二等座'
    },
    price: {
      type: String,
      default: '80.5'
    },
    net: {
      type: Boolean,
      default: true
    },
    footer: {
      type: String,
      default: '66100310950321Q021361郑州东售'
    }
  },
  computed: {
    year: function() {
      return new Date(this.date).getFullYear()
    },
    month: function() {
      return this.appendZero(new Date(this.date).getMonth() + 1)
    },
    day: function() {
      return this.appendZero(new Date(this.date).getDate())
    },
    hour: function() {
      return this.appendZero(new Date(this.date).getHours())
    },
    minute: function() {
      return this.appendZero(new Date(this.date).getMinutes())
    }
  },
  methods: {
    appendZero(obj) {
      if (obj < 10) return '0' + '' + obj
      else return obj
    }
  }
}
</script>
<style lang="scss" scoped>
.train-ticket {
  display: inline-block;
  width: 350px;
  height: 220px;
  position: relative;
  margin: 20px 20px 20px 0;
  padding: 5px 20px;

  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #c4e5ea;
  overflow: hidden;
  .id {
    color: #f56c6c;
    font-weight: 600;
  }
  .check-in {
    position: relative;
    top: 3px;
    float: right;
    font-size: 13px;
    font-weight: 600;
  }
  .station {
    .train-id {
      line-height: 1.4;
      position: absolute;
      top: 0px;
      border-bottom: 1px #222 solid;
      overflow: hidden;
      &::after {
        position: absolute;
        bottom: -5px;
        right: -5px;
        content: '';
        width: 0;
        height: 0;
        border: 4px solid transparent;
        border-left: 8px solid #222;
      }
    }
    > div {
      flex: 1;
      p {
        line-height: 1;
      }
    }
    .station-cn {
      font-size: 18px;
      letter-spacing: 3px;
    }
    .station-pinyin {
      font-size: 12px;
    }
    .zhan {
      font-size: 14px;
      font-weight: 600;
    }
    .start-station {
      margin-right: 40px;
      text-align: right;
    }
    .end-station {
      margin-left: 40px;
      text-align: left;
    }
  }
  .unit {
    font-size: 12px;
    font-weight: 500;
    margin-right: 2px;
  }
  .second,
  .third {
    font-weight: 600;
    font-size: 14px;
    .date {
      margin-right: 28px;
    }
  }
  .third {
    > div {
      flex: 1;
      text-align: center;
      &:first-child {
        text-align: left;
      }
    }
  }
  .forth {
    font-size: 14px;
  }
  .fivth {
    margin-top: 25px;
    span {
      margin: 0 5px;
      position: relative;
      top: 3px;
    }
  }
  .qrcode {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 20px;
    bottom: 30px;
  }
  .train-bg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.1;
  }
  .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 5px 0 5px 20px;
    font-size: 12px;
    background: #a1e6eba2;
  }
}

@media screen and (max-width: 900px) {
  .train-ticket {
    width: 100%;
  }
}

@media screen and (max-width: 320px) {
  .train-ticket {
    width: 350px;
  }
}
</style>