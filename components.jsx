/* ============================================================
   components.jsx — zdieľané UI komponenty
   Ikony, SVG assety, Logo, Button, Pill, Eyebrow,
   RecipeCard, CategoryTile, CollectionCard
   ============================================================ */

/* ---- Helper: pozadie s fotkou alebo gradientom ----------------- */
/* Ak recept/featured má image, použije sa foto. Inak paint gradient. */

function bgImage(image) {
  if (!image) return {};
  return {
    backgroundImage:    "url(" + image + ")",
    backgroundSize:     "cover",
    backgroundPosition: "center",
  };
}

/* ---- SVG assety ------------------------------------------------- */

const SealEvka = ({ style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" fill="none"
       role="img" aria-label="Evkina pečať" style={style}>
    <g transform="rotate(-8 70 70)">
      <circle cx="70" cy="70" r="62" fill="none" stroke="#780000" strokeWidth="2" />
      <circle cx="70" cy="70" r="55" fill="none" stroke="#780000" strokeWidth="0.75" />
      <defs>
        <path id="seal-ring" d="M70 70 m-46 0 a 46 46 0 1 1 92 0 a 46 46 0 1 1 -92 0" />
      </defs>
      <text fontFamily="EB Garamond, Garamond, Georgia, serif" fontSize="10.5"
            fontStyle="italic" fontWeight="600" fill="#780000" letterSpacing="3">
        <textPath href="#seal-ring" startOffset="2%">EVKINA PEČAŤ · OVERENÝ RECEPT ·</textPath>
      </text>
      <text x="70" y="80" textAnchor="middle"
            fontFamily="EB Garamond, Garamond, Georgia, serif"
            fontStyle="italic" fontWeight="700" fontSize="42" fill="#003049">Evka</text>
      <text x="70" y="98" textAnchor="middle"
            fontFamily="EB Garamond, Garamond, Georgia, serif"
            fontStyle="italic" fontSize="9" fontWeight="500" letterSpacing="2" fill="#5B7180">— sk / cz —</text>
    </g>
  </svg>
);

const FlourishDivider = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 24" fill="none"
       role="img" aria-label="" style={{ width: 240, opacity: 0.85 }}>
    <g stroke="#5B7180" strokeWidth="1.25" strokeLinecap="round" fill="none">
      <path d="M10 12 q40 -10 60 0 t60 -2" />
      <path d="M230 10 q40 12 60 2 t60 -2" />
      <path d="M50 7 q4 -4 8 -1" /><path d="M86 14 q4 4 8 1" />
      <path d="M114 7 q4 -4 8 -1" /><path d="M260 14 q4 4 8 1" />
      <path d="M294 7 q4 -4 8 -1" /><path d="M324 14 q4 4 8 1" />
    </g>
    <g transform="translate(180 12)" fill="#780000">
      <path d="M0 -8 L2.4 -2.4 L8 0 L2.4 2.4 L0 8 L-2.4 2.4 L-8 0 L-2.4 -2.4 Z" />
    </g>
  </svg>
);

const LogoHorizontal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 80" fill="none"
       role="img" aria-label="Evka pečie"
       style={{ width: 200, display: "block", marginBottom: 16 }}>
    <circle cx="34" cy="40" r="28" fill="#003049" />
    <text x="34" y="52" textAnchor="middle"
          fontFamily="EB Garamond, Garamond, Georgia, serif"
          fontStyle="italic" fontWeight="600" fontSize="40" letterSpacing="-1" fill="#FDF0D5">E</text>
    <circle cx="48" cy="18" r="2.6" fill="#C1121F" />
    <text x="76" y="38"
          fontFamily="EB Garamond, Garamond, Georgia, serif"
          fontWeight="700" fontSize="26" letterSpacing="-0.4" fill="#003049">
      Evka<tspan dx="3" fontStyle="italic" fill="#780000">pečie</tspan>
    </text>
    <text x="76" y="58"
          fontFamily="EB Garamond, Garamond, Georgia, serif"
          fontStyle="italic" fontSize="12" fontWeight="500" letterSpacing="1" fill="#5B7180">
      tradičné recepty · sk / cz
    </text>
  </svg>
);

/* ---- ikonový systém --------------------------------------------- */

