<template>
  <div id="notespage">
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
import githubpages from '../../assets/articles/notes/frontend/githubpages'
export default {
  components: {
    Collapse,
    Article
  },
  data() {
    return {
      guide: {
        title: 'Frontend Notes',
        items: [{
          key: 'githubpages',
          index: 0,
          name: 'Using Github Pages to deploy your Vue project'
        }]
      },
      articleList: {
        githubpages: githubpages
      },
      currentItem: githubpages
    }
  },
  methods: {
    clickCollapseItem: function (item) {
      this.currentItem = this.articleList[item.key]
    }
  }
}
</script>

<style lang="scss" scoped>
#notespage {
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