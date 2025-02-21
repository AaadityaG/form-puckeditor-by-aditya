import React from "react";

const Heading = ({ text, level = "h1", color }: { text: string; level: "h1" | "h2" | "h3"; color?: string }) => {
  return React.createElement(level, { style: { color } }, text);
};

export default Heading; 