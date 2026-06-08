import { useEffect, useState } from "react";
import {
  defaultSiteContent,
  getStoredSiteContent,
  SITE_CONTENT_EVENT,
  type SiteContent,
} from "@/data/siteContent";

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);

  useEffect(() => {
    setContent(getStoredSiteContent());

    function handleContentUpdate(event: Event) {
      const nextContent = (event as CustomEvent<SiteContent>).detail;
      setContent(nextContent ?? getStoredSiteContent());
    }

    function handleStorage(event: StorageEvent) {
      if (!event.key || event.key === "sagar-portfolio-site-content") {
        setContent(getStoredSiteContent());
      }
    }

    window.addEventListener(SITE_CONTENT_EVENT, handleContentUpdate);
    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener(SITE_CONTENT_EVENT, handleContentUpdate);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return content;
}
