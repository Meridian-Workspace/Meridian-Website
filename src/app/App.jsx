import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import SiteLayout from "../layout/SiteLayout";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const element = useRoutes(routes);

  return (
    <SiteLayout>
      {element}
      <Analytics />
    </SiteLayout>
  );
}
