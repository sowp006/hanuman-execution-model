import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

export type PageId =
  | "home"
  | "story"
  | "journey"
  | "framework"
  | "case-study"
  | "why"
  | "conclusion";

interface RouterContextValue {
  currentPage: PageId;
  navigate: (page: PageId) => void;
}

const RouterContext = createContext<RouterContextValue>({
  currentPage: "home",
  navigate: () => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageId>("home");

  const navigate = useCallback((page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <RouterContext.Provider value={{ currentPage, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}
