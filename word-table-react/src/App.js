import React from "react";
import "./App.css";
import WordTree from "./views/WordTree";
import WordTable from "./views/WordTable";
import data from "./mock/mock";

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <WordTree treeData={data.data} />
      <div className="c-tree-table">
        <WordTable node={data.data}/>
      </div>
    </div>
  );
};

export default App;
