import { Puck } from "@measured/puck";
import "@measured/puck/dist/index.css";

import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import Button from "./ui/Button";
import Image from "./ui/Image";
import Video from "./ui/Video";
import Container from "./ui/Container";
import Grid from "./ui/Grid";
import Card from "./ui/Card";
import Testimonial from "./ui/Testimonial";
import Form from "./ui/Form";

// Configure your components
export const config = {
  components: {
    Heading: {
      render: Heading,
      fields: {
        text: { type: "text" as const },
        level: { 
          type: "select" as const,
          options: [
            { label: "H1", value: "h1" },
            { label: "H2", value: "h2" },
            { label: "H3", value: "h3" }
          ]
        },
        color: { type: "text" as const }
      }
    },
    Paragraph: {
      render: Paragraph,
      fields: {
        text: { type: "textarea" as const },
        size: {
          type: "select" as const,
          options: [
            { label: "Small", value: "small" },
            { label: "Medium", value: "medium" },
            { label: "Large", value: "large" }
          ]
        }
      }
    },
    Button: {
      render: Button,
      fields: {
        text: { type: "text" as const },
        variant: { 
          type: "select" as const,
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
            { label: "Outline", value: "outline" }
          ]
        },
        size: {
          type: "select" as const,
          options: [
            { label: "Small", value: "small" },
            { label: "Medium", value: "medium" },
            { label: "Large", value: "large" }
          ]
        },
        url: { type: "text" as const }
      }
    },
    Image: {
      render: Image,
      fields: {
        src: { type: "text" as const },
        alt: { type: "text" as const },
        width: { type: "number" as const },
        height: { type: "number" as const },
        rounded: { 
          type: "select" as const,
          options: [
            { label: "Yes", value: "true" },
            { label: "No", value: "false" }
          ]
        }
      }
    },
    Video: {
      render: Video,
      fields: {
        url: { type: "text" as const },
        width: { type: "number" as const },
        autoplay: { 
          type: "select" as const,
          options: [
            { label: "Yes", value: "true" },
            { label: "No", value: "false" }
          ]
        }
      }
    },
    Card: {
      render: Card,
      fields: {
        title: { type: "text" as const },
        description: { type: "textarea" as const },
        imageUrl: { type: "text" as const },
        buttonText: { type: "text" as const },
        buttonUrl: { type: "text" as const },
        elevation: {
          type: "select" as const,
          options: [
            { label: "Low", value: "low" },
            { label: "Medium", value: "medium" },
            { label: "High", value: "high" }
          ]
        }
      }
    },
    Testimonial: {
      render: Testimonial,
      fields: {
        quote: { type: "textarea" as const },
        author: { type: "text" as const },
        role: { type: "text" as const },
        avatarUrl: { type: "text" as const }
      }
    },
    Container: {
      render: Container,
      fields: {
        maxWidth: {
          type: "select" as const,
          options: [
            { label: "Small", value: "small" },
            { label: "Medium", value: "medium" },
            { label: "Large", value: "large" }
          ]
        }
      }
    },
    Grid: {
      render: Grid,
      fields: {
        columns: { type: "number" as const },
        gap: { type: "number" as const }
      }
    },
    Form: {
      render: Form,
      fields: {
        submitText: { type: "text" as const },
        fields: {
          type: "array" as const,
          arrayFields: {
            label: { type: "text" as const },
            type: { 
              type: "select" as const,
              options: [
                { label: "Text", value: "text" },
                { label: "Email", value: "email" },
                { label: "Number", value: "number" },
                { label: "Textarea", value: "textarea" },
                { label: "Radio", value: "radio" },
                { label: "Checkbox", value: "checkbox" },
                { label: "Select", value: "select" }
              ]
            },
            options: { 
              type: "array" as const,
              arrayFields: {
                value: { type: "text" as const }
              }
            }
          }
        }
      }
    }
  }
};

// Initial data structure
const initialData = {
  content: [],
  root: { title: "My Page" }
};

export default function Editor() {
  return (
    <Puck
      config={config}
      data={initialData}
      onPublish={(data) => {
        console.log("Published:", data);
        // Handle saving the data
      }}
    />
  );
} 