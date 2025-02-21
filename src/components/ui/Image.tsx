import type { ReactElement } from "react";

const Image = ({ src, alt, width, height, rounded }: { 
  src: string; 
  alt: string; 
  width: number;
  height?: number;
  rounded?: string;
}): ReactElement => (
  <img 
    src={src} 
    alt={alt} 
    style={{ 
      maxWidth: `${width}px`,
      height: height ? `${height}px` : "auto",
      width: "100%",
      borderRadius: rounded === "true" ? "8px" : "0",
      objectFit: "cover"
    }} 
  />
);

export default Image; 