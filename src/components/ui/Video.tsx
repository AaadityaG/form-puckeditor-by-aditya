import React from "react";

const Video = ({ url, width, autoplay }: { 
  url: string; 
  width: number; 
  autoplay: string;
}) => (
  <video 
    style={{ maxWidth: `${width}px`, width: "100%" }}
    controls
    autoPlay={autoplay === "true"}
    loop
    muted={autoplay === "true"}
  >
    <source src={url} type="video/mp4" />
  </video>
);

export default Video; 