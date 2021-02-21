<template>
  <div id="homepage">
    <div class="background-image">
      <div class="homepage-info">
        <div class="homepage-title">
          Welcome to Eric's Website
        </div>
        <div class="homepage-description">
          This is a blog site that records some of my projects and notes.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const WEBAPI = require('apifm-webapi')
export default {
  name: 'homepage',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    bindChange: function (e) {
      this.$refs.swiper.manualSwipe(e)
    },
    swiperChanged: function (value) {
      if (value != 0 && value - 1 != this.games.length ) this.currentPic = value - 1
    }
  }
}
</script>

<style lang="scss" scoped>
#homepage {
  width: 100%;
  height: 100vh;
  min-width: 1300px;
  min-height: 900px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  .background-image {
    width: 100%;
    height: 100vh;
    min-width: 1300px;
    min-height: 900px;
    background-image: url('../../assets/images/sunrise.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    .homepage-info {
      width: 100%;
      min-width: 1300px;
      height: fit-content;
      top: 50%;
      position: absolute;
      transform: translateY(-50%);
      .homepage-description, .homepage-title {
        width: 100%;
        min-width: 1300px;
        padding: 0 200px;
        box-sizing: border-box;
      }
      .homepage-title {
        height: 80px;
        line-height: 80px;
        font-size: 60px;
        color: #fff;
      }
      .homepage-description {
        height: 60px;
        line-height: 60px;
        font-size: 40px;
        color: #aaaaaa;
      }
    }
  }
}
</style>