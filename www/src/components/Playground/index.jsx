import React, { useState, useEffect } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import parserEstree from "prettier/plugins/estree";

async function formatCode(code = "") {
  return prettier.format(code, {
    parser: "babel",
    plugins: [parserBabel, parserEstree],
  });
}

function Playground({ children, height = 340 }) {
  const [formattedCode, setFormattedCode] = useState("");

  useEffect(() => {
    formatCode(`
      import "./style.css";
      import "bootstrap/dist/css/bootstrap.min.css";
      ${children}
    `).then(setFormattedCode);
  }, [children]);

  if (!formattedCode) {
    return null;
  }

  return (
    <Sandpack
      theme="auto"
      template="react"
      customSetup={{
        dependencies: {
          react: "^19.2.0",
          "react-dom": "^19.2.0",
          bootstrap: "5.1.3",
          "@promethey/bsui": "1.2.1",
        },
      }}
      files={{
        "/App.js": {
          code: formattedCode,
          readOnly: false,
        },
        "/style.css": {
          code: `body { padding: 1rem; }`,
          readOnly: false,
        },
      }}
      options={{
        showTabs: true,
        showNavigator: false,
        showLineNumbers: true,
        editorHeight: height,
      }}
    />
  );
}

export default Playground;
