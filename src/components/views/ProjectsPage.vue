<template>
  <div id="projectspage">
    <div class="side-column">
      <div class="side-column-title">
        Notes and Blogs
      </div>
      <Collapse :collapse-data="guide" :current-item="currentItem.name" @click-collapse-item="clickCollapseItem"/>
    </div>
    <div class="main-panel">
      <Article v-if="currentItem.type == 'article'" :article="currentItem"/>
    </div>
  </div>
</template>

<script>
import Collapse from '../elements/Collapse'
import Article from '../elements/Article'
import overview from '../../assets/articles/projects/remotecontroller/overview'
import checklist from '../../assets/articles/projects/remotecontroller/checklist'
import basicimplementation from '../../assets/articles/projects/remotecontroller/basicimplementation'
export default {
  components: {
    Collapse,
    Article
  },
  data() {
    return {
      guide: {
        title: 'Universal Remote Controller',
        items: [{
          key: 'overview',
          index: 0,
          name: 'Overview'
        },
        {
          key: 'checklist',
          index: 1,
          name: 'Checklist'
        },
        {
          key: 'basicimplementation',
          index: 2, 
          name: 'Basic Implementation'
        }]
      },
      articleList: {
        overview: overview,
        checklist: checklist,
        basicimplementation: basicimplementation
      },
      currentItem: overview
    }
  },
  mounted: function () {
    const files = require.context('../../assets/articles/projects', true, /\.js$/).keys()
    console.log(files)
  },
  methods: {
    clickCollapseItem: function (item) {
      this.currentItem = this.articleList[item.key]
    }
  }
}
</script>

<style lang="scss" scoped>
#projectspage {
  width: 100%;
  height: calc(100vh-80px);
  min-width: 1300px;
  min-height: 900px;
  margin-top: 80px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  display: flex;
  flex-direction: row;
  .side-column {
    width: 270px;
    height: calc(100vh-80px);
    padding-top: 20px;
    box-sizing: border-box;
    .side-column-title {
      cursor: default;
      height: 70px;
      width: 80%;
      margin: 0 10%;
      padding: 0 10px;
      box-sizing: border-box;
      line-height: 70px;
      font-size: 15px;
      font-weight: bold;
      color: #777777;
      text-align: right;
    }
  }
  .main-panel {
    flex: 1;
    height: calc(100vh-80px);
    box-sizing: border-box;
    padding: 50px 100px;
    overflow: scroll;
  }
}
</style>