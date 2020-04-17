import React from 'react';
import './WordTree.css'
import { Tree } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const { TreeNode } = Tree;

const WordTree = (props) => {

  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const titleRow = (title) => (
    <div style={{ display: "flex", justifyContent: 'space-between' }}>
      <span>{title}</span>
      <span style={{ marginLeft: '80px' }}>
        <EditOutlined />
        <DeleteOutlined />
        <PlusOutlined />
      </span>
    </div>
  )

  const childrenTreeNode = (data) => {
    return data.map(item => <TreeNode title={titleRow(item.title)} key={item.key}>{
      childrenTreeNode(item.children)
    }</TreeNode>)
  }

  return (
    <Tree
      showLine
      defaultExpandAll
      onSelect={onSelect}
    >
      {childrenTreeNode(props.treeData)}
    </Tree>
  )
}


export default WordTree;