import React from "react";
import ReactDom from "react-dom";

import App from "./App";

it("shows a comment box", () => {
  const div = document.createElement("div");
  ReactDom.render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});
