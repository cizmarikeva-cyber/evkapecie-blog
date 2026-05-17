/* ============================================================
   recipe.jsx — detail receptu
   Sekce: Hero · Suroviny (sidebar) · Postup · Podpis · Další recepty
   ============================================================ */

const Recipe = ({ slug, onBack, onOpenRecipe }) => {
  var allRecipes = [FEATURED].concat(RECIPES);
  var recipe = allRecipes.find(function(r) { return r.slug === slug; }) || FEATURED;
  var data = RECIPE_DATA[recipe.slug] || { intro: "", ingredients: [], steps: [] };
  const [shareLabel, setShareLabel] = React.useState('Sdílet');

  const handleShare = () => {
    const title = recipe.title.replace(/<[^>]*>/g, '');
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: 'Evka pečie — ' + title, url });
    } else {
      navigator.clipboard.writeText(url).then(() => {
        setShareLabel('Odkaz zkopírován!');
        setTimeout(() => setShareLabel('Sdílet'), 2500);
      });
    }
  };

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

        {/* Zpět */}
        <a className="back" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>
          <Icon name="arrowLeft" size={14} stroke={2} /> Zpět na recepty
        </a>

        {/* NADPIS IBA PRE TLAČ */}
        <div className="print-title">
          <div dangerouslySetInnerHTML={{ __html: recipe.title }} />
        </div>

        {/* HERO OBRÁZEK */}
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
                <div className="lbl">Porcí</div>
                <div className="val">{recipe.servings}</div>
              </div>
              <div className="stat">
                <div className="lbl">Náročnost</div>
                <div className="val">{recipe.level}</div>
              </div>
            </div>
          </div>
        </div>

        {/* TĚLO — sidebar + obsah */}
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
              <p style={{ fontStyle: "italic", color: "var(--popol)" }}>Suroviny brzy doplníme…</p>
            )}
          </aside>

          {/* OBSAH: úvod, postup, podpis */}
          <article className="recipe-content">
            {data.intro && <p className="recipe-intro">{data.intro}</p>}

            <div className="recipe-actions">
              <Button variant="ghost" size="small" onClick={() => window.print()}>
                <Icon name="print" size={14} /> Tisknout
              </Button>
              <Button variant="ghost" size="small" onClick={handleShare}>
                <Icon name="share" size={14} /> {shareLabel}
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
              <p style={{ fontStyle: "italic", color: "var(--popol)", marginTop: 32 }}>Postup brzy doplníme…</p>
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
                    Zobrazit video recept na Instagramu →
                  </a>
                </blockquote>
              </div>
            )}

            <div className="divider"><FlourishDivider /></div>

            <div className="signature">
              <img src="images/portret2.jpeg" alt="Evka" className="sig-portrait" />
              <div className="sig-body">
                <b>@evkapecie</b>
                Když budeš péct, pošli mi fotku na Instagram nebo Facebook — nejradši mám ty z prvního pokusu, i když se nepovede. Pak si můžeme povídat o tom, co vylepšit.
              </div>
            </div>
          </article>
        </div>

        {/* PATIČKA PRE TLAČ */}
        <div className="print-footer">evkapecie.cz</div>

        {/* SOUVISEJÍCÍ RECEPTY */}
        <section className="recipe-related" style={{ padding: "72px 0 24px" }}>
          <div className="section-head">
            <div>
              <Eyebrow>Z archivu</Eyebrow>
              <h2 className="section-title">Další <em>recepty</em></h2>
            </div>
            <a className="section-more" href="#" onClick={(e) => { e.preventDefault(); onBack(); }}>Všechny recepty <span className="arrow">→</span></a>
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
