import React from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-markdown";
import "prismjs/themes/prism-okaidia.css";

const highlightWithPrism = (code) =>
  Prism.highlight(code, Prism.languages.markdown, "markdown");

const MarkdownEditor = ({ markdown, setMarkdown }) => {
  return (
    <div className="markdown-editor-wrapper">
      <Editor
        value={markdown}
        onValueChange={setMarkdown}
        highlight={highlightWithPrism}
        padding={16}
        className="markdown-editor"
        placeholder="Type your Markdown here..."
      />
    </div>
  );
};

export default MarkdownEditor;
