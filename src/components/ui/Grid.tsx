import React from "react";

const Grid = ({ columns, gap, children }: { 
  columns: number; 
  gap: number;
  children: React.ReactNode 
}) => (
  <div style={{
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`
  }}>
    {children}
  </div>
);

export default Grid; 