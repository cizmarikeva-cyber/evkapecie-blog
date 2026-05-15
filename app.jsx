/* ============================================================
   app.jsx — navigácia, footer a koreňová App komponenta
   Tu sa riadi navigácia medzi obrazovkami (home ↔ recept)
   ============================================================ */

/* ---- Navigácia -------------------------------------------------- */

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
            {navLink("Domov",   "home",    onHome)}
            {navLink("Recepty", "recipes", onRecipes)}
            <a className="nav-link" href="#">Tipy &amp; techniky</a>
            {navLink("O mne",   "about",   onAbout)}
          </nav>
          <div className="nav-search">
            <Icon name="search" size={16} stroke={1.75} />
            <input
              placeholder="Hľadať recept…"
              aria-label="Hľadať recept"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? "Zatvoriť menu" : "Otvoriť menu"}
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
        <div className="nav-mobile" role="navigation" aria-label="Mobilné menu">
          {navLink("Domov",   "home",    onHome)}
          {navLink("Recepty", "recipes", onRecipes)}
          <a className="nav-link" href="#" onClick={close}>Tipy &amp; techniky</a>
          {navLink("O mne",   "about",   onAbout)}
          <div className="nav-mobile-search">
            <Icon name="search" size={16} stroke={1.75} />
            <input
              placeholder="Hľadať recept…"
              aria-label="Hľadať recept"
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
              <button className="nav-mobile-search-btn" onClick={close} aria-label="Zobraziť výsledky">
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

      {/* Stĺpec 1: iba logo */}
      <div>
        <img src="images/logo.svg" alt="Evka pečie" style={{ height: 68, display: "block" }} />
      </div>

      {/* Stĺpec 2: Recepty — s filtrom kategórie */}
      <div className="footer-col">
        <h4>Recepty</h4>
        <a href="#" onClick={(e) => { e.preventDefault(); onRecipesWithCategory('Tradičné'); }}>Tradičné</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onRecipesWithCategory('Sladké'); }}>Sladké</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onRecipesWithCategory('Slané'); }}>Slané</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onRecipesWithCategory('Rýchle'); }}>Rýchle</a>
      </div>

      {/* Stĺpec 3: Blog */}
      <div className="footer-col">
        <h4>Blog</h4>
        <a href="#" onClick={(e) => { e.preventDefault(); onAbout(); }}>O mne</a>
        <a href="#">Tipy &amp; techniky</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onContact(); }}>Kontaktujte ma</a>
      </div>

      {/* Stĺpec 4: Newsletter */}
      <div className="footer-col">
        <h4>Newsletter</h4>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13,
                    color: "var(--popol)", margin: "0 0 10px", lineHeight: 1.5 }}>
          Jeden recept týždenne, žiadny spam.
        </p>
        <Button variant="secondary" size="small">Prihlásiť sa</Button>
      </div>

    </div>
    <div className="footer-meta">
      <span>© 2026 Evka pečie · Tradičné recepty SK/CZ</span>
      <span>
        <a href="#" style={{ color: "inherit" }} onClick={(e) => { e.preventDefault(); onPrivacy(); }}>Ochrana súkromia</a>
        {" · "}
        <a href="#" style={{ color: "inherit" }}>Podmienky</a>
      </span>
    </div>
  </footer>
);

/* ---- App — riadi navigáciu medzi obrazovkami ------------------- */

function App() {
  const [screen, setScreen] = React.useState({ name: "home", slug: null });
  const [searchQuery, setSearchQuery] = React.useState('');
  const [scrollToContact, setScrollToContact] = React.useState(false);

  const goHome    = () => { setScreen({ name: "home",    slug: null }); setSearchQuery(''); window.scrollTo(0, 0); };
  const goRecipes = () => { setScreen({ name: "recipes", slug: null, category: null }); window.scrollTo(0, 0); };
  const goAbout   = () => { setScrollToContact(false); setScreen({ name: "about", slug: null }); window.scrollTo(0, 0); };
  const goContact = () => { setScrollToContact(true);  setScreen({ name: "about", slug: null }); window.scrollTo(0, 0); };
  const goPrivacy = () => { setScreen({ name: "privacy", slug: null }); window.scrollTo(0, 0); };
  const openRec   = (slug) => { setScreen({ name: "recipe", slug });    window.scrollTo(0, 0); };
  const goRecipesWithCategory = (cat) => { setScreen({ name: "recipes", slug: null, category: cat }); window.scrollTo(0, 0); };

  const handleSearch = (q) => {
    setSearchQuery(q);
    if (q.trim()) {
      setScreen({ name: "recipes", slug: null });
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
