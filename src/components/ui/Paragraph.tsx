import React from "react";

const Paragraph = ({ text, size = "medium" }: { text: string; size: "small" | "medium" | "large" }) => (
  <p style={{ 
    fontSize: size === "small" ? "0.9rem" : size === "large" ? "1.2rem" : "1rem",
    lineHeight: "1.6"
  }}>{text}</p>
);

export default Paragraph; 