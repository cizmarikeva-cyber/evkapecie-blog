/* ============================================================
   home.jsx — domovská stránka
   ============================================================ */

const Home = ({ onOpenRecipe, onGoRecipes }) => (
  <main>

    {/* HERO */}
    <section className="container hero">
      <div className="hero-inner">
        <div>
          <Eyebrow>Recept týdne</Eyebrow>
          <h1 className="hero-title" style={{ marginTop: 22 }}>
            Podplameník <em>s klobásou a nivou</em>
          </h1>
          <p className="hero-sub">
            Třetí díl série o podplameníku bez hnětení patří kombinaci, která vyhrála v anketě – klobása a niva. Musím uznat, že máte výborný vkus, protože tuto verzi jsem pekla rovnou z dvojité dávky. 🤤 Základ zůstává stejný: žádné hnětení, žádná dřina, jen pár přeložení a čas. To těsto je prostě skvělé v tom, jak je jednoduché.
          </p>
          <div className="hero-cta">
            <Button variant="primary" size="large"
                    onClick={() => onOpenRecipe(FEATURED.slug)}>
              Zobrazit recept <span className="arrow">→</span>
            </Button>
          </div>
        </div>

        <div className={`hero-image${!FEATURED.image ? " paint-" + FEATURED.paint : ""}`}
             onClick={() => onOpenRecipe(FEATURED.slug)}
             style={{ cursor: "pointer", ...bgImage(FEATURED.image) }}>
          <div className="badge">
            <b>{FEATURED.time}</b> · {FEATURED.servings} · {FEATURED.level}
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

    {/* NEWSLETTER */}
    <section className="container">
      <div className="newsletter">
        <div className="newsletter-inner">
          <div>
            <Eyebrow color="var(--med-soft)">Každou neděli ráno</Eyebrow>
            <h2 style={{ marginTop: 16 }}>
              Jeden recept, <em>jeden tip</em>, žádný spam.
            </h2>
            <p>
              Každou neděli vyberu jeden recept, který se hodí přesně na ten týden
              — sváteční, sezónní, nebo prostě takový, který se snadno povede.
            </p>
          </div>
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input placeholder="vas@email.cz" type="email" aria-label="E-mail" />
              <button type="submit">Přihlásit se</button>
            </form>
            <div className="newsletter-hand">— zatím nás je 8 412</div>
          </div>
        </div>
      </div>
    </section>

  </main>
);

Object.assign(window, { Home });
