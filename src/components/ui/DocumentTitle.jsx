import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_TITLE = "Meridian";

const TITLE_BY_PATH = {
  "/": `${DEFAULT_TITLE} | Home`,
  "/services": `${DEFAULT_TITLE} | Services`,
  "/about": `${DEFAULT_TITLE} | About`,
  "/contactus": `${DEFAULT_TITLE} | Contact`,
};

export default function DocumentTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = TITLE_BY_PATH[pathname] ?? DEFAULT_TITLE;
  }, [pathname]);

  return null;
}
