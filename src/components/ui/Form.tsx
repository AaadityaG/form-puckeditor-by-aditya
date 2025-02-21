import React from "react";

type FormFieldType = "text" | "email" | "number" | "radio" | "checkbox" | "select" | "textarea";

interface FormField {
  label: string;
  type: FormFieldType;
  options?: string[];
}

const FormField = ({ field }: { field: FormField }) => {
  switch (field.type) {
    case "text":
    case "email":
    case "number":
      return (
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>{field.label}</label>
          <input type={field.type} style={{ 
            width: "100%",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ddd"
          }} />
        </div>
      );
    case "textarea":
      return (
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>{field.label}</label>
          <textarea style={{ 
            width: "100%",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ddd",
            minHeight: "100px"
          }} />
        </div>
      );
    case "radio":
      return (
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>{field.label}</label>
          {field.options?.map((option, i) => (
            <div key={i}>
              <input type="radio" name={field.label} value={option} />
              <label style={{ marginLeft: "0.5rem" }}>{option}</label>
            </div>
          ))}
        </div>
      );
    case "checkbox":
      return (
        <div style={{ marginBottom: "1rem" }}>
          <input type="checkbox" />
          <label style={{ marginLeft: "0.5rem" }}>{field.label}</label>
        </div>
      );
    case "select":
      return (
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>{field.label}</label>
          <select style={{ 
            width: "100%",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ddd"
          }}>
            {field.options?.map((option, i) => (
              <option key={i} value={option}>{option}</option>
            ))}
          </select>
        </div>
      );
    default:
      return null;
  }
};

const Form = ({ fields = [], submitText = "Submit" }: { 
  fields: FormField[];
  submitText: string;
}) => (
  <form style={{ 
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    maxWidth: "500px"
  }}>
    {fields.map((field, index) => (
      <FormField key={index} field={field} />
    ))}
    <button type="submit" style={{
      backgroundColor: "#007bff",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer"
    }}>
      {submitText}
    </button>
  </form>
);

export default Form; 