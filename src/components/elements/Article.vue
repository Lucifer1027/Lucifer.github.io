<template>
  <div class="article-body">
    <div class="article-title">
      {{article.title}}
    </div>
    <div v-for="item in article.paragraphs" :key="item.key" class="article-paragraph">
        <div class="paragraph-title">
          {{item.title}}
        </div>
        <div v-for="paragraph in item.body" :key="paragraph.key" class="paragraph-body">
          {{paragraph}}
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
    .paragraph-body {
      margin: 20px 0;
      width: 100%;
      height: fit-content;
      box-sizing: border-box;
      padding: 0 20px;
      line-height: 35px;
      color: #777777;
      font-size: 16px;
    }
  }
}
</style>