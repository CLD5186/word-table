<template>
  <div class="word-tree">
    <el-tree
      :data="treeData"
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :props="defaultProps"
      default-expand-all
      highlight-current
      :expand-on-click-node="false"
    >
      <span slot-scope="{ node, data }" class="row-title">
        <span class="text-overflow" style>{{ node.label }}</span>
        <span style="font-size:20px;padding-right:8px;">
          <i class="el-icon-edit" @click.stop="() => editHandle(data)" />
          <i class="el-icon-remove-outline" @click.stop="() => removeHandle(node, data)" />
          <i class="el-icon-circle-plus-outline" @click.stop="() => appendHandle(data)" />
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script>
export default {
  props: {
    treeData: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    // 编辑
    editHandle(data) {
      this.$parent.editHandle(data);
    },
    // 删除
    removeHandle(node, data) {
      this.$parent.removeHandle(node, data);
    },
    // 添加
    appendHandle(data) {
      this.$parent.appendHandle(data);
    }
  }
};
</script>
<style scoped>
.word-tree {
  position: absolute;
  top: 90px;
  left: 2.5%;
  right: 2.5%;
  min-height: 680px;
  background: #fff;
  margin-bottom: 20px;
  padding: 8px;
  width: 300px;
  border: 1px solid #eee;
}

.row-title {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.text-overflow {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
}
</style>