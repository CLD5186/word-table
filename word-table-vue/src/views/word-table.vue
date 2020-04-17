<template>
  <c-content :class="border?'c-tree-table':''">
    <div class="c-row" v-for="(item,index) in node" :key="index">
      <template v-if="item.children.length>0">
        <c-content :content="item.label" :width="leftCellWidth" />
        <c-tree-table
          :node="item.children"
          :leftCellWidth="leftCellWidth"
          :rightCellWidth="rightCellWidth"
          :isShowRightCell="isShowRightCell"
        >
          <template slot-scope="slotProps">
            <slot :slotData="slotProps.slotData"></slot>
          </template>
        </c-tree-table>
      </template>
      <template v-else>
        <c-content :content="item.label" />
        <c-content :width="rightCellWidth" :node="item" v-if="isShowRightCell">
          <slot :slotData="item"></slot>
        </c-content>
      </template>
    </div>
  </c-content>
</template>
<script>
import CContent from "../components/c-content";

export default {
  name: "c-tree-table",
  props: {
    // 节点元素
    node: {
      type: Array,
      default: () => []
    },
    // 左侧单元格宽度
    leftCellWidth: {
      default: ""
    },
    // 右侧单元格宽度
    rightCellWidth: {
      default: ""
    },
    // 是否拥有边框
    border: {
      type: Boolean,
      default: false
    },
    // 是否展示最右侧单元格
    isShowRightCell: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  components: {
    CContent
  }
};
</script>
<style scoped>
.c-tree-table {
  border: 1px solid #ccc;
  margin-bottom: -1px;
}
.c-row {
  display: flex;
  border-bottom: 1px solid #ccc;
  margin-bottom: -1px;
  width: 100%;
  height: 100%;
}
</style>
