const express = require("express");
const cors = require("cors");
const { marked } = require("marked");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route to handle Markdown to HTML conversion
app.post("/convert", (req, res) => {
  const { markdown } = req.body;
  if (!markdown)
    return res.status(400).json({ error: "Markdown content required" });

  const html = marked(markdown);
  res.json({ html });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
