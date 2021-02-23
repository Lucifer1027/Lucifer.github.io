<template>
  <div class="article-body">
    <div class="article-title">
      {{article.title}}
    </div>
    <div v-for="item in article.body" :key="item.key" class="article-paragraph">
        <div v-if="item.type=='title'" class="paragraph-title">{{item.val}}</div>
        <div v-if="item.type=='text'" class="paragraph-body-text">{{item.val}}</div>
        <div v-if="item.type=='code'" class="code-block">
          <div v-highlight>
            <pre :class="item.lang" style="box-sizing: border-box; width: 100%;">
              <code>
                {{item.val}}
              </code>
            </pre>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    article: Object
  }
}
</script>

<style lang="scss" scoped>
.article-body {
  width: 100%;
  height: fit-content;
  .article-title {
    height: 50px;
    width: 100%;
    line-height: 50px;
    margin: 25px 0 45px;
    font-size: 26px;
    font-weight: bold;
    color: #777777;
    text-overflow: ellipsis;
    display: -webkit-box;
    /*! autoprefixer: off */
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .article-paragraph {
    width: 100%;
    height: fit-content;
    padding-bottom: 5px;
    .paragraph-title {
      margin: 20px 0;
      width: 100%;
      height: fit-content;
      line-height: 20px;
      color: #777777;
      font-size: 18px;
      font-weight: bold;
    }
    .code-block {
      padding: 0 20px;
      margin: 20px 0;
    }
    .paragraph-body-text {
      line-height: 35px;
      color: #777777;
      font-size: 16px;
      margin: 10px 0;
      width: 100%;
      height: fit-content;
      box-sizing: border-box;
      padding: 0 20px;
    }
  }
}
</style>