const Icon = ({ name, size = 20, stroke = 1.75 }) => {
  const paths = {
    clock:     <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    save:      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>,
    print:     <><path d="M4 9V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4"/><rect x="6" y="14" width="12" height="7" rx="1"/><path d="M4 14h16v-4H4z"/></>,
    share:     <><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4"/><path d="m15.4 6.5-6.8 4"/></>,
    search:    <><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></>,
    heart:     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>,
    arrowLeft: <><path d="M21 12H3"/><path d="m11 19-8-7 8-7"/></>,
    cookie:    <><circle cx="12" cy="12" r="9"/><circle cx="9" cy="9" r=".8" fill="currentColor"/><circle cx="14" cy="13" r=".8" fill="currentColor"/><circle cx="10" cy="15" r=".8" fill="currentColor"/><circle cx="15" cy="8" r=".8" fill="currentColor"/></>,
    cake:      <><path d="M3 14v6h18v-6"/><path d="M3 14a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3"/><path d="M12 11V6"/><path d="M9 6c0-1.5 1.3-3 3-3s3 1.5 3 3"/></>,
    bread:     <><path d="M4 12a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M8 12v4M12 12v4M16 12v4"/></>,
    apple:     <><path d="M12 6c0-2 1.5-3.5 3.5-3.5"/><path d="M17 8c-1.5-1.5-3.5-1.5-5 0-1.5-1.5-3.5-1.5-5 0-2.5 2.5-1 8 .5 10.5 1 1.5 3 1.5 4.5 0 1.5 1.5 3.5 1.5 4.5 0 1.5-2.5 3-8 .5-10.5Z"/></>,
    leaf:      <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96a1 1 0 0 1 1.5 1.05c-.78 7.1-5.4 11.99-9.7 11.99Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></>,
    wheat:     <><path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/></>,
    star:      <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>,
    egg:       <><path d="M12 22c6 0 8-4.5 8-9.5 0-6-3.5-10.5-8-10.5S4 6.5 4 12.5C4 17.5 6 22 12 22z"/></>,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></>,
    tiktok:    <><path d="M16 4v3a4 4 0 0 0 4 4"/><path d="M16 4v12.5a4.5 4.5 0 1 1-4.5-4.5"/></>,
    youtube:   <><rect x="2" y="6" width="20" height="12" rx="3"/><polygon points="10,9.5 15,12 10,14.5" fill="currentColor" stroke="none"/></>,
    facebook:  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth={stroke}
         strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};

/* ---- Logo ------------------------------------------------------- */

const Logo = ({ onClick }) => (
  <button className="nav-brand" onClick={onClick} aria-label="Evka pečie — domov">
    <img src="images/logo.svg" alt="Evka pečie" height="68" />
  </button>
);

/* ---- Button ----------------------------------------------------- */

const Button = ({ variant = "primary", size = "default", children, ...rest }) => {
  const cls = ["btn", `btn-${variant}`, size !== "default" && `btn-${size}`]
    .filter(Boolean).join(" ");
  return <button className={cls} {...rest}>{children}</button>;
};

/* ---- Pill ------------------------------------------------------- */

const Pill = ({ tone, dot, children }) => {
  const cls = ["pill", tone && `pill-${tone}`].filter(Boolean).join(" ");
  return (
    <span className={cls}>
      {dot && <span className="dot" />}
      {children}
    </span>
  );
};

/* ---- Eyebrow ---------------------------------------------------- */

const Eyebrow = ({ children, color }) => (
  <div className="eyebrow" style={color ? { color } : null}>{children}</div>
);

/* ---- RecipeCard ------------------------------------------------- */

const RecipeCard = ({ recipe, compact, onOpen }) => (
  <article className={`recipe-card${compact ? " compact" : ""}`}
           onClick={() => onOpen && onOpen()}>
    <div className="recipe-card-imgwrap">
      <div className={`recipe-card-img${!recipe.image ? " paint-" + recipe.paint : ""}`}
           style={bgImage(recipe.image)} />
      <span className="eyebrow-stamp">{recipe.categories[0]}</span>
    </div>
    <div className="recipe-card-body">
      <h3 dangerouslySetInnerHTML={{ __html: recipe.title }} />
      <div className="recipe-card-meta">
        <span><b>{recipe.time}</b></span>
        <span><b>{recipe.servings}</b></span>
        <span>{recipe.level}</span>
      </div>
    </div>
  </article>
);

/* ---- CategoryTile ----------------------------------------------- */

const CategoryTile = ({ icon, name, count }) => (
  <div className="cat-tile">
    <div className="gloss"><Icon name={icon} size={28} stroke={1.6} /></div>
    <div className="name">{name}</div>
    <div className="cnt">{count} receptov</div>
  </div>
);

/* ---- CollectionCard --------------------------------------------- */

const CollectionCard = ({ paint, eyebrow, title, count, large }) => (
  <div className={`collection-card${large ? " large" : ""}`}>
    <div className={`recipe-card-img paint-${paint}`}
         style={{ position: "absolute", inset: 0, zIndex: 0 }} />
    <div style={{
      position: "absolute", inset: 0, zIndex: 1,
      background: "linear-gradient(160deg, rgba(42,33,27,.25) 30%, rgba(42,33,27,.78) 100%)"
    }} />
    <div style={{ position: "relative", zIndex: 2 }}>
      <Eyebrow>{eyebrow}</Eyebrow>
    </div>
    <div style={{ position: "relative", zIndex: 2 }}>
      <h3>{title}</h3>
      <div className="meta" style={{ marginTop: 12 }}>
        <span>{count} receptov</span>
        <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--med-soft)" }}>
          otvoriť →
        </span>
      </div>
    </div>
  </div>
);

/* Exportujeme do globálneho scope (Babel standalone vyžaduje) */
Object.assign(window, {
  SealEvka, FlourishDivider, LogoHorizontal,
  Icon, Logo, Button, Pill, Eyebrow,
  RecipeCard, CategoryTile, CollectionCard,
});
