import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import SiteLayout from "../layout/SiteLayout";

export default function App() {
  const element = useRoutes(routes);

  return <SiteLayout>{element}</SiteLayout>;
}
