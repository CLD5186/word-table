<template>
  <div
    class="c-content c-container"
    :style="'min-width:'+width+'px;max-width:'+width+'px'"
    v-if="content!==''"
  >{{content}}</div>
  <div class="c-content" :style="'min-width:'+width+'px;max-width:'+width+'px'" v-else>
    <slot :slotData="node">评价项</slot>
  </div>
</template>
<script>
export default {
  props: {
    // 节点元素
    node: {
      type: Object,
      default: () => {}
    },
    content: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.c-content {
  display: flex;
  flex-grow: 1;
  border-right: 1px solid #ccc;
  margin-right: -1px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.c-container {
  padding: 8px;
}
</style>
