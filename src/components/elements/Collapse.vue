<template>
  <div class="collapse-block">
    <div class="collapse-title">
      {{collapseData.title}}
    </div>
    <div v-for="item in collapseData.items" 
        class="collapse-item"
        :key="item.key"
        :class="[item.key == currentItem ? 'collapse-item-active' : '']" 
        @click="$emit('click-collapse-item', item)">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    collapseData: Object,
    currentItem: String,
  },
  data() {
    return {
      currentIndex: -1
    }
  }
}
</script>

<style lang="scss" scoped>
.collapse-block {
  height: fit-content;
  width: 80%;
  margin: 0 10%;
  padding: 0 10px 20px;
  box-sizing: border-box;
  .collapse-title {
    cursor: default;
    height: 50px;
    width: 100%;
    line-height: 50px;
    font-size: 13px;
    font-weight: bold;
    color: #777777;
    text-align: right;
    border-top: 1px solid #dddddd;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .collapse-item {
    cursor: pointer;
    height: fit-content;
    width: 100%;
    box-sizing: border-box;
    line-height: 18px;
    font-size: 12px;
    // font-weight: bold;
    margin: 10px 0;
    color: #aaaaaa;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /*! autoprefixer: off */
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: inline-block;
  }
  .collapse-item-active {
    color: rgb(113, 146, 255);
  }
}
</style>