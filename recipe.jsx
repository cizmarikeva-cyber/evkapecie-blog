/* ============================================================
   recipe.jsx — detail receptu
   Sekcie: Hero · Suroviny (sidebar) · Postup · Podpis · Ďalšie recepty
   ============================================================ */

const Recipe = ({ slug, onBack, onOpenRecipe }) => {
  var allRecipes = [FEATURED].concat(RECIPES);
  var recipe = allRecipes.find(function(r) { return r.slug === slug; }) || FEATURED;
  var data = RECIPE_DATA[recipe.slug] || { intro: "", ingredients: [], steps: [] };

  React.useEffect(function() {
    if (!data.instagram) return;
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      var s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, [slug]);

  return (
    <main>
      <div className="container" style={{ paddingTop: 24 }}>

        {/* Späť */}
        <a className="back" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>
          <Icon name="arrowLeft" size={14} stroke={2} /> Späť na recepty
        </a>

        {/* HERO OBRÁZOK */}
        <div className="recipe-hero">
          <div className={`recipe-hero-paint${!recipe.image ? " paint-" + recipe.paint : ""}`}
               style={bgImage(recipe.image)} />
          <div className="recipe-hero-overlay" />
          <div className="recipe-hero-content">
            <div>
              <Eyebrow color="var(--med-soft)">{recipe.categories.join(" · ")}</Eyebrow>
              <h1 dangerouslySetInnerHTML={{ __html: recipe.title }} />
            </div>
            <div className="recipe-hero-stats">
              <div className="stat">
                <div className="lbl">Čas</div>
                <div className="val">{recipe.time}</div>
              </div>
              <div className="stat">
                <div className="lbl">Porcií</div>
                <div className="val">{recipe.servings}</div>
              </div>
              <div className="stat">
                <div className="lbl">Náročnosť</div>
                <div className="val">{recipe.level}</div>
              </div>
            </div>
          </div>
        </div>

        {/* TELO — sidebar + obsah */}
        <div className="recipe-body">

          {/* SIDEBAR: suroviny */}
          <aside className="recipe-side">
            <h4>Suroviny</h4>
            {data.ingredients.length > 0 ? (
              data.ingredients.map(function(group) {
                return (
                  <div className="ingredient-group" key={group.group}>
                    <div className="grp-name">{group.group}</div>
                    <ul>
                      {group.items.map(function(item) {
                        return (
                          <li key={item.name}>
                            <b>{item.amount}</b>
                            <span>{item.name}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })
            ) : (
              <p style={{ fontStyle: "italic", color: "var(--popol)" }}>Suroviny čoskoro doplníme…</p>
            )}
          </aside>

          {/* OBSAH: úvod, postup, podpis */}
          <article className="recipe-content">
            {data.intro && <p className="recipe-intro">{data.intro}</p>}

            <div className="recipe-actions">
              <Button variant="ghost" size="small">
                <Icon name="print" size={14} /> Tlačiť
              </Button>
              <Button variant="ghost" size="small">
                <Icon name="share" size={14} /> Zdieľať
              </Button>
            </div>

            {data.steps.length > 0 ? (
              data.steps.map(function(section, si) {
                return (
                  <React.Fragment key={si}>
                    <h2>
                      <small>{section.items.length === 1
                        ? "Krok " + section.startAt
                        : "Kroky " + section.startAt + "–" + (section.startAt + section.items.length - 1)}
                      </small>
                      {section.heading}
                    </h2>
                    <ol className="steps" start={section.startAt}>
                      {section.items.map(function(step, i) {
                        return (
                          <li key={i}>
                            <div dangerouslySetInnerHTML={{ __html: step }} />
                          </li>
                        );
                      })}
                    </ol>
                  </React.Fragment>
                );
              })
            ) : (
              <p style={{ fontStyle: "italic", color: "var(--popol)", marginTop: 32 }}>Postup čoskoro doplníme…</p>
            )}

            {data.tips && (
              <div className="recipe-tips">
                <h4>{data.tips.heading}</h4>
                <ul>
                  {data.tips.items.map(function(tip, i) {
                    return <li key={i}>{tip}</li>;
                  })}
                </ul>
              </div>
            )}

            {data.instagram && (
              <div className="recipe-reel">
                <div className="reel-label">
                  <Icon name="instagram" size={14} stroke={1.6} /> Video recept
                </div>
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={data.instagram}
                  data-instgrm-version="14"
                  style={{ maxWidth: 500, width: "80%", minWidth: 326, border: "1px solid #dbdbdb", borderRadius: 12 }}
                >
                  <a href={data.instagram} target="_blank" rel="noopener noreferrer">
                    Pozrieť video recept na Instagrame →
                  </a>
                </blockquote>
              </div>
            )}

            <div className="divider"><FlourishDivider /></div>

            <div className="signature">
              <img src="images/portret2.jpeg" alt="Evka" className="sig-portrait" />
              <div className="sig-body">
                <b>@evkapecie</b>
                Ak budeš piecť, pošli mi fotku na Instagram alebo Facebook — najradšej mám tie z prvého pokusu, aj keď sa nezadarí. Môžme sa potom baviť o tom, čo vylepšiť.
              </div>
            </div>
          </article>
        </div>

        {/* SÚVISIACE RECEPTY */}
        <section style={{ padding: "72px 0 24px" }}>
          <div className="section-head">
            <div>
              <Eyebrow>Hodí sa k tomu</Eyebrow>
              <h2 className="section-title">Ďalšie <em>recepty</em></h2>
            </div>
            <a className="section-more" href="#">Celá kolekcia <span className="arrow">→</span></a>
          </div>
          <div className="recipe-grid four">
            {RECIPES.filter(function(r) { return r.slug !== recipe.slug; }).slice(0, 4).map(function(r) {
              return <RecipeCard key={r.slug} compact recipe={r} onOpen={() => onOpenRecipe(r.slug)} />;
            })}
          </div>
        </section>

      </div>
    </main>
  );
};

Object.assign(window, { Recipe });
