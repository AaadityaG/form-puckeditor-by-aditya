import React from "react";

const Container = ({ maxWidth, children }: { maxWidth: "small" | "medium" | "large"; children: React.ReactNode }) => (
  <div style={{
    maxWidth: maxWidth === "small" ? "800px" : maxWidth === "large" ? "1400px" : "1200px",
    margin: "0 auto",
    padding: "0 20px"
  }}>
    {children}
  </div>
);

export default Container; 