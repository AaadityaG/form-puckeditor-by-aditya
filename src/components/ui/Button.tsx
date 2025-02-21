import type { ReactElement } from "react";

const Button = ({ text, variant = "primary", url, size }: { 
  text: string; 
  variant: "primary" | "secondary" | "outline"; 
  url: string;
  size: "small" | "medium" | "large";
}): ReactElement => (
  <a href={url} style={{
    padding: size === "small" ? "8px 16px" : size === "large" ? "16px 32px" : "12px 24px",
    borderRadius: "6px",
    textDecoration: "none",
    display: "inline-block",
    fontSize: size === "small" ? "14px" : size === "large" ? "18px" : "16px",
    backgroundColor: variant === "primary" ? "#007bff" : variant === "secondary" ? "#6c757d" : "transparent",
    color: variant === "outline" ? "#007bff" : "white",
    border: variant === "outline" ? "2px solid #007bff" : "none",
    transition: "all 0.3s ease"
  }}>
    {text}
  </a>
);

export default Button; 