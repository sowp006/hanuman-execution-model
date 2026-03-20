import { useEffect } from "react";

export function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    const trigger = () => {
      const elements = document.querySelectorAll(".section-fade:not(.visible)");
      for (const el of elements) {
        observer.observe(el);
      }
    };

    trigger();
    // Re-trigger on dynamic content
    const mo = new MutationObserver(trigger);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);
}
