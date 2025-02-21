import { Render } from "@measured/puck";
import "@measured/puck/dist/index.css";
import { config } from "./Editor"; // Import your config

export default function PageRender({ data }: { data: any }) {
  return <Render config={config} data={data} />;
} 