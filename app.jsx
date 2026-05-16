/* ============================================================
   app.jsx — navigace, footer a kořenová App komponenta
   Zde se řídí navigace mezi obrazovkami (home ↔ recept)
   ============================================================ */

/* ---- Navigace -------------------------------------------------- */

const Nav = ({ activeScreen, onHome, onRecipes, onAbout, searchQuery, onSearch }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const close = () => setMenuOpen(false);

  const navLink = (label, screen, onClick) => (
    <a
      className={`nav-link${activeScreen === screen ? " active" : ""}`}
      href="#"
      onClick={(e) => { e.preventDefault(); onClick(); close(); }}
    >{label}</a>
  );

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <Logo onClick={() => { onHome(); close(); }} />
          <nav className="nav-links">
            {navLink("Domů",    "home",    onHome)}
            {navLink("Recepty", "recipes", onRecipes)}
            <a className="nav-link" href="#">Tipy &amp; techniky</a>
            {navLink("O mně",   "about",   onAbout)}
          </nav>
          <div className="nav-search">
            <Icon name="search" size={16} stroke={1.75} />
            <input
              placeholder="Hledat recept…"
              aria-label="Hledat recept"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen
              ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
            }
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="nav-mobile" role="navigation" aria-label="Mobilní menu">
          {navLink("Domů",    "home",    onHome)}
          {navLink("Recepty", "recipes", onRecipes)}
          <a className="nav-link" href="#" onClick={close}>Tipy &amp; techniky</a>
          {navLink("O mně",   "about",   onAbout)}
          <div className="nav-mobile-search">
            <Icon name="search" size={16} stroke={1.75} />
            <input
              placeholder="Hledat recept…"
              aria-label="Hledat recept"
              value={searchQuery}
              onChange={(e) => {
                onSearch(e.target.value);
                clearTimeout(window._navSearchTimer);
                if (e.target.value.trim()) {
                  window._navSearchTimer = setTimeout(close, 800);
                }
              }}
            />
            {searchQuery.trim() && (
              <button className="nav-mobile-search-btn" onClick={close} aria-label="Zobrazit výsledky">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

/* ---- Footer ----------------------------------------------------- */

const Footer = ({ onAbout, onRecipesWithCategory, onPrivacy, onContact }) => (
  <footer className="container footer">
    <div className="footer-inner">

      {/* Sloupec 1: pouze logo */}
      <div>
        <img src="images/logo.svg" alt="Evka pečie" style={{ height: 68, display: "block" }} />
      </div>

      {/* Sloupec 2: Recepty — s filtrem kategorie */}
      <div className="footer-col">
        <h4>Recepty</h4>
        <a href="#" onClick={(e) => { e.preventDefault(); onRecipesWithCategory('Tradiční'); }}>Tradiční</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onRecipesWithCategory('Sladké'); }}>Sladké</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onRecipesWithCategory('Slané'); }}>Slané</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onRecipesWithCategory('Rychlé'); }}>Rychlé</a>
      </div>

      {/* Sloupec 3: Blog */}
      <div className="footer-col">
        <h4>Blog</h4>
        <a href="#" onClick={(e) => { e.preventDefault(); onAbout(); }}>O mně</a>
        <a href="#">Tipy &amp; techniky</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onContact(); }}>Kontaktujte mě</a>
      </div>

      {/* Newsletter — skryté, zatím není připraveno */}

    </div>
    <div className="footer-meta">
      <span>© 2026 Evka pečie · Tradiční recepty SK/CZ</span>
      <span>
        <a href="#" style={{ color: "inherit" }} onClick={(e) => { e.preventDefault(); onPrivacy(); }}>Ochrana soukromí</a>
        {" · "}
        <a href="#" style={{ color: "inherit" }}>Podmínky</a>
      </span>
    </div>
  </footer>
);

/* ---- App — řídí navigaci mezi obrazovkami ------------------- */

function App() {
  const [screen, setScreen] = React.useState({ name: "home", slug: null });
  const [searchQuery, setSearchQuery] = React.useState('');
  const [scrollToContact, setScrollToContact] = React.useState(false);

  const navigate = (newScreen) => {
    window.history.pushState(newScreen, '');
    setScreen(newScreen);
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    window.history.replaceState({ name: "home", slug: null }, '');
    const onPop = (e) => {
      if (e.state) setScreen(e.state);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const goHome    = () => { setSearchQuery(''); navigate({ name: "home",    slug: null }); };
  const goRecipes = () => { navigate({ name: "recipes", slug: null, category: null }); };
  const goAbout   = () => { setScrollToContact(false); navigate({ name: "about", slug: null }); };
  const goContact = () => { setScrollToContact(true);  navigate({ name: "about", slug: null }); };
  const goPrivacy = () => { navigate({ name: "privacy", slug: null }); };
  const openRec   = (slug) => { navigate({ name: "recipe", slug }); };
  const goRecipesWithCategory = (cat) => { navigate({ name: "recipes", slug: null, category: cat }); };

  const handleSearch = (q) => {
    setSearchQuery(q);
    if (q.trim()) {
      navigate({ name: "recipes", slug: null });
    }
  };

  return (
    <>
      <Nav
        activeScreen={screen.name}
        onHome={goHome}
        onRecipes={goRecipes}
        onAbout={goAbout}
        searchQuery={searchQuery}
        onSearch={handleSearch}
      />
      {screen.name === "home"
        ? <Home onOpenRecipe={openRec} onGoRecipes={goRecipes} />
        : screen.name === "recipes"
        ? <RecipesList onOpenRecipe={openRec} searchQuery={searchQuery} initialCategory={screen.category || null} />
        : screen.name === "about"
        ? <About onGoRecipes={goRecipes} scrollToContact={scrollToContact} onPrivacy={goPrivacy} />
        : screen.name === "privacy"
        ? <Privacy onHome={goHome} />
        : <Recipe slug={screen.slug} onBack={goHome} onOpenRecipe={openRec} />}
      <Footer onAbout={goAbout} onRecipesWithCategory={goRecipesWithCategory} onPrivacy={goPrivacy} onContact={goContact} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
