<template>
  <div id="app">
    <NavigationBar 
      @change-tab="changeTab"
      :style="{'position': navBarPosition}"
    />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import NavigationBar from './components/common/NavigationBar'
import Footer from './components/common/Footer'
export default {
  name: 'App',
  components: {
    NavigationBar,
    Footer
  },
  data() {
    return {
      navBarPosition: 'absolute',
    }
  },
  mounted() {
    // handleScroll is the callback function of the scroll event
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // get scrolled distance
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // check if the scrolled distance has exceeded the height of the header
      if (scrollTop != 0) {
        this.navBarPosition = 'fixed'
      } else {
        this.navBarPosition = 'absolute'
      }
    },
    changeTab: function (index) {
      switch (index) {
        case 1:
          this.$router.push('projects')
          break
        case 2:
          this.$router.push('notes')
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../node_modules/vue-code-highlight/themes/prism.css';
  @import '../node_modules/vue-code-highlight/themes/window.css';
  #app {
    font-family: source sans pro,helvetica neue,Helvetica,Arial,sans-serif;
    font-feature-settings: 'dlig' 1,'liga' 1,'lnum' 1,'kern' 1;
    font-style: normal;
    margin-top: 0;
  }
  .message {
    width: 200px;
  }
</style>
