import type { ReactElement } from "react";
import Button from "./Button";

const Card = ({ 
  title, 
  description, 
  imageUrl, 
  buttonText, 
  buttonUrl,
  elevation 
}: { 
  title: string; 
  description: string; 
  imageUrl: string;
  buttonText?: string;
  buttonUrl?: string;
  elevation: "low" | "medium" | "high";
}): ReactElement => (
  <div style={{ 
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "20px",
    maxWidth: "400px",
    boxShadow: elevation === "low" ? "0 2px 4px rgba(0,0,0,0.1)" : 
               elevation === "medium" ? "0 4px 8px rgba(0,0,0,0.1)" : 
               "0 8px 16px rgba(0,0,0,0.1)"
  }}>
    <img src={imageUrl} alt={title} style={{ 
      width: "100%", 
      height: "200px", 
      objectFit: "cover", 
      borderRadius: "8px" 
    }} />
    <h3 style={{ marginTop: "16px", fontSize: "1.5rem" }}>{title}</h3>
    <p style={{ color: "#666", marginTop: "8px" }}>{description}</p>
    {buttonText && buttonUrl && (
      <Button text={buttonText} url={buttonUrl} variant="primary" size="medium" />
    )}
  </div>
);

export default Card; 