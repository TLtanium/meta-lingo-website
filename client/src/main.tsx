import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Load Umami analytics only when env vars are set (avoids dev warnings and malformed URL)
const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
const analyticsWebsiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
if (analyticsEndpoint && analyticsWebsiteId) {
  const script = document.createElement("script");
  script.src = `${analyticsEndpoint}/umami`;
  script.setAttribute("data-website-id", analyticsWebsiteId);
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}

createRoot(document.getElementById("root")!).render(<App />);
