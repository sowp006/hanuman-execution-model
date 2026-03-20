import { ChevronRight, Menu, X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import CaseStudyPage from "./pages/CaseStudyPage";
import ConclusionPage from "./pages/ConclusionPage";
import FrameworkPage from "./pages/FrameworkPage";
import HomePage from "./pages/HomePage";
import JourneyPage from "./pages/JourneyPage";
import StoryPage from "./pages/StoryPage";
import WhyItMattersPage from "./pages/WhyItMattersPage";
import { type PageId, RouterProvider, useRouter } from "./router";

const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "story", label: "Story" },
  { id: "journey", label: "Journey" },
  { id: "framework", label: "Framework" },
  { id: "case-study", label: "Case Study" },
  { id: "why", label: "Why It Matters" },
  { id: "conclusion", label: "Conclusion" },
];

function Nav() {
  const { currentPage, navigate } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: PageId) => {
    navigate(id);
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-xs"
      data-ocid="nav.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="flex items-center gap-2.5 shrink-0"
          data-ocid="nav.link"
        >
          <div className="w-9 h-9 rounded-full gold-bg flex items-center justify-center shadow-gold">
            <span className="text-white text-sm font-bold">ॐ</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-foreground leading-none">
              HEM
            </div>
            <div className="text-[10px] text-muted-foreground leading-none mt-0.5">
              Hanuman Execution Model
            </div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => handleNav(link.id)}
              data-ocid="nav.link"
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                currentPage === link.id
                  ? "gold-text nav-link-active"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => handleNav("framework")}
          data-ocid="nav.primary_button"
          className="hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-semibold border-2 gold-border gold-text rounded-full hover:gold-bg hover:text-white transition-all duration-200"
        >
          Explore Framework
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-muted-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => handleNav(link.id)}
              data-ocid="nav.link"
              className={`text-sm font-medium text-left py-2.5 px-3 rounded-lg transition-colors ${
                currentPage === link.id
                  ? "gold-text bg-accent"
                  : "text-foreground hover:bg-accent/50"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function Footer() {
  const { navigate } = useRouter();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-full gold-bg flex items-center justify-center">
                <span className="text-white text-xs font-bold">ॐ</span>
              </div>
              <span className="font-bold text-foreground">
                Hanuman Execution Model
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              A Dharmic Framework for Project Execution in Technology. Ancient
              Wisdom for Modern Engineering.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Navigate
            </p>
            <div className="grid grid-cols-2 gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => navigate(link.id)}
                  data-ocid="nav.link"
                  className="text-sm text-muted-foreground hover:gold-text text-left transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-xs text-muted-foreground">
          <span>
            &copy; {year} Hanuman Execution Model. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

function PageContent() {
  const { currentPage } = useRouter();

  const pageMap: Record<PageId, React.ReactElement> = {
    home: <HomePage />,
    story: <StoryPage />,
    journey: <JourneyPage />,
    framework: <FrameworkPage />,
    "case-study": <CaseStudyPage />,
    why: <WhyItMattersPage />,
    conclusion: <ConclusionPage />,
  };

  return (
    <main
      key={currentPage}
      className="min-h-screen animate-fade-up"
      style={{ animationDuration: "0.4s" }}
    >
      {pageMap[currentPage]}
    </main>
  );
}

function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <PageContent />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Layout />
    </RouterProvider>
  );
}
