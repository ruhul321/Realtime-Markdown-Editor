import React, { useState, useEffect } from "react";
import axios from "axios";
import MarkdownEditor from "./components/MarkdownEditor";
import PreviewPane from "./components/PreviewPane";
import "./index.css";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");

  useEffect(() => {
    if (!markdown) {
      setHtml("");
      return;
    }

    const convertMarkdown = async () => {
      try {
        const response = await axios.post("http://localhost:5000/convert", {
          markdown,
        });
        setHtml(response.data.html);
      } catch (error) {
        console.error("Error converting Markdown to HTML", error);
      }
    };

    convertMarkdown();
  }, [markdown]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Real-Time Markdown Editor</h1>
      </header>
      <div className="editor-preview-container">
        <div className="editor-container">
          <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
        </div>
        <div className="preview-container">
          <PreviewPane html={html} />
        </div>
      </div>
    </div>
  );
};

export default App;
