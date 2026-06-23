import { useState, useEffect, FormEvent, MouseEvent } from "react";
import { Heart } from "lucide-react";
import { WaveBackground } from "./components/WaveBackground";
import {
  olData,
  alData,
  afData,
  bizData,
  itcData,
  boData,
  seData,
  webData,
  graphicsData,
  networkData,
  cyberData,
  aiData,
  marketingData,
  officeData,
  gamedevData,
  langEngData,
  langEastData,
  langEuroData,
  nvqEngData,
  nvqHospData,
  nvqCreativeData,
  hotelAccomData,
  hotelBakeryData,
  hotelBarBeverageData,
  hotelCakeDecData,
  hotelCommCookeryData,
  hotelProfCookeryData,
  hotelCulinaryCookeryData,
  hotelFnBServiceData,
  hotelFrontOfficeData,
  hotelGuestRelationsData,
  hotelLeadershipData,
  hotelMgmtData,
  hotelHousekeepingData,
  hotelKitchenMgmtData,
  hotelPastryBakeryData,
  hotelResortMgmtData,
  hotelRestaurantBanquetData,
  hotelTourGuidingData,
  hotelTourismMgmtData,
  hotelTourismTravelData,
  hotelTravelTourismData,
} from "./data";
import { CourseDetail, PathInfo } from "./types";

