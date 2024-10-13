// src/utils/highlight.ts
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";

// Configure highlight.js with the desired languages
hljs.configure({
  languages: ["javascript", "jsx", "sh", "bash", "html", "scss", "css", "json"],
});

// Declare global interface for window
declare global {
  interface Window {
    hljs: typeof hljs; // Ensure hljs type matches the expected type
  }
}

// Assign hljs to the window object if it's in the browser environment
if (typeof window !== "undefined") {
  window.hljs = hljs as typeof window.hljs; // Use type assertion
}

export default hljs; // Export hljs for use in other modules
