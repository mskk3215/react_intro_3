import React from "react";
import ReactDom from "react-dom";
import App from "./App";

//画面に反映させる appをコンポネートとしてレンダリングするという意味
ReactDom.render(<App />, document.getElementById("root"));
