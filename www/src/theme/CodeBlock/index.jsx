import React from "react";
import Playground from "@site/src/components/Playground";

export default function CodeBlockWrapper(props) {
  const { children, className, metastring } = props;

  const language = className?.replace("language-", "");

  const isLive = metastring?.includes("live");

  const code =
    typeof children === "string" ? children : (children?.props?.children ?? "");

  if (language === "jsx" && isLive) {
    return <Playground>{code}</Playground>;
  }

  return (
    <pre className={className}>
      <code>{children}</code>
    </pre>
  );
}
