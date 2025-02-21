import React from "react";

const Testimonial = ({ quote, author, role, avatarUrl }: {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}) => (
  <div style={{
    padding: "24px",
    borderRadius: "12px",
    backgroundColor: "#f8f9fa",
    maxWidth: "500px"
  }}>
    <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
      <img 
        src={avatarUrl} 
        alt={author} 
        style={{ 
          width: "60px", 
          height: "60px", 
          borderRadius: "50%",
          marginRight: "16px"
        }} 
      />
      <div>
        <h4 style={{ margin: 0 }}>{author}</h4>
        <p style={{ margin: 0, color: "#666" }}>{role}</p>
      </div>
    </div>
    <blockquote style={{ 
      margin: 0,
      fontSize: "1.1rem",
      fontStyle: "italic",
      color: "#333"
    }}>
      "{quote}"
    </blockquote>
  </div>
);

export default Testimonial; 