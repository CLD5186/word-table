import React from 'react'
import './WordTable.css'

// 只展示内容
const CContent = ({ content, rightWidth, leftWidth, children }) => content !== undefined
  ? <div className='c-content c-container' style={{ maxWidth: leftWidth + 'px' }}>{content}</div>
  : <div className="c-content" style={{ minWidth: rightWidth + 'px', maxWidth: rightWidth + 'px' }}>{children}</div>


const WordTable = ({ node }) => {
  return node.map(item => (
    <div className="c-row" key={item.key}>
      {
        item.children.length > 0
          ?
          <>
            <CContent content={item.title} leftWidth={100} />
            <div style={{ width: '100%' }}>
              <WordTable node={item.children} />
            </div>
          </>
          :
          <>
            <CContent content={item.title} />
            <CContent rightWidth={100}>
              <div>自己定义内容</div>
            </CContent>
          </>
      }
    </div>
  ))
}


export default WordTable;
