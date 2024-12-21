import React from "react";

const PreviewPane = ({ html }) => {
  return (
    <div
      className="preview-pane"
      dangerouslySetInnerHTML={{ __html: html }}
      style={{
        backgroundColor: "#fff",
        color: "#333",
        padding: "16px",
        borderRadius: "8px",
      }}
    />
  );
};

export default PreviewPane;
