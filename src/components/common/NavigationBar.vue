<template>
  <div class="navigation-bar-container">
    <div class="navigation-bar-logo-container" @click="changeTab(-1)">
      <img class="navigation-bar-logo" src="../../assets/icons/logo.png" />
    </div>
    <div class="navigation-bar-tab-container">
      <div v-for="(tab, index) in tabs"
        class="navigation-bar-tab"
        :class="{ active: tab.selected }"
        :key="tab.key" 
        @click="changeTab(index)">
        {{tab.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          key: 'projects',
          name: 'Projects',
          selected: false
        }, {
          key: 'notes',
          name: 'Notes and Blogs',
          selected: false
        }
      ]
    }
  },
  methods: {
    changeTab: function (index) {
      for (var i in this.tabs) {
        this.tabs[i].selected = false
      }
      if(index != -1) this.tabs[index].selected = true
      this.$emit('change-tab', index + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-bar-container {
  width: 100%;
  min-width: 1300px;
  height: 70px;
  display: flex;
  z-index: 999;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  .navigation-bar-logo-container {
    cursor: pointer;
    width: 20%;
    min-width: 100px;
    max-width: 150px;
    margin-right: 50px;
    .navigation-bar-logo {
      width: 54x;
      height: 54px;
      margin: 7px 0;
      float: right;
    }
  }
  .navigation-bar-tab-container {
    flex: 1;
    overflow: hidden;
    .navigation-bar-tab {
      cursor: pointer;
      display: inline-block;
      width: fit-content;
      height: 45px;
      padding: 22px 0 0;
      margin: 0 20px;
      color: #fff;
      font-size: 1.1em;
    }
    .active {
      border-bottom: 3px solid #fff;
    }
  }
}
</style>