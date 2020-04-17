<template>
  <div id="app">
    <WordTree :treeData="treeData" />
    <div class="word-table">
      <WoldTable :node="treeData" rightCellWidth="100" border />
    </div>
  </div>
</template>

<script>
import WoldTable from "./views/word-table";
import WordTree from "./views/word-tree";
import data from "./mock/mock";

let id = 1000;
export default {
  name: "App",
  components: {
    WoldTable,
    WordTree
  },
  data() {
    return {
      treeData: JSON.parse(JSON.stringify(data.data))
    };
  },
  methods: {
    // 编辑
    editHandle(data) {
      window.alert(`我是编辑操作,我的id是${data.id}`);
    },
    // 删除
    removeHandle(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },
    // 添加
    appendHandle(data) {
      const newChild = { id: id++, label: `我是新增内容${id}`, children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    }
  },
  mounted() {}
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.word-table {
  width: 800px;
  margin-left: 500px;
}
</style>
