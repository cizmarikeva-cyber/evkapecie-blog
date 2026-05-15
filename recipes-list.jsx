/* ============================================================
   recipes-list.jsx — stránka so všetkými receptami
   Sekcie: Hlavička · Filter podľa kategórie · Mriežka receptov
   ============================================================ */

const PAGE_SIZE = 9;

const RecipesList = ({ onOpenRecipe, searchQuery = '', initialCategory = null }) => {
  const [activeCategory, setActiveCategory] = React.useState(initialCategory);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => { setActiveCategory(initialCategory); setPage(1); }, [initialCategory]);
  React.useEffect(() => { setPage(1); }, [searchQuery, activeCategory]);

  /* Normalizácia: malé písmená + bez diakritiky */
  const norm = s =>
    s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  /* Prehľadáva názov, kategórie aj suroviny receptu */
  const matchesQuery = recipe => {
    const q = norm(searchQuery.trim());
    if (!q) return true;

    const title = norm(recipe.title.replace(/<[^>]+>/g, ''));
    if (title.includes(q)) return true;

    if (recipe.categories.some(c => norm(c).includes(q))) return true;

    const data = RECIPE_DATA[recipe.slug];
    if (data) {
      const inIngredients = data.ingredients.some(group =>
        group.items.some(item => norm(item.name).includes(q))
      );
      if (inIngredients) return true;
    }

    return false;
  };

  const filtered = RECIPES
    .filter(r => !activeCategory || r.categories.includes(activeCategory))
    .filter(matchesQuery);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const isSearching = searchQuery.trim().length > 0;

  const goToPage = p => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>

      {/* HLAVIČKA */}
      <section className="container" style={{ paddingTop: 56, paddingBottom: 0 }}>
        <Eyebrow>Prehľad</Eyebrow>
        <h1 className="recipes-list-title">
          <em>Všetky</em> recepty
        </h1>

        {/* FILTER PODĽA KATEGÓRIE */}
        <div className="filter-strip">
          <button
            className={`filter-pill${activeCategory === null ? ' active' : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            Všetky
            <span className="filter-pill-count">{RECIPES.length}</span>
          </button>

          {CATEGORIES.map(cat => {
            const count = RECIPES.filter(r => r.categories.includes(cat.name)).length;
            return (
              <button
                key={cat.name}
                className={`filter-pill${activeCategory === cat.name ? ' active' : ''}${count === 0 ? ' disabled' : ''}`}
                onClick={() => count > 0 && setActiveCategory(cat.name)}
                disabled={count === 0}
              >
                {cat.name}
                <span className="filter-pill-count">{count}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* MRIEŽKA RECEPTOV */}
      <section className="container" style={{ paddingBottom: 96 }}>
        {isSearching && (
          <p className="recipes-search-info">
            {filtered.length > 0
              ? <>Nájdených <b>{filtered.length}</b> {filtered.length === 1 ? 'recept' : filtered.length < 5 ? 'recepty' : 'receptov'} pre „{searchQuery.trim()}"</>
              : <>Žiadne výsledky pre „{searchQuery.trim()}"</>
            }
          </p>
        )}

        {paginated.length > 0 ? (
          <div className="recipe-grid">
            {paginated.map(r => (
              <RecipeCard key={r.slug} recipe={r} onOpen={() => onOpenRecipe(r.slug)} />
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--popol)', fontFamily: 'var(--font-body)', fontSize: 16, padding: '32px 0' }}>
            {isSearching
              ? 'Skús iné slovo alebo zruš filter kategórie.'
              : 'V tejto kategórii zatiaľ žiadne recepty nie sú.'
            }
          </p>
        )}

        {/* STRÁNKOVANIE */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              aria-label="Predchádzajúca strana"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                className={`pagination-btn${p === page ? ' active' : ''}`}
                onClick={() => goToPage(p)}
                aria-label={`Strana ${p}`}
                aria-current={p === page ? 'page' : undefined}
              >
                {p}
              </button>
            ))}

            <button
              className="pagination-btn"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              aria-label="Nasledujúca strana"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        )}
      </section>

    </main>
  );
};

Object.assign(window, { RecipesList });
