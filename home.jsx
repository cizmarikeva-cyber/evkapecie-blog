/* ============================================================
   home.jsx — domovská stránka
   ============================================================ */

const Home = ({ onOpenRecipe, onGoRecipes }) => (
  <main>

    {/* HERO */}
    <section className="container hero">
      <div className="hero-inner">
        <div className="hero-text-top">
          <Eyebrow>Recept týdne</Eyebrow>
          <h1 className="hero-title" style={{ marginTop: 22 }}
              dangerouslySetInnerHTML={{ __html: FEATURED.title }} />
        </div>

        <div className={`hero-image${!FEATURED.image ? " paint-" + FEATURED.paint : ""}`}
             onClick={() => onOpenRecipe(FEATURED.slug)}
             style={{ cursor: "pointer", ...bgImage(FEATURED.image) }}>
          <div className="badge">
            <b>{FEATURED.time}</b> · {FEATURED.servings} · {FEATURED.level}
          </div>
        </div>

        <div className="hero-text-bottom">
          <p className="hero-sub">{FEATURED.intro}</p>
          <div className="hero-cta">
            <Button variant="primary" size="large"
                    onClick={() => onOpenRecipe(FEATURED.slug)}>
              Zobrazit recept <span className="arrow">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* NEJNOVĚJŠÍ RECEPTY */}
    <section className="container section">
      <div className="section-head">
        <div>
          <Eyebrow>Aktuálně</Eyebrow>
          <h2 className="section-title"><em>Nejnovější</em> recepty</h2>
        </div>
        <a className="section-more" href="#" onClick={(e) => { e.preventDefault(); onGoRecipes(); }}>Všechny recepty <span className="arrow">→</span></a>
      </div>
      <div className="recipe-grid">
        {RECIPES.filter(r => r.featured).map(r => (
          <RecipeCard key={r.slug} recipe={r} onOpen={() => onOpenRecipe(r.slug)} />
        ))}
      </div>
    </section>

    {/* NEJOBLÍBENĚJŠÍ RECEPTY */}
    <section className="container section" style={{ paddingTop: 16 }}>
      <div className="section-head">
        <div>
          <Eyebrow>Z archivu</Eyebrow>
          <h2 className="section-title"><em>Nejoblíbenější</em> recepty</h2>
        </div>
        <a className="section-more" href="#" onClick={(e) => { e.preventDefault(); onGoRecipes(); }}>Všechny recepty <span className="arrow">→</span></a>
      </div>
      <div className="recipe-grid">
        {RECIPES.filter(r => r.popular).map(r => (
          <RecipeCard key={r.slug} recipe={r} onOpen={() => onOpenRecipe(r.slug)} />
        ))}
      </div>
    </section>

    {/* NEWSLETTER — skryté, zatím není připraveno */}

  </main>
);

Object.assign(window, { Home });