export default function App() {
  // Navigation State History Stack for perfect Back Button navigation
  const [viewHistory, setViewHistory] = useState<string[]>(["home"]);
  const activeView = viewHistory[viewHistory.length - 1] || "home";

  // Auth User State
  const [user, setUser] = useState<{ name: string; email: string } | null>(() => {
    try {
      const saved = localStorage.getItem("cpf_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Theme State ("dark" | "light")
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("ds_theme");
    return saved === "light" ? "light" : "dark";
  });

  // Login Form Inputs
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  // Selected Detail for detail pages (olData, alData)
  const [detailRef, setDetailRef] = useState<{ type: "ol" | "al"; key: string } | null>(null);

  // Saved career paths state with localStorage persistence
  const [savedPaths, setSavedPaths] = useState<{ type: "ol" | "al"; key: string }[]>(() => {
    try {
      const saved = localStorage.getItem("ds_saved_paths");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("ds_saved_paths", JSON.stringify(savedPaths));
  }, [savedPaths]);

  // Toggle saving/unsaving of career paths
  const toggleSavePath = (type: "ol" | "al", key: string, e: MouseEvent<any>) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    setSavedPaths((prev) => {
      const exists = prev.some((p) => p.type === type && p.key === key);
      if (exists) {
        return prev.filter((p) => !(p.type === type && p.key === key));
      } else {
        return [...prev, { type, key }];
      }
    });
  };

  // Dedicated navigation for saved path cards inside Dashboard
  const handleSavedPathClick = (type: "ol" | "al", key: string) => {
    if (type === "ol" && ["it", "languages", "nvq", "commerce", "hotel"].includes(key)) {
      navigateTo(key);
    } else {
      setDetailRef({ type, key });
      navigateTo("detail");
    }
  };

  // Accordion Expanded Rows: stores key formatted as "prefix-index"
  const [expandedKeys, setExpandedKeys] = useState<Record<string, boolean>>({});

  // Typewriter Phrases Animation State
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const typewriterPhrases = [
    "Explore career options tailored for Sri Lankan students after O/Levels and A/Levels",
    "Discover the right course for your strengths and interests",
    "Your future starts with the right choice today",
    "From O/Levels to a career you love — we'll guide you there",
  ];

  // Apply Theme on mount and state changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem("ds_theme", theme);
  }, [theme]);

  // Adjust routing state automatically if user is authenticated
  useEffect(() => {
    if (user && activeView === "home") {
      setViewHistory(["dashboard"]);
    }
  }, [user]);

  // Typewriter Animation loops
  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        timer = setTimeout(() => {
          setTypewriterText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 38);
      } else {
        // Pause at completion before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2400);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setTypewriterText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 18);
      } else {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % typewriterPhrases.length);
        timer = setTimeout(() => {}, 420);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  // Routing navigation helpers
  const navigateTo = (page: string) => {
    setViewHistory((prev) => [...prev, page]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateBack = () => {
    setViewHistory((prev) => {
      if (prev.length <= 1) return ["home"];
      return prev.slice(0, prev.length - 1);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    setViewHistory([user ? "dashboard" : "home"]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Auth Operations
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const name = usernameInput.trim() || "Student";
    const email = emailInput.trim();
    if (!email) return;

    const loggedUser = { name, email };
    setUser(loggedUser);
    localStorage.setItem("cpf_user", JSON.stringify(loggedUser));
    setViewHistory(["dashboard"]);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("cpf_user");
    setViewHistory(["home"]);
  };

  // Toggle Accordion row helper
  const toggleAccordionRow = (prefix: string, index: number) => {
    const key = `${prefix}-${index}`;
    setExpandedKeys((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Dynamic Helper to fetch origin classes (like local, global, etc)
  const getOriginClass = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("global") && cat.includes("chartered")) return "chartered";
    if (
      cat.includes("global") ||
      cat.includes("academic") ||
      cat.includes("university") ||
      cat.includes("uk") ||
      cat.includes("btec") ||
      cat.includes("affiliated")
    )
      return "global";
    if (cat.includes("local") && cat.includes("chartered")) return "chartered";
    return "local";
  };

  // Render Category Rows (Accordions) with chevron rotate/smooth toggle heights
  const renderCareerAccordions = (dataList: CourseDetail[], prefix: string) => {
    return (
      <div className="ql-list">
        {dataList.map((item, idx) => {
          const key = `${prefix}-${idx}`;
          const isOpen = !!expandedKeys[key];
          const originLabel = item.category || item.origin || "";
          const originClass = getOriginClass(originLabel);

          return (
            <div className="ql-item" key={key} style={{ animationDelay: `${idx * 0.05}s` }}>
              <button className="ql-header" onClick={() => toggleAccordionRow(prefix, idx)}>
                <div className="ql-left">
                  <span className="ql-name">{item.name}</span>
                  <span className="ql-full">{item.full}</span>
                </div>
                <div className="ql-right">
                  <span className={`ql-origin ${originClass}`}>{originLabel}</span>
                  <span
                    className="ql-chevron inline-block transition-transform duration-250"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    ▾
                  </span>
                </div>
              </button>
              <div
                className="ql-body transition-[max-height] duration-380 ease-in-out"
                style={{ maxHeight: isOpen ? "400px" : "0px" }}
              >
                <div className="ql-inner">
                  <div>
                    <div className="ql-cell-label">Primary Focus Area</div>
                    <div className="ql-cell-val">{item.focus}</div>
                  </div>
                  <div>
                    <div className="ql-cell-label">Why it's great after O/L</div>
                    <div className="ql-cell-val">{item.why}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Active detail page calculation (for olData, alData keys)
  const renderDetailBox = () => {
    if (!detailRef) return null;
    const { type, key } = detailRef;
    const item: PathInfo = type === "ol" ? olData[key] : alData[key];
    if (!item) return null;

    const isSaved = savedPaths.some((p) => p.type === type && p.key === key);

    return (
      <div id="detailBox" className="mx-auto">
        <div className="flex justify-between items-start mb-4">
          <div className="di-emoji">{item.emoji ?? "🎓"}</div>
          <button
            className={`cursor-pointer px-4 py-1.5 rounded-full border transition-all duration-200 outline-none flex items-center gap-2 text-xs md:text-sm font-semibold hover:scale-105 active:scale-95 ${
              isSaved
                ? "bg-rose-500/15 border-rose-500/30 text-rose-500 shadow-sm"
                : "bg-[var(--surf2)] hover:bg-[var(--surf2)] border-[var(--border)] text-[var(--muted)] hover:text-rose-500"
            }`}
            onClick={(e) => toggleSavePath(type, key, e)}
          >
            <Heart className="w-3.5 h-3.5" fill={isSaved ? "currentColor" : "none"} />
            {isSaved ? "Saved" : "Save Pathway"}
          </button>
        </div>
        <h2>{item.title}</h2>
        <p className="di-desc">{item.desc}</p>
        <div className="di-grid">
          <div className="di-block">
            <div className="di-label">✦ Why choose this</div>
            <div className="di-val">{item.cause}</div>
          </div>
          <div className="di-block">
            <div className="di-label">✦ Key benefits</div>
            <div className="di-val">{item.benefit}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen">
      {/* Dynamic Header */}
      <header>
        <div className="logo" onClick={goHome} title="Go to home">
          <div className="logo-container">
            <svg className="logo-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px" }}>
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--green)" />
                  <stop offset="100%" stopColor="var(--purple)" />
                </linearGradient>
              </defs>
              <path d="M6 24C6 24 10 12 20 12" stroke="url(#logoGrad)" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M14 12H20V18" stroke="url(#logoGrad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          UpskillLanka
        </div>
        <div className="flex items-center gap-2.5">
          <button
            className="theme-toggle"
            id="themeToggle"
            onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
            aria-label="Toggle light/dark mode"
            title="Toggle light/dark mode"
          >
            <div className="theme-toggle-thumb">{theme === "light" ? "☀️" : "🌙"}</div>
          </button>
          <div id="authArea" className="flex gap-2">
            {user ? (
              <>
                <button className="btn btn-outline" onClick={() => navigateTo("dashboard")}>
                  Profile
                </button>
                <button className="btn btn-outline" onClick={handleLogout}>
                  Sign out
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-outline" onClick={() => navigateTo("login")}>
                  Login
                </button>
                <button className="btn btn-solid" onClick={() => navigateTo("login")}>
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* ── SCREEN: HOME ── */}
      {activeView === "home" && (
        <section id="home" className="relative min-h-[calc(100vh-58px)] flex flex-col items-center justify-center px-5 py-12 md:pb-24 text-center">
          {/* Wave Animation Background embedded dynamically for a beautiful, premium visual wave aesthetic */}
          <WaveBackground />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <div className="pill">Sri Lanka's Career Guide</div>
            <h1 className="hero-h1">
              Find your <span className="grad">perfect path</span> after exams
            </h1>
            <p className="hero-sub min-h-[2.8em] flex items-center justify-center">
              <span className="typewriter-wrap whitespace-normal">{typewriterText}</span>
              <span className="typewriter-cursor" id="typewriterCursor" />
            </p>

            <div className="home-cards">
              <div className="home-card g" onClick={() => navigateTo("ol")}>
                <div className="hc-icon g">🎓</div>
                <h3>After O/L</h3>
                <p>Courses, vocational training &amp; streams after O/Level exams</p>
                <div className="hc-cta">Explore options →</div>
              </div>
              <div className="home-card p" onClick={() => navigateTo("al")}>
                <div className="hc-icon p">🚀</div>
                <h3>After A/L</h3>
                <p>University degrees, certifications &amp; professional careers</p>
                <div className="hc-cta">Explore options →</div>
              </div>
              <a
                href="https://upskilllanka-max.github.io/CV-makerGihan/"
                target="_blank"
                rel="noopener noreferrer"
                className="home-card a block no-underline"
              >
                <div className="hc-icon a">💼</div>
                <h3>Make a CV</h3>
                <p>Build your standout resume with our interactive CV Maker</p>
                <div className="hc-cta">Create CV →</div>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── SCREEN: DASHBOARD ── */}
      {activeView === "dashboard" && (
        <section id="dashboard" className="px-6 py-9 max-w-[920px] mx-auto">
          <h2 className="font-display text-2xl md:text-3.5xl font-medium mb-[22px]">Welcome back 👋</h2>
          {user && (
            <div className="profile-card">
              <div className="avatar">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)}
              </div>
              <div className="pi">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
            </div>
          )}
          <div className="ex-row">
            <button className="ex-btn g" onClick={() => navigateTo("ol")}>
              <span>After O/L Paths</span>
              <span style={{ color: "var(--green)" }}>→</span>
            </button>
            <button className="ex-btn p" onClick={() => navigateTo("al")}>
              <span>After A/L Paths</span>
              <span style={{ color: "var(--purple)" }}>→</span>
            </button>
          </div>

          {/* Saved Paths Section */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[var(--border)]">
              <h3 className="font-display text-xl md:text-2xl font-medium flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                Saved Pathways
              </h3>
              {savedPaths.length > 0 && (
                <span className="text-xs bg-[var(--surf2)] px-2.5 py-1 rounded-full text-[var(--muted)] font-semibold border border-[var(--border)]">
                  {savedPaths.length} saved
                </span>
              )}
            </div>

            {savedPaths.length === 0 ? (
              <div className="text-center py-10 px-5 bg-[var(--surf)] border border-[var(--border)] rounded-2xl flex flex-col items-center justify-center shadow-inner">
                <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 text-xl mb-4 animate-pulse">
                  ❤️
                </div>
                <h4 className="font-display text-base font-semibold mb-1 text-[var(--text)]">Your career vault is empty</h4>
                <p className="text-xs md:text-sm text-[var(--muted)] max-w-sm">
                  Start exploring O/Level and A/Level paths, and click the heart on any card to save it here for quick access.
                </p>
                <div className="flex gap-3 mt-5">
                  <button className="btn btn-outline hover:border-gray-400 py-1.5 px-3.5" onClick={() => navigateTo("ol")}>
                    Browse O/Ls
                  </button>
                  <button className="btn btn-outline hover:border-gray-400 py-1.5 px-3.5" onClick={() => navigateTo("al")}>
                    Browse A/Ls
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {savedPaths.map(({ type, key }) => {
                  const item = type === "ol" ? olData[key] : alData[key];
                  if (!item) return null;
                  return (
                    <div
                      className="cc relative"
                      key={`${type}-${key}`}
                      onClick={() => handleSavedPathClick(type, key)}
                    >
                      <button
                        className="absolute top-3 right-3 z-20 cursor-pointer p-2 rounded-full border bg-rose-500/15 border-rose-500/30 text-rose-500 shadow-sm hover:scale-115 active:scale-95 transition-all duration-200 outline-none flex items-center justify-center"
                        onClick={(e) => toggleSavePath(type, key, e)}
                        title="Remove from Saved"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                      <div className="cc-emoji">{item.emoji ?? "🎓"}</div>
                      <h3 className="pr-8">{item.title}</h3>
                      <p>{item.desc}</p>
                      <div className="cc-foot">
                        <span className={`tag ${item.tag}`}>{item.tagText}</span>
                        <div className="arr">→</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── SCREEN: O/L PATHS ── */}
      {activeView === "ol" && (
        <section id="ol">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>After O/L</b>
            </span>
          </div>
          <div className="ph">
            <h2>After O/Level</h2>
            <p>Choose a path that matches your interests and goals</p>
          </div>
          <div id="olGrid" className="card-grid">
            {Object.entries(olData).map(([key, item], idx) => {
              const isSaved = savedPaths.some((p) => p.type === "ol" && p.key === key);
              return (
                <div
                  className="cc relative"
                  key={key}
                  onClick={() => navigateTo(key)}
                  style={{ animationDelay: `${idx * 0.06}s` }}
                >
                  <button
                    className={`absolute top-3 right-3 z-20 cursor-pointer p-2 rounded-full border transition-all duration-200 outline-none hover:scale-115 active:scale-90 flex items-center justify-center ${
                      isSaved
                        ? "bg-rose-500/15 border-rose-500/30 text-rose-500 shadow-sm"
                        : "bg-black/10 hover:bg-black/20 dark:bg-white/5 dark:hover:bg-white/10 border-transparent text-gray-400 hover:text-rose-500"
                    }`}
                    onClick={(e) => toggleSavePath("ol", key, e)}
                    title={isSaved ? "Remove from Saved" : "Save Path"}
                  >
                    <Heart className="w-4 h-4" fill={isSaved ? "currentColor" : "none"} />
                  </button>
                  <div className="cc-emoji">{item.emoji ?? "🎓"}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="cc-foot">
                    <span className={`tag ${item.tag}`}>{item.tagText}</span>
                    <div className="arr">→</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── SCREEN: A/L PATHS ── */}
      {activeView === "al" && (
        <section id="al">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>After A/L</b>
            </span>
          </div>
          <div className="ph">
            <h2>After A/Level</h2>
            <p>Take the next big step in your academic journey</p>
          </div>
          <div id="alGrid" className="card-grid">
            {Object.entries(alData).map(([key, item], idx) => {
              const isSaved = savedPaths.some((p) => p.type === "al" && p.key === key);
              return (
                <div
                  className="cc relative"
                  key={key}
                  onClick={() => {
                    setDetailRef({ type: "al", key });
                    navigateTo("detail");
                  }}
                  style={{ animationDelay: `${idx * 0.06}s` }}
                >
                  <button
                    className={`absolute top-3 right-3 z-20 cursor-pointer p-2 rounded-full border transition-all duration-200 outline-none hover:scale-115 active:scale-90 flex items-center justify-center ${
                      isSaved
                        ? "bg-rose-500/15 border-rose-500/30 text-rose-500 shadow-sm"
                        : "bg-black/10 hover:bg-black/20 dark:bg-white/5 dark:hover:bg-white/10 border-transparent text-gray-400 hover:text-rose-500"
                    }`}
                    onClick={(e) => toggleSavePath("al", key, e)}
                    title={isSaved ? "Remove from Saved" : "Save Path"}
                  >
                    <Heart className="w-4 h-4" fill={isSaved ? "currentColor" : "none"} />
                  </button>
                  <div className="cc-emoji">{item.emoji ?? "🎓"}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="cc-foot">
                    <span className={`tag ${item.tag}`}>{item.tagText}</span>
                    <div className="arr">→</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── SCREEN: DETAIL VIEW ── */}
      {activeView === "detail" && (
        <section id="detail" className="pb-14">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
          </div>
          {renderDetailBox()}
        </section>
      )}

      {/* ── SCREEN: COMMERCE STREAM SECTIONS ── */}
      {activeView === "commerce" && (
        <section id="commerce">
          <div className="sub-nav flex-wrap">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>After O/L</b> / <b>Commerce Stream</b>
            </span>
          </div>
          <div className="ph">
            <h2>Commerce Stream</h2>
            <p>Select a course category to explore your options</p>
          </div>
          <div className="cat-grid">
            <div className="cat-btn af" onClick={() => navigateTo("commerce-af")}>
              <div className="cat-btn-icon">💰</div>
              <div className="cat-btn-title">Accounting &amp; Finance Courses</div>
              <div className="cat-btn-sub">AAT, ACCA, CIMA, CMA &amp; more</div>
            </div>
            <div className="cat-btn biz" onClick={() => navigateTo("commerce-biz")}>
              <div className="cat-btn-icon">📈</div>
              <div className="cat-btn-title">Business Courses</div>
              <div className="cat-btn-sub">Management, Marketing &amp; Entrepreneurship</div>
            </div>
            <div className="cat-btn itc" onClick={() => navigateTo("commerce-itc")}>
              <div className="cat-btn-icon">💻</div>
              <div className="cat-btn-title">IT + Commerce Courses</div>
              <div className="cat-btn-sub">Digital Business, E-Commerce &amp; Fintech Pathways</div>
            </div>
            <div className="cat-btn bank" onClick={() => navigateTo("commerce-bo")}>
              <div className="cat-btn-icon">🏦</div>
              <div className="cat-btn-title">Banking &amp; Office</div>
              <div className="cat-btn-sub">Banking, Admin &amp; Office Management</div>
            </div>
          </div>
        </section>
      )}

      {activeView === "commerce-af" && (
        <section id="commerce-af">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Commerce</b> / <b>Accounting</b>
            </span>
          </div>
          <div className="ph">
            <h2>Accounting &amp; Finance</h2>
            <p>Professional credentials right after O/Levels</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(afData, "af")}</div>
        </section>
      )}

      {activeView === "commerce-biz" && (
        <section id="commerce-biz">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Commerce</b> / <b>Business</b>
            </span>
          </div>
          <div className="ph">
            <h2>Business Management &amp; HR</h2>
            <p>Corporate management entry certifications</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(bizData, "biz")}</div>
        </section>
      )}

      {activeView === "commerce-itc" && (
        <section id="commerce-itc">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Commerce</b> / <b>IT + Commerce</b>
            </span>
          </div>
          <div className="ph">
            <h2>IT + Commerce Courses</h2>
            <p>Commerce tech and e-commerce credentials</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(itcData, "itc")}</div>
        </section>
      )}

      {activeView === "commerce-bo" && (
        <section id="commerce-bo">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Commerce</b> / <b>Banking</b>
            </span>
          </div>
          <div className="ph">
            <h2>Banking &amp; Office Structures</h2>
            <p>Administrative and operational career tracks</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(boData, "bo")}</div>
        </section>
      )}

      {/* ── SCREEN: HOTEL & HOSPITALITY STREAM SECTIONS ── */}
      {activeView === "hotel" && (
        <section id="hotel">
          <div className="sub-nav flex-wrap">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>After O/L</b> / <b>Hotel &amp; Hospitality</b>
            </span>
          </div>
          <div className="ph">
            <h2>Hotel &amp; Hospitality</h2>
            <p>Select a hospitality or culinary category to explore your options</p>
          </div>
          <div className="cat-grid">
            <div className="cat-btn af" onClick={() => navigateTo("hotel-accom")}>
              <div className="cat-btn-icon">🏨</div>
              <div className="cat-btn-title">Accommodation Operations</div>
              <div className="cat-btn-sub">Room division, lodging and front of house layouts</div>
            </div>
            <div className="cat-btn biz" onClick={() => navigateTo("hotel-bakery")}>
              <div className="cat-btn-icon">🥐</div>
              <div className="cat-btn-title">Bakery Management</div>
              <div className="cat-btn-sub">Industrial baking systems, workflows and logistics</div>
            </div>
            <div className="cat-btn itc" onClick={() => navigateTo("hotel-barbeverage")}>
              <div className="cat-btn-icon">🍹</div>
              <div className="cat-btn-title">Bar &amp; Beverage Operations</div>
              <div className="cat-btn-sub">Bar operation methods, beverage service and guest handling</div>
            </div>
            <div className="cat-btn bank" onClick={() => navigateTo("hotel-cakedec")}>
              <div className="cat-btn-icon">🎂</div>
              <div className="cat-btn-title">Cake Decoration</div>
              <div className="cat-btn-sub">Aesthetic cake craft, sugar artistry, wedding themes</div>
            </div>
            <div className="cat-btn af" onClick={() => navigateTo("hotel-commcookery")}>
              <div className="cat-btn-icon">🍳</div>
              <div className="cat-btn-title">Commercial Cookery</div>
              <div className="cat-btn-sub">Australian pathways, kitchen setups &amp; chef methods</div>
            </div>
            <div className="cat-btn biz" onClick={() => navigateTo("hotel-profcookery")}>
              <div className="cat-btn-icon">🧑‍🍳</div>
              <div className="cat-btn-title">Professional Cookery</div>
              <div className="cat-btn-sub">Culinary arts, government credentials, global kitchen tracks</div>
            </div>
            <div className="cat-btn itc" onClick={() => navigateTo("hotel-culinary")}>
              <div className="cat-btn-icon">🍲</div>
              <div className="cat-btn-title">Cookery &amp; Culinary Art</div>
              <div className="cat-btn-sub">Creative cuisine development, kitchen supervision, global cuisines</div>
            </div>
            <div className="cat-btn bank" onClick={() => navigateTo("hotel-fnb")}>
              <div className="cat-btn-icon">🍽️</div>
              <div className="cat-btn-title">Food &amp; Beverage Service</div>
              <div className="cat-btn-sub">Restaurant service, butlering, modern banquet coordination</div>
            </div>
            <div className="cat-btn af" onClick={() => navigateTo("hotel-frontoffice")}>
              <div className="cat-btn-icon">🛎️</div>
              <div className="cat-btn-title">Front Office Operations</div>
              <div className="cat-btn-sub">Property software, concierge, customer reception techniques</div>
            </div>
            <div className="cat-btn biz" onClick={() => navigateTo("hotel-guestrelations")}>
              <div className="cat-btn-icon">🗣️</div>
              <div className="cat-btn-title">Guest Relations Management</div>
              <div className="cat-btn-sub">Hospitality service standards, VIP engagement &amp; communication</div>
            </div>
            <div className="cat-btn itc" onClick={() => navigateTo("hotel-leadership")}>
              <div className="cat-btn-icon">👔</div>
              <div className="cat-btn-title">Hospitality Leadership</div>
              <div className="cat-btn-sub">Hospitality administration, corporate resource planning</div>
            </div>
            <div className="cat-btn bank" onClick={() => navigateTo("hotel-mgmt")}>
              <div className="cat-btn-icon">🏢</div>
              <div className="cat-btn-title">Hotel Management</div>
              <div className="cat-btn-sub">Multi-department supervision, budget controls, hotel networks</div>
            </div>
            <div className="cat-btn af" onClick={() => navigateTo("hotel-housekeeping")}>
              <div className="cat-btn-icon">🧹</div>
              <div className="cat-btn-title">Housekeeping Operations</div>
              <div className="cat-btn-sub">Hygiene design, interior maintenance &amp; laundry management</div>
            </div>
            <div className="cat-btn biz" onClick={() => navigateTo("hotel-kitchenmgmt")}>
              <div className="cat-btn-icon">🔪</div>
              <div className="cat-btn-title">Kitchen Management</div>
              <div className="cat-btn-sub">Inventory control, menu pricing, compliance, executive roles</div>
            </div>
            <div className="cat-btn itc" onClick={() => navigateTo("hotel-pastrybakery")}>
              <div className="cat-btn-icon">🍰</div>
              <div className="cat-btn-title">Pastry &amp; Bakery</div>
              <div className="cat-btn-sub">Confectionery, baking crafts, desert creation layouts</div>
            </div>
            <div className="cat-btn bank" onClick={() => navigateTo("hotel-resortmgmt")}>
              <div className="cat-btn-icon">🌴</div>
              <div className="cat-btn-title">Resort &amp; Hotel Management</div>
              <div className="cat-btn-sub">Leisure tourism setups, spa and resort activity coordination</div>
            </div>
            <div className="cat-btn af" onClick={() => navigateTo("hotel-restaurantbanquet")}>
              <div className="cat-btn-icon">🍷</div>
              <div className="cat-btn-title">Restaurant &amp; Banquet Service</div>
              <div className="cat-btn-sub">Banquet and event hosting, restaurant operations supervision</div>
            </div>
            <div className="cat-btn biz" onClick={() => navigateTo("hotel-tourguiding")}>
              <div className="cat-btn-icon">🗺️</div>
              <div className="cat-btn-title">Tour Guiding &amp; Destination</div>
              <div className="cat-btn-sub">Visitor handling, local history maps &amp; tour operations</div>
            </div>
            <div className="cat-btn itc" onClick={() => navigateTo("hotel-tourismmgmt")}>
              <div className="cat-btn-icon">🌍</div>
              <div className="cat-btn-title">Tourism Management</div>
              <div className="cat-btn-sub">Tourism policy, travel economy &amp; industry planning</div>
            </div>
            <div className="cat-btn bank" onClick={() => navigateTo("hotel-tourismtravel")}>
              <div className="cat-btn-icon">🎒</div>
              <div className="cat-btn-title">Tourism &amp; Travel Management</div>
              <div className="cat-btn-sub">Agency operations, ticket booking systems &amp; travel marketing</div>
            </div>
            <div className="cat-btn af" onClick={() => navigateTo("hotel-traveltourism")}>
              <div className="cat-btn-icon">🧳</div>
              <div className="cat-btn-title">Travel &amp; Tourism Management</div>
              <div className="cat-btn-sub">Global transport routing, leisure sales, package design</div>
            </div>
          </div>
        </section>
      )}

      {activeView === "hotel-accom" && (
        <section id="hotel-accom">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Accommodation</b>
            </span>
          </div>
          <div className="ph">
            <h2>Accommodation Operations</h2>
            <p>Primary pathways in hospitality lodging operations</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelAccomData, "ha")}</div>
        </section>
      )}

      {activeView === "hotel-bakery" && (
        <section id="hotel-bakery">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Bakery Management</b>
            </span>
          </div>
          <div className="ph">
            <h2>Bakery Management</h2>
            <p>Supervisory bakery pathways and commercial baker operations</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelBakeryData, "hb")}</div>
        </section>
      )}

      {activeView === "hotel-barbeverage" && (
        <section id="hotel-barbeverage">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Bar &amp; Beverage</b>
            </span>
          </div>
          <div className="ph">
            <h2>Bar &amp; Beverage Operations</h2>
            <p>Professional beverage formulation and modern guest service</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelBarBeverageData, "hbb")}</div>
        </section>
      )}

      {activeView === "hotel-cakedec" && (
        <section id="hotel-cakedec">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Cake Decoration</b>
            </span>
          </div>
          <div className="ph">
            <h2>Cake Decoration &amp; Sugar Craft</h2>
            <p>Aesthetic bakery presentation, chocolate modeling &amp; sugar design</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelCakeDecData, "hcd")}</div>
        </section>
      )}

      {activeView === "hotel-commcookery" && (
        <section id="hotel-commcookery">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Commercial Cookery</b>
            </span>
          </div>
          <div className="ph">
            <h2>Commercial Cookery Pathways</h2>
            <p>Australian qualifications (AQF) and professional kitchen standards</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelCommCookeryData, "hcc")}</div>
        </section>
      )}

      {activeView === "hotel-profcookery" && (
        <section id="hotel-profcookery">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Professional Cookery</b>
            </span>
          </div>
          <div className="ph">
            <h2>Professional Cookery</h2>
            <p>Government TVEC training, SLITHM certifications and master chef tracks</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelProfCookeryData, "hpc")}</div>
        </section>
      )}

      {activeView === "hotel-culinary" && (
        <section id="hotel-culinary">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Culinary Art</b>
            </span>
          </div>
          <div className="ph">
            <h2>Cookery &amp; Culinary Art</h2>
            <p>Advanced chef practices, Western and Eastern specialty operations</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelCulinaryCookeryData, "hcu")}</div>
        </section>
      )}

      {activeView === "hotel-fnb" && (
        <section id="hotel-fnb">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Food &amp; Beverage</b>
            </span>
          </div>
          <div className="ph">
            <h2>Food &amp; Beverage Service</h2>
            <p>Table service methods, banquet operations &amp; butlering credentials</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelFnBServiceData, "hfb")}</div>
        </section>
      )}

      {activeView === "hotel-frontoffice" && (
        <section id="hotel-frontoffice">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Front Office</b>
            </span>
          </div>
          <div className="ph">
            <h2>Front Office Operations</h2>
            <p>Reception systems, booking platforms &amp; guest welcoming guides</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelFrontOfficeData, "hfo")}</div>
        </section>
      )}

      {activeView === "hotel-guestrelations" && (
        <section id="hotel-guestrelations">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Guest Relations</b>
            </span>
          </div>
          <div className="ph">
            <h2>Guest Relations Management</h2>
            <p>Customer engagement excellence, communication &amp; hospitality workflows</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelGuestRelationsData, "hgr")}</div>
        </section>
      )}

      {activeView === "hotel-leadership" && (
        <section id="hotel-leadership">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Leadership</b>
            </span>
          </div>
          <div className="ph">
            <h2>Hospitality Leadership &amp; Administration</h2>
            <p>Executive delegation, hospitality operations and resource planning</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelLeadershipData, "hld")}</div>
        </section>
      )}

      {activeView === "hotel-mgmt" && (
        <section id="hotel-mgmt">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Hotel Management</b>
            </span>
          </div>
          <div className="ph">
            <h2>Hotel Management &amp; Hospitality Support</h2>
            <p>Full hotel operation, resource administration &amp; enterprise coordination</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelMgmtData, "hmg")}</div>
        </section>
      )}

      {activeView === "hotel-housekeeping" && (
        <section id="hotel-housekeeping">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Housekeeping</b>
            </span>
          </div>
          <div className="ph">
            <h2>Housekeeping Operations</h2>
            <p>Sanitation structures, property care, room quality management</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelHousekeepingData, "hhk")}</div>
        </section>
      )}

      {activeView === "hotel-kitchenmgmt" && (
        <section id="hotel-kitchenmgmt">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Kitchen Management</b>
            </span>
          </div>
          <div className="ph">
            <h2>Kitchen Management</h2>
            <p>Head chef operations, cooking compliance, budget and stock planning</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelKitchenMgmtData, "hkm")}</div>
        </section>
      )}

      {activeView === "hotel-pastrybakery" && (
        <section id="hotel-pastrybakery">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Pastry &amp; Bakery Arts</b>
            </span>
          </div>
          <div className="ph">
            <h2>Pastry &amp; Bakery Arts</h2>
            <p>Specialty confectionery, dessert design &amp; bread artistry methods</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelPastryBakeryData, "hpb")}</div>
        </section>
      )}

      {activeView === "hotel-resortmgmt" && (
        <section id="hotel-resortmgmt">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Resort Management</b>
            </span>
          </div>
          <div className="ph">
            <h2>Resort &amp; Hotel Operations Management</h2>
            <p>Leisure facilities oversight, coastal resort planning &amp; operations</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelResortMgmtData, "hrm")}</div>
        </section>
      )}

      {activeView === "hotel-restaurantbanquet" && (
        <section id="hotel-restaurantbanquet">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Restaurant &amp; Banquet</b>
            </span>
          </div>
          <div className="ph">
            <h2>Restaurant &amp; Banquet Service</h2>
            <p>Corporate event coordination, menu logic &amp; team supervision</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelRestaurantBanquetData, "hrb")}</div>
        </section>
      )}

      {activeView === "hotel-tourguiding" && (
        <section id="hotel-tourguiding">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Tour Guiding</b>
            </span>
          </div>
          <div className="ph">
            <h2>Tour Guiding &amp; Destination Management</h2>
            <p>Tourism presentation, language delivery &amp; travel safety operations</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelTourGuidingData, "htg")}</div>
        </section>
      )}

      {activeView === "hotel-tourismmgmt" && (
        <section id="hotel-tourismmgmt">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Tourism Management</b>
            </span>
          </div>
          <div className="ph">
            <h2>Tourism Management</h2>
            <p>Travel policy planning, ecotourism &amp; tourism enterprise structures</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelTourismMgmtData, "htm")}</div>
        </section>
      )}

      {activeView === "hotel-tourismtravel" && (
        <section id="hotel-tourismtravel">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Tourism &amp; Travel</b>
            </span>
          </div>
          <div className="ph">
            <h2>Tourism &amp; Travel Management</h2>
            <p>Tour booking agencies, flight reservation handling &amp; itinerary planning</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelTourismTravelData, "htt")}</div>
        </section>
      )}

      {activeView === "hotel-traveltourism" && (
        <section id="hotel-traveltourism">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Hotel</b> / <b>Travel &amp; Tourism</b>
            </span>
          </div>
          <div className="ph">
            <h2>Travel &amp; Tourism Management</h2>
            <p>Global logistics, travel network administration and guest itineraries</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(hotelTravelTourismData, "hty")}</div>
        </section>
      )}

      {/* ── SCREEN: IT & TECH SECTIONS ── */}
      {activeView === "it" && (
        <section id="it">
          <div className="sub-nav flex-wrap">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>After O/L</b> / <b>IT &amp; Tech</b>
            </span>
          </div>
          <div className="ph">
            <h2>IT &amp; Technology</h2>
            <p>Select an IT and Technology pathway to start your career early</p>
          </div>
          <div className="cat-grid">
            <div className="cat-btn af" onClick={() => navigateTo("it-se")}>
              <div className="cat-btn-icon">💻</div>
              <div className="cat-btn-title">Software Engineering</div>
              <div className="cat-btn-sub">IIT Westminster, SLIIT foundations, NIBM Advanced &amp; ESOFT BTECs</div>
            </div>
            <div className="cat-btn biz" onClick={() => navigateTo("it-web")}>
              <div className="cat-btn-icon">🌐</div>
              <div className="cat-btn-title">Web Development</div>
              <div className="cat-btn-sub">NIBM Web Engineering, ESOFT Diplomas, Wijeya UI &amp; OUSL Basics</div>
            </div>
            <div className="cat-btn itc" onClick={() => navigateTo("it-graphics")}>
              <div className="cat-btn-icon">🎨</div>
              <div className="cat-btn-title">Graphic Design &amp; Multimedia</div>
              <div className="cat-btn-sub">AMDT Foundations, AOD Portfolios, Wijeya Animations &amp; NIBM Production</div>
            </div>
            <div className="cat-btn bank" onClick={() => navigateTo("it-network")}>
              <div className="cat-btn-icon">🔌</div>
              <div className="cat-btn-title">Hardware &amp; Networking</div>
              <div className="cat-btn-sub">Computer maintenance, servers, troubleshooting &amp; assembly foundations</div>
            </div>
            <div className="cat-btn af" onClick={() => navigateTo("it-cyber")}>
              <div className="cat-btn-icon">🛡️</div>
              <div className="cat-btn-title">Cyber Security</div>
              <div className="cat-btn-sub">Ethical hacking, penetration testing, network defense &amp; forensics foundations</div>
            </div>
            <div className="cat-btn biz" onClick={() => navigateTo("it-ai")}>
              <div className="cat-btn-icon">🤖</div>
              <div className="cat-btn-title">AI &amp; Data Science</div>
              <div className="cat-btn-sub">Python, AI foundations, statistics models &amp; modern data analytics</div>
            </div>
            <div className="cat-btn itc" onClick={() => navigateTo("it-marketing")}>
              <div className="cat-btn-icon">📈</div>
              <div className="cat-btn-title">Digital Marketing</div>
              <div className="cat-btn-sub">SEO, Social Media Campaigns, Google Ads, Analytics &amp; PCDM courses</div>
            </div>
            <div className="cat-btn bank" onClick={() => navigateTo("it-office")}>
              <div className="cat-btn-icon">📁</div>
              <div className="cat-btn-title">Office &amp; Business IT</div>
              <div className="cat-btn-sub">DiTEC, computer applications, basic computer literacy &amp; office tech systems</div>
            </div>
            <div className="cat-btn af" onClick={() => navigateTo("it-gamedev")}>
              <div className="cat-btn-icon">🎮</div>
              <div className="cat-btn-title">Game Development</div>
              <div className="cat-btn-sub">Unity, 2D/3D assets, physics &amp; scripting</div>
            </div>
          </div>
        </section>
      )}

      {activeView === "it-se" && (
        <section id="it-se">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>IT &amp; Tech</b> / <b>Software Engineering</b>
            </span>
          </div>
          <div className="ph">
            <h2>Software Engineering Courses</h2>
            <p>Spreadsheet verified pathways including foreign UK-affiliated platforms &amp; local programs</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(seData, "se")}</div>
        </section>
      )}

      {activeView === "it-web" && (
        <section id="it-web">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>IT &amp; Tech</b> / <b>Web Development</b>
            </span>
          </div>
          <div className="ph">
            <h2>Web Development Courses</h2>
            <p>Master responsive designs, full-stack technologies, frontend, backend &amp; UI/UX portfolios</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(webData, "web")}</div>
        </section>
      )}

      {activeView === "it-graphics" && (
        <section id="it-graphics">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>IT &amp; Tech</b> / <b>Graphic &amp; Multimedia</b>
            </span>
          </div>
          <div className="ph">
            <h2>Graphic Design &amp; Multimedia Courses</h2>
            <p>Acquire aesthetic design mechanics, user experience rules, digital rendering skills, and production credentials</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(graphicsData, "graphics")}</div>
        </section>
      )}

      {activeView === "it-network" && (
        <section id="it-network">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>IT &amp; Tech</b> / <b>Hardware &amp; Networking</b>
            </span>
          </div>
          <div className="ph">
            <h2>Hardware &amp; Networking Courses</h2>
            <p>Learn configuration systems, PC assembly diagnostics, and technical network topologies</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(networkData, "network")}</div>
        </section>
      )}

      {activeView === "it-cyber" && (
        <section id="it-cyber">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>IT &amp; Tech</b> / <b>Cyber Security</b>
            </span>
          </div>
          <div className="ph">
            <h2>Cyber Security Courses</h2>
            <p>Identify weaknesses, protect infrastructure assets, and practice secure defense methods</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(cyberData, "cyber")}</div>
        </section>
      )}

      {activeView === "it-ai" && (
        <section id="it-ai">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>IT &amp; Tech</b> / <b>AI &amp; Data Science</b>
            </span>
          </div>
          <div className="ph">
            <h2>AI &amp; Data Science Courses</h2>
            <p>Introduce statistics models, artificial intelligence programs, and smart analytical workflows</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(aiData, "ai")}</div>
        </section>
      )}

      {activeView === "it-marketing" && (
        <section id="it-marketing">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>IT &amp; Tech</b> / <b>Digital Marketing</b>
            </span>
          </div>
          <div className="ph">
            <h2>Digital Marketing Courses</h2>
            <p>Leverage content campaigns, organic search ranking strategies, and commercial tracking</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(marketingData, "marketing")}</div>
        </section>
      )}

      {activeView === "it-office" && (
        <section id="it-office">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>IT &amp; Tech</b> / <b>Office &amp; Business IT</b>
            </span>
          </div>
          <div className="ph">
            <h2>Office &amp; Business IT Courses</h2>
            <p>Advance administrative database records, computer literacy and digital spreadsheet capabilities</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(officeData, "office")}</div>
        </section>
      )}

      {activeView === "it-gamedev" && (
        <section id="it-gamedev">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>IT &amp; Tech</b> / <b>Game Development</b>
            </span>
          </div>
          <div className="ph">
            <h2>Game Development Courses</h2>
            <p>Craft real-time physical simulation maps, character mechanics, and level logic</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(gamedevData, "gamedev")}</div>
        </section>
      )}

      {/* ── SCREEN: LANGUAGES SECTIONS ── */}
      {activeView === "languages" && (
        <section id="languages">
          <div className="sub-nav flex-wrap">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>After O/L</b> / <b>Languages</b>
            </span>
          </div>
          <div className="ph">
            <h2>Language Pathways</h2>
            <p>Build global communication skills right after school</p>
          </div>
          <div className="cat-grid">
            <div className="cat-btn biz" onClick={() => navigateTo("lang-eng")}>
              <div className="cat-btn-icon">🇬🇧</div>
              <div className="cat-btn-title">English Qualifications</div>
              <div className="cat-btn-sub">IELTS Prep, Cambridge &amp; Business English</div>
            </div>
            <div className="cat-btn af" onClick={() => navigateTo("lang-east")}>
              <div className="cat-btn-icon">🇯🇵</div>
              <div className="cat-btn-title">East Asian Languages</div>
              <div className="cat-btn-sub">Japanese (JLPT), Korean (TOPIK) &amp; Chinese</div>
            </div>
            <div className="cat-btn bank" onClick={() => navigateTo("lang-euro")}>
              <div className="cat-btn-icon">🇫🇷</div>
              <div className="cat-btn-title">European Languages</div>
              <div className="cat-btn-sub">French, German &amp; Italian Options</div>
            </div>
          </div>
        </section>
      )}

      {activeView === "lang-eng" && (
        <section id="lang-eng">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Languages</b> / <b>English</b>
            </span>
          </div>
          <div className="ph">
            <h2>English Qualifications</h2>
            <p>Advanced standard English paths</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(langEngData, "le")}</div>
        </section>
      )}

      {activeView === "lang-east" && (
        <section id="lang-east">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Languages</b> / <b>East Asian</b>
            </span>
          </div>
          <div className="ph">
            <h2>East Asian Languages</h2>
            <p>High employment demand migration frameworks</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(langEastData, "lea")}</div>
        </section>
      )}

      {activeView === "lang-euro" && (
        <section id="lang-euro">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>Languages</b> / <b>European</b>
            </span>
          </div>
          <div className="ph">
            <h2>European Languages</h2>
            <p>Global professional credentials</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(langEuroData, "leu")}</div>
        </section>
      )}

      {/* ── SCREEN: NVQ SECTIONS ── */}
      {activeView === "nvq" && (
        <section id="nvq">
          <div className="sub-nav flex-wrap">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>After O/L</b> / <b>NVQ Vocational</b>
            </span>
          </div>
          <div className="ph">
            <h2>NVQ Skills Training</h2>
            <p>Hands-on practical fields certified by the government</p>
          </div>
          <div className="cat-grid">
            <div className="cat-btn bank" onClick={() => navigateTo("nvq-eng")}>
              <div className="cat-btn-icon">🔧</div>
              <div className="cat-btn-title">Engineering &amp; Mechanical</div>
              <div className="cat-btn-sub">Automobile, Electrical Wiring &amp; Machining</div>
            </div>
            <div className="cat-btn af" onClick={() => navigateTo("nvq-hosp")}>
              <div className="cat-btn-icon">🍳</div>
              <div className="cat-btn-title">Hospitality &amp; Culinary</div>
              <div className="cat-btn-sub">Professional Cookery, Baking &amp; Hotel Operations</div>
            </div>
            <div className="cat-btn biz" onClick={() => navigateTo("nvq-creative")}>
              <div className="cat-btn-icon">✂️</div>
              <div className="cat-btn-title">Creative Trades</div>
              <div className="cat-btn-sub">Fashion Design, Hairdressing &amp; Beauty Therapy</div>
            </div>
          </div>
        </section>
      )}

      {activeView === "nvq-eng" && (
        <section id="nvq-eng">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>NVQ</b> / <b>Engineering</b>
            </span>
          </div>
          <div className="ph">
            <h2>Engineering &amp; Mechanical Trades</h2>
            <p>Technical industrial specializations</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(nvqEngData, "ne")}</div>
        </section>
      )}

      {activeView === "nvq-hosp" && (
        <section id="nvq-hosp">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>NVQ</b> / <b>Hospitality</b>
            </span>
          </div>
          <div className="ph">
            <h2>Hospitality &amp; Culinary Arts</h2>
            <p>Global tourist industry paths</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(nvqHospData, "nh")}</div>
        </section>
      )}

      {activeView === "nvq-creative" && (
        <section id="nvq-creative">
          <div className="sub-nav">
            <button className="back-btn" onClick={navigateBack}>
              ← Back
            </button>
            <span className="crumb">
              / <b>NVQ</b> / <b>Creative</b>
            </span>
          </div>
          <div className="ph">
            <h2>Creative &amp; Beauty Trades</h2>
            <p>Apparel and salon enterprise blueprints</p>
          </div>
          <div className="ql-page">{renderCareerAccordions(nvqCreativeData, "nc")}</div>
        </section>
      )}

      {/* ── SCREEN: LOGIN ── */}
      {activeView === "login" && (
        <section id="login" className="flex items-center justify-center min-h-[calc(100vh-58px)] px-6 py-12">
          <div className="login-card">
            <h2>Welcome back</h2>
            <p className="sub">Sign in to track your career exploration</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="igrp">
                <label htmlFor="name-input">NAME</label>
                <input
                  id="name-input"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div className="igrp">
                <label htmlFor="email-input">EMAIL</label>
                <input
                  id="email-input"
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />
              </div>
              <button type="submit" className="login-btn">
                Continue →
              </button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}
