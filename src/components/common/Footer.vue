<template>
  <div class="footer-container">
    <div class="info-container">
      <div class="main-info">
        Copyright © 2021 Lucifer1027 @ github.com All rights reserved.
      </div>
      <div class="other-info">
        Github Repository: <span class="link" @click="toUrl(link)">{{link}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: 'https://github.com/Lucifer1027/Lucifer1027.github.io.git'
    }
  },
  methods: {
    toUrl: function (e) {
      console.log(e)
      window.location = e;
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-container {
  width: 100%;
  height: 70px;
  min-width: 1300px;
  box-sizing: border-box;
  background-color: #000;
  padding: 20px 0 10px;
  .info-container {
    width: fit-content;
    margin: auto;
    .main-info {
      height: 20px;
      width: fit-content;
      box-sizing: border-box;
      line-height: 14px;
      font-size: 14px;
      text-align: center;
      letter-spacing: 0.2px;
      color: #888888;
      // border-bottom: 1px solid #cccccc;
    }
    .other-info {
      height: 20px;
      color: #999999;
      font-size: 12px;
      .link {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>