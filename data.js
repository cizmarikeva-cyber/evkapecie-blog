/* ============================================================
   data.js — Evka pečie obsah receptů
   ↳ ZDE MĚNÍŠ TEXTY, RECEPTY, KATEGORIE
   ============================================================ */

/* Recept týdne — zobrazuje se v hero sekci */
var FEATURED = {
  slug:     "kynuty-kolac-s-tvarohem-a-boruvkami",
  categories: ["Sladké", "Tradiční"],
  title:    "Kynutý koláč <em>s tvarohem a borůvkami</em>",
  intro:    "Znáte Kus koláče v Praze? Tenhle recept je moje domácí varianta jejich borůvkového koláče — upečená na plech. Minimum těsta, maximum náplně. Tvaroh je krémový, borůvky šťavnaté a máslová drobenka nahoře mu dodáva nezaměnitelnou chuť.",
  time:     "2 h",
  servings: "1 plech 30×40 cm",
  level:    "Středně náročné",
  paint:    "mak",
  image:    "images/kynuty-kolac-s-tvarohem-a-boruvkami.jpeg",
};

/* Seznam receptů — každý se zobrazí jako karta
   paint: mak | vianocka | jablka | orechy | medovnik | bezlepek | cesnek
   categories: pole, recept může patřit do více kategorií             */
var RECIPES = [
  /* ---- Nejnovější (featured: true) --------------------------------- */
  {
    slug:       "kynuty-kolac-s-tvarohem-a-boruvkami",
    featured:   true,
    categories: ["Sladké", "Tradiční"],
    title:      "Kynutý koláč <em>s tvarohem a borůvkami</em>",
    time:       "2 h",
    servings:   "1 plech 30×40 cm",
    level:      "Středně náročné",
    paint:      "mak",
    image:      "images/kynuty-kolac-s-tvarohem-a-boruvkami.jpeg",
  },
  {
    slug:       "pastel-de-nata",
    featured:   true,
    categories: ["Sladké"],
    title:      "Pastel <em>de nata</em>",
    time:       "2 h",
    servings:   "12 ks",
    level:      "Středně náročné",
    paint:      "vianocka",
    image:      "images/pastel-de-nata.jpeg",
  },
  {
    slug:       "pirohy",
    featured:   true,
    categories: ["Slané", "Vaření", "Tradiční"],
    title:      "Brynzové <em>pirohy</em>",
    time:       "1 h 15 min",
    servings:   "4 porce",
    level:      "Středně náročné",
    paint:      "cesnek",
    image:      "images/pirohy.jpeg",
  },
  {
    slug:       "podplamennik-s-rajcinami",
    categories: ["Slané", "Tradiční"],
    title:      "Podplameník s <em>rajčaty a rozmarýnem</em>",
    time:       "1,5 h",
    servings:   "3 porce",
    level:      "Lehké",
    paint:      "cesnek",
    image:      "images/podplamennik-s-rajcinami.jpeg",
  },
  {
    slug:       "podplamennik-bryndza-udene",
    categories: ["Slané", "Tradiční"],
    title:      "Podplameník s <em>brynzou a uzeným</em>",
    time:       "2 h",
    servings:   "3 porce",
    level:      "Lehké",
    paint:      "medovnik",
    image:      "images/podplamennik-bryndza-udene.jpeg",
  },
  /* ---- Nejoblíbenější (popular: true) ---------------------------- */
  {
    slug:       "podplamennik-s-klobasou-a-nivou",
    popular:    true,
    categories: ["Slané", "Tradiční"],
    title:      "Podplameník <em>s klobásou a nivou</em>",
    time:       "2 h",
    servings:   "6 porcí",
    level:      "Lehké",
    paint:      "cesnek",
    image:      "images/podplamennik-s-klobasou-a-nivou.jpeg",
  },
  {
    slug:       "mrkvovy-kolac",
    popular:    true,
    categories: ["Sladké", "Rychlé"],
    title:      "<em>Mrkvový</em> koláč",
    time:       "1 h 20 min",
    servings:   "20 ks",
    level:      "Lehké",
    paint:      "cesnek",
    image:      "images/mrkvovy-kolac.jpeg",
  },
  {
    slug:       "honzovy-buchty-s-tvarohom",
    popular:    true,
    categories: ["Tradiční", "Sladké"],
    title:      "Honzovy buchty <em>s tvarohem</em>",
    time:       "2 h 30 min",
    servings:   "12 ks",
    level:      "Středně náročné",
    paint:      "cesnek",
    image:      "images/honzovy-buchty-s-tvarohom.jpeg",
  },
  {
    slug:       "lemon-curd",
    categories: ["Sladké", "Rychlé"],
    title:      "Lemon <em>curd</em>",
    time:       "30 min",
    servings:   "—",
    level:      "Lehké",
    paint:      "jablka",
    image:      "images/lemon-curd.jpeg",
  },
  {
    slug:       "machova-torta",
    categories: ["Sladké", "Dorty & dezerty"],
    title:      "<em>Mechový</em> dort",
    time:       "2,5 h",
    servings:   "8–10 porcí",
    level:      "Lehké",
    paint:      "mak",
    image:      "images/machova-torta.jpeg",
  },
  {
    slug:       "syrove-tycinky",
    categories: ["Slané"],
    title:      "Sýrové <em>tyčinky</em>",
    time:       "2,5 h",
    servings:   "20 ks",
    level:      "Středně náročné",
    paint:      "cesnek",
    image:      "images/syrove-tycinky.jpeg",
  },
  {
    slug:       "coko-datlove-gulicky",
    categories: ["Sladké", "Rychlé"],
    title:      "<em>Čoko-datlové</em> kuličky",
    time:       "30 min",
    servings:   "14 ks",
    level:      "Lehké",
    paint:      "mak",
    image:      "images/coko-datlove-gulicky.jpeg",
  },
  {
    slug:       "slane-honzovy-buchty",
    categories: ["Slané", "Vaření", "Tradiční"],
    title:      "<em>Slané</em> Honzovy buchty",
    time:       "3 h",
    servings:   "12 ks",
    level:      "Náročné",
    paint:      "cesnek",
    image:      "images/slane-honzovy-buchty.jpeg",
  },
  {
    slug:       "coko-gulicky-z-bielkov",
    categories: ["Sladké", "Rychlé"],
    title:      "Čoko kuličky <em>z bílků</em>",
    time:       "40 min",
    servings:   "18 ks",
    level:      "Lehké",
    paint:      "mak",
    image:      "images/coko-gulicky-z-bielkov.jpeg",
  },
  {
    slug:       "french-toast",
    categories: ["Sladké", "Rychlé", "Vaření"],
    title:      "French <em>toast</em>",
    time:       "20 min",
    servings:   "1 porce",
    level:      "Lehké",
    paint:      "vianocka",
    image:      "images/french-toast.jpeg",
  },
  {
    slug:       "brownie",
    categories: ["Sladké", "Rychlé"],
    title:      "Brownies <em>s vlašskými ořechy</em>",
    time:       "40 min",
    servings:   "20 ks",
    level:      "Lehké",
    paint:      "mak",
    image:      "images/brownie.jpeg",
  },
  {
    slug:       "mini-cheesecake",
    categories: ["Sladké", "Dorty & dezerty"],
    title:      "Cheesecake <em>s čokoládovou polevou</em>",
    time:       "1 h + chlazení",
    servings:   "6–8 porcí",
    level:      "Středně náročné",
    paint:      "mak",
    image:      "images/mini-cheesecake.jpeg",
  },
  {
    slug:       "linecke-vajicka",
    seasonal:   true,
    categories: ["Tradiční", "Sezónní"],
    title:      "Linecké <em>vajíčka</em>",
    time:       "2 h 30 min",
    servings:   "50 ks",
    level:      "Středně náročné",
    paint:      "medovnik",
    image:      "images/linecke-vajicka.jpeg",
  },
];

/* Kolekce — zobrazují se v sekci "Sezónní kolekce" */
/* var COLLECTIONS = [
  { paint: "vianocka", eyebrow: "Zimní svátky",  title: "Vánoce u babičky",               count: 24, large: true },
  { paint: "jablka",   eyebrow: "Podzim",         title: "Štrúdly, záviny, koláče",        count: 18, large: false },
  { paint: "bezlepek", eyebrow: "Pro každého",    title: "Bezlepkově bez kompromisů",      count: 31, large: false },
]; */

/* Kategorie (strip pod hero sekcí) */
var CATEGORIES = [
  { icon: "wheat",  name: "Slané",          count: 4 },
  { icon: "cake",   name: "Sladké",         count: 4 },
  { icon: "bread",  name: "Tradiční",       count: 5 },
  { icon: "cookie", name: "Rychlé",         count: 1 },
  { icon: "leaf",   name: "Sezónní",        count: 3 },
  { icon: "star",   name: "Dorty & dezerty", count: 0 },
  { icon: "pot",    name: "Vaření",          count: 0 },
];

/* Detailní data receptů — suroviny, kroky, intro
   Každý recept je klíčovaný podle slug.
   Recepty bez dat mají prázdná pole — na stránce se zobrazí "brzy doplníme". */
var RECIPE_DATA = {

  "kynuty-kolac-s-tvarohem-a-boruvkami": {
    intro: "Znáte Kus koláče v Praze? Tenhle recept je moje domácí varianta jejich borůvkového koláče — upečená na plech. Minimum těsta, maximum náplně. Tvaroh je krémový, borůvky šťavnaté a máslová drobenka nahoře mu dodáva nezaměnitelnou chuť.",
    ingredients: [
      {
        group: "Těsto",
        items: [
          { amount: "220 g",   name: "hladká mouka" },
          { amount: "90 ml",   name: "vlažné mléko" },
          { amount: "10 g",    name: "droždí" },
          { amount: "1 ks",    name: "vejce" },
          { amount: "20 g",    name: "cukr krupice" },
          { amount: "1/2 ČL",  name: "sůl (2 g)" },
          { amount: "35 g",    name: "změklé máslo" },
        ],
      },
      {
        group: "Tvarohová náplň",
        items: [
          { amount: "250 g",   name: "plnotučný tvaroh (bez hrudek)" },
          { amount: "200 g",   name: "zakysaná smetana" },
          { amount: "50 g",    name: "cukr krupice" },
          { amount: "1 ks",    name: "žloutek" },
          { amount: " ",       name: "kůra z půlky bio citronu" },
          { amount: " ",       name: "špetka vanilky" },
        ],
      },
      {
        group: "Na vrch",
        items: [
          { amount: "300 g",   name: "mražené borůvky" },
        ],
      },
      {
        group: "Drobenka",
        items: [
          { amount: "45 g",    name: "hladká mouka" },
          { amount: "30 g",    name: "máslo" },
          { amount: "30 g",    name: "cukr krupice" },
        ],
      },
    ],
    steps: [
      {
        heading: "Kynuté těsto",
        startAt: 1,
        items: [
          "Všechny suroviny <b>kromě másla</b> smíchej a hněť cca <b>5 minut</b>. Pak postupně přidávej změklé máslo a hnět dalších <b>5–7 minut</b>.",
          "Přikryj a nechej kynout, dokud těsto <b>nezdvojnásobí objem</b>.",
        ],
      },
      {
        heading: "Drobenka a náplň",
        startAt: 3,
        items: [
          "Mouku, máslo a cukr rychle smíchej prsty na drobenku. Odlož do chladu.",
          "Všechny suroviny na tvarohovou náplň smíchej metličkou dohladka.",
        ],
      },
      {
        heading: "Sestavení a pečení",
        startAt: 5,
        items: [
          "Vykynuté těsto rozválej na velikost plechu <b>30×40 cm</b>. Pomocí válečku ho přenes na plech vystlaný pečicím papírem.",
          "Na vrch natři tvarohovou náplň až po okraje, rozlož borůvky a posyp drobenkou.",
          "Nechej ještě <b>20 minut</b> kynout na plechu.",
          "Peč na <b>200 °C</b> po dobu <b>15–20 minut</b>. Ihned po vytažení z trouby potři ještě horký koláč rozpuštěným máslem.",
          "Krájet až po <b>úplném vychladnutí</b>.",
        ],
      },
    ],
  },

  "podplamennik-s-klobasou-a-nivou": {
    instagram: "https://www.instagram.com/p/DXUUrX6jHJW/",
    intro: "Další díl série o podplameníku patří kombinaci, která vyhrála v anketě na Instagramu – klobása a niva. Tuto verzi jsem pekla rovnou z dvojité dávky. Základ zůstává stejný: žádné hnětení, žádná dřina, jen pár přeložení a čas. To těsto je prostě skvělé v tom, jak je jednoduché.",
    ingredients: [
      {
        group: "Těsto",
        items: [
          { amount: "500 g",  name: "hladká mouka" },
          { amount: "400 ml", name: "vlažná voda" },
          { amount: "20 g",   name: "čerstvé droždí" },
          { amount: "1 ČL",   name: "cukr" },
          { amount: "2 ČL",   name: "sůl" },
          { amount: "2 PL",   name: "olej" },
          { amount: " ",      name: "sádlo na vymazání plechu" },
        ],
      },
      {
        group: "Na vrch",
        items: [
          { amount: "200 g",  name: "zakysaná smetana" },
          { amount: "200 g",  name: "niva" },
          { amount: "1 ks",   name: "klobása (cca 140 g)" },
          { amount: "1 ks",      name: "cibule (nemusí být)" },
        ],
      },
    ],
    steps: [
      {
        heading: "Těsto",
        startAt: 1,
        items: [
          "Smíchej vlažnou vodu, cukr a droždí. Přidej mouku, olej a sůl. Stačí, aby se vše dobře spojilo. Přikryj a nechej <b>15 minut</b> odpočívat při pokojové teplotě.",
          "Těsto v míse dokola přelož, z každé strany. Přikryj a nech opět <b>15 minut</b> odpočívat.",
          "Přeložení zopakuj ještě jednou. Přikryj a nech kynout, dokud těsto zdvojnásobí objem (asi <b>30 minut</b>).",
        ],
      },
      {
        heading: "Tvarování",
        startAt: 4,
        items: [
          "Plech <b>24×40 cm</b> vymaž sádlem.",
          "Těsto přelož na třetiny, přelož na plech a nechej ještě chvíli odpočinout (<b>10 min</b>).",
          "Pak těsto rozmáčkni až ke krajům (namoč si ruce, aby se nelepilo) a prsty udělej důlky. Pokud to nejde hned a stahuje se, nech ho minutku stát a povolí.",
        ],
      },
      {
        heading: "Dokončení",
        startAt: 7,
        items: [
          "Těsto potři zakysanou smetanou, posyp strouhanou nivou a nahoru vyskládej půlkolečka klobásy a pokud chceš, i plátky cibule.",
          "Peč v troubě předehřáté na <b>220 °C</b>. Po 20 minutách zakryj pečicím papírem, sniž teplotu na <b>200 °C</b> a dopékej ještě přibližně 10–15 minut. (Třeba sledovat, každá trouba peče jinak. Těsto jsem kontrolovala špejlí.)",
        ],
      },
    ],
  },

  "podplamennik-bryndza-udene": {
    instagram: "https://www.instagram.com/p/DW9DBrSDFq9/",
    intro: "Křupavé těsto, které nepotřebuje žádné hnětení, a na vrchu kombinace, která je pro mě naprostou klasikou — brynza, zakysaná smetana a uzené maso. Těsto stačí jenom přeložit, dát mu čas, a ono se mezitím samo vypracuje.",
    ingredients: [
      {
        group: "Těsto",
        items: [
          { amount: "250 g",      name: "hladká mouka" },
          { amount: "195–210 ml", name: "vlažná voda" },
          { amount: "10 g",       name: "čerstvé droždí" },
          { amount: "1/2 ČL",    name: "cukr" },
          { amount: "1 ČL",      name: "sůl" },
          { amount: "2 ČL",      name: "olej" },
          { amount: " ",         name: "sádlo na vymazání formy" },
        ],
      },
      {
        group: "Na vrch",
        items: [
          { amount: "100 g",    name: "brynza" },
          { amount: "100 g",    name: "zakysaná smetana" },
          { amount: "80–100 g", name: "uzené maso nebo slanina" },
          { amount: "1 ks",     name: "cibule" },
        ],
      },
    ],
    steps: [
      {
        heading: "Těsto",
        startAt: 1,
        items: [
          "Smíchej vlažnou vodu, cukr a droždí. Přidej mouku, olej a sůl. Stačí, aby se vše dobře spojilo. Přikryj a nechej <b>15 minut</b> odpočívat při pokojové teplotě.",
          "Těsto v míse dokola přelož. Přikryj a nechej opět <b>15 minut</b> odpočívat.",
          "Přeložení zopakuj ještě jednou. Přikryj a nechej kynout, dokud těsto zdvojnásobí objem (asi <b>30 minut</b>).",
        ],
      },
      {
        heading: "Tvarování",
        startAt: 4,
        items: [
          "Pekáč (<b>24x20 cm</b>) vymaž sádlem.",
          "Těsto přelož na třetiny, a přesuň do pekáče. Nechej chvíli odpočinout.",
          "Pak těsto rozmáčkni až ke krajům (namoč si ruce, aby se nelepilo) a prsty udělej důlky.",
        ],
      },
      {
        heading: "Dokončení a pečení",
        startAt: 7,
        items: [
          "Potři zakysanou smetanou rozmíchanou s brynzou a nahoru vyskládej plátky cibule a kostičky masa.",
          "Peč v troubě předehřáté na <b>220 °C</b>. Po 20 minutách zakryj pečicím papírem, sniž teplotu na <b>200 °C</b> a dopékej ještě přibližně <b>15-20 minut</b>. Propečení lze skontrolovat špejlí.",
        ],
      },
    ],
  },

  "podplamennik-s-rajcinami": {
    instagram: "https://www.instagram.com/p/DXCZyLRDB8r/",
    intro: "Chtěla jsem upéct podplameník s rajčaty a rozmarýnem, ale připomíná spíš focacciu. Upřímně — je to ještě podplameník, nebo už focaccia? 🤔 Jsem zvědaná na tvůj názor.",
    ingredients: [
      {
        group: "Těsto",
        items: [
          { amount: "250 g",      name: "hladká mouka" },
          { amount: "195–210 ml", name: "vlažná voda" },
          { amount: "10 g",       name: "čerstvé droždí" },
          { amount: "1/2 ČL",    name: "cukr" },
          { amount: "1 ČL",      name: "sůl" },
          { amount: "2 ČL",      name: "olivový olej" },
          { amount: "—",         name: "olivový olej na vymazání formy" },
        ],
      },
      {
        group: "Na vrch",
        items: [
          { amount: "10–15 ks", name: "cherry rajčátka" },
          { amount: " ",        name: "čerstvý rozmarýn" },
        ],
      },
    ],
    steps: [
      {
        heading: "Těsto",
        startAt: 1,
        items: [
          "Smíchej vlažnou vodu, cukr a droždí. Přidej mouku, olej a sůl. Stačí, aby se vše dobře spojilo. Přikryj a nechej <b>15 minut</b> odpočívat při pokojové teplotě.",
          "Těsto v míse dokola přelož. Přikryj a nechej opět <b>15 minut</b> odpočívat.",
          "Přeložení zopakuj ještě jednou. Přikryj a nechej kynout, dokud těsto zdvojnásobí objem (asi <b>30 minut</b>).",
        ],
      },
      {
        heading: "Tvarování",
        startAt: 4,
        items: [
          "Formu <b>24x20 cm</b> vymaž olivovým olejem (nešetři – použila jsem asi 2 PL).",
          "Těsto do ní přelož, přelož na třetiny, přikryj a nechej <b>10 minut</b> odpočinout.",
          "Pak těsto rozmáčkni až ke krajům (naolej si ruce, aby se nelepilo) a prsty udělej důlky.",
        ],
      },
      {
        heading: "Dokončení a pečení",
        startAt: 7,
        items: [
          "Nahoru vyskládej půlená rajčátka a kousky rozmarýnu promazaného olejem - to zabezpečí, že počas pečení se nespálí. Posyp solí.",
          "Peč v troubě předehřáté na <b>220 °C</b>, cca <b>24 minut</b>. Ještě můžeš potřít olivovým olejem.",
        ],
      },
    ],
  },

  "pastel-de-nata": {
    instagram: "https://www.instagram.com/p/DYU2d27ssgv/",
    intro: "Pastel de nata jsem poprvé ochutnala na dovolené v Portugalsku, a od té doby jsem je chtěla zkusit doma. Tak jsem si je konečně udělala. Dvakrát, protože první pokus nevyšel 😅 Recept je na 12 ks a těsto je falešné listové — mnohem jednodušší než klasické. Na pečení nepotřebuješ speciální formičky, postačí plech na muffiny.",
    ingredients: [
      {
        group: "Těsto",
        items: [
          { amount: "150 g",  name: "hladká mouka" },
          { amount: " ",      name: "špetka soli" },
          { amount: "10 g",   name: "krupicový cukr" },
          { amount: "75 g",   name: "studené máslo" },
          { amount: "65 ml",  name: "studená voda" },
          { amount: "5 ml",   name: "ocet (1 a půl ČL)" },
        ],
      },
      {
        group: "Náplň",
        items: [
          { amount: "400 ml", name: "mléko" },
          { amount: "100 g",  name: "cukr" },
          { amount: "35 g",   name: "hladká mouka" },
          { amount: "4 ks",   name: "žloutky" },
          { amount: "1–2 ks", name: "tyčinky celé skořice" },
          { amount: "3-4 plátky",      name: "kůra z citronu" },
        ],
      },
    ],
    steps: [
      {
        heading: "Těsto",
        startAt: 1,
        items: [
          "V míse smícháme mouku, cukr a sůl. Do této směsi nastrouháme studené máslo a krátce promícháme. Pak přidáme studenou vodu smíchanou s octem a těsto rychle zpracujeme. Pracujeme rychle a co nejkratší dobu. Těsto nemá být dokonale hladké — chceme, aby v něm zůstaly kousky másla: díky tomu vznikne falešné listování.",
          "Vytvarujeme obdélník, zabalíme do fólie a dáme chladit alespoň na <b>2 hodiny</b> do lednice (nebo <b>20–30 minut</b> do mrazáku).",
          "Rozválíme na tenký obdélník asi <b>30×40 cm</b>, přeložíme na třetiny, znovu rozválíme a srolujeme. Necháme takto odpočinout v lednici alespoň <b>hodinu</b> (ale můžete i přes noc).",
        ],
      },
      {
        heading: "Náplň",
        startAt: 4,
        items: [
          "K mouce postupně přidáme část mléka (dohromady asi 100–150 ml) a rozmícháme tak, aby nevznikly hrudky.",
          "Zbývající mléko dáme do hrnce, přidáme cukr, celou skořici a citronovou kůru (kůru nestrouhám, ale odříznu škrabkou na brambory, asi 3-4 plátky, protože ji lze pak snadno vybrat).",
          "Přivedeme k varu. Pak za stálého míchání přiléváme směs mouky a mléka. Vaříme krátce, asi minutu - krém má být řídký. Vybereme citronovou kůru a skořici (nebo přecedíme).",
          "Odstavíme z ohně a po <b>10 minutách</b> do krému přimícháme žloutky.",
        ],
      },
      {
        heading: "Košíčky a pečení",
        startAt: 8,
        items: [
          "Připravíme košíčky: plech na muffiny nebo formičky vymažeme máslem. Srolované těsto nakrájíme na 12 dílů a roztlačíme do jednotlivých košíčků. Těsto má být opravdu tenké, asi <b>2 mm</b> — přebytky klidně po okrajích odřízni.",
          "Do košíčků nalijeme náplň asi do 3/4 a dáme péct do pořádně předehřáté trouby na <b>250 °C</b> na <b>12 minut</b>.",
        ],
      },
    ],
    tips: {
      heading: "Na co si dát pozor",
      items: [
        "těsto musí jít do pořádně předehřáté trouby (250 °C, ne méně)",
        "v žádném případě neotevírat troubu během pečení",
        "formičky vymazat máslem",
        "krém příště nebudu pasírovat, jen z něj vyjmu skořici a citronovou kůru",
      ],
    },
  },

  "lemon-curd": {
    instagram: "https://www.instagram.com/p/DWmGKPlMGDd/",
    intro: "Tento citronový krém má mnohem víc využití, než se může zdát. Hodí se třeba jako náplň do palačinek a dortů, do tartaletek nebo lineckého cukroví, nebo jako topping na lívance či cheesecake 💛 Fun fact: Lemon curd pochází z Anglie a už v 19. století se podával během odpoledního čaje – původně jako pomazánka na pečivo místo marmelády.",
    ingredients: [
      {
        group: "",
        items: [
          { amount: "2",       name: "žloutky" },
          { amount: "40 g",    name: "krupicového cukru" },
          { amount: "kůra z",  name: "1 bio citronu" },
          { amount: "šťáva z", name: "1 a půl citronu" },
          { amount: "30 g",    name: "másla" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Všechny ingredience kromě másla smícháme a zahříváme ve vodní lázni nebo nad párou na teplotu 70 °C, dokud celá hmota nezhoustne. Přecedíme (nepovinné), necháme trochu vychladnout a nakonec vmícháme máslo.",
        ],
      },
    ],
  },

  "machova-torta": {
    instagram: null,
    intro: "Jarní mechový mini dort. Základem jsou dva korpusy — jeden čokoládový a druhý zelený ze špenátu. Náplň tvoří mascarpone krém se šlehačkou, a celý dort se pak obalí v drobech ze zeleného korpusu. Ozdobit ho můžeš ovocem, já jsem použila hooodně malin - ale skvělý by byli třeba i jahody nebo borůvky nebo rybíz.",
    ingredients: [
      {
        group: "Čokoládový korpus (forma ⌀ 16 cm)",
        items: [
          { amount: "175 g",   name: "hladké mouky" },
          { amount: "135 g",   name: "krupicového cukru" },
          { amount: "30 g",    name: "kakaa" },
          { amount: "1 ČL",    name: "jedlé sody" },
          { amount: "špetka",  name: "soli" },
          { amount: "2",       name: "vejce" },
          { amount: "100 ml",  name: "silné kávy" },
          { amount: "100 ml",  name: "kefíru" },
          { amount: "100 ml",  name: "oleje" },
        ],
      },
      {
        group: "Zelený korpus",
        items: [
          { amount: "1",      name: "vejce" },
          { amount: "50 g",   name: "moučkového cukru" },
          { amount: "65 g",   name: "listového špenátu" },
          { amount: "60 ml",  name: "oleje" },
          { amount: "100 g",  name: "hladké mouky" },
          { amount: "3 g",    name: "prášku do pečiva" },
        ],
      },
      {
        group: "Náplň",
        items: [
          { amount: "250 g",  name: "mascarpone" },
          { amount: "200 ml", name: "40% smetany ke šlehání" },
          { amount: "1",      name: "vanilkový cukr" },
          { amount: "1-2 PL",   name: "moučkového cukru" },
        ],
      },
    ],
    steps: [
      {
        heading: "Čokoládový korpus",
        startAt: 1,
        items: [
          "Smícháme zvlášť suché suroviny a mokré suroviny, pak vmícháme suché do mokrých. Vzniklou hmotu rozdělíme na 3 stejné části (cca 250 g) a upečeme 3 korpusy (dno formy vyložit pečicím papírem). Pečeme cca 25 minut na 160 °C.",
        ],
      },
      {
        heading: "Zelený korpus",
        startAt: 2,
        items: [
          "Vejce vyšleháme s cukrem do pěny. Špenát rozmixujeme s olejem a přidáme k vejcím. Nakonec přimícháme mouku s práškem do pečiva. Pečeme ve formě ⌀ 16 cm cca 20 minut na 170 °C.",
        ],
      },
      {
        heading: "Náplň a sestavení",
        startAt: 3,
        items: [
          "Mascarpone, smetanu a oba cukry spolu vyšleháme na nízké otáčky. Počas šlehání je potřeba krém sledovat, aby se nezačel srážet. Krém by měl být hladký a pevný, ale ne tuhý.",
          "Vychladlé korpusy naplníme krémem rozděleným na 3 stejné části — 2 části krému natřeme mezi korpusy a třetím potřeme celý dort.",
          "Zelený korpus rozdrobíme a obalíme jím dort. Ozdobíme ovocem.",
        ],
      },
    ],
  },

  "linecke-vajicka": {
    instagram: "https://www.instagram.com/p/DWjd8_3MbxR/",
    intro: "",
    ingredients: [
      {
        group: "",
        items: [
          { amount: "300 g",  name: "hladké mouky" },
          { amount: "200 g",  name: "studeného másla (min. 82 % tuku)" },
          { amount: "100 g",  name: "moučkového cukru" },
          { amount: "2",      name: "žloutky" },
          { amount: "½ ČL",   name: "vanilky" },
          { amount: "kůra z", name: "½ citronu" },
          { amount: "špetka", name: "soli" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Smíchej suché ingredience.",
          "Studené máslo nakrájej na malé kostky a přidej k suchým ingrediencím — rychle vypracuj na drobenku.",
          "Přidej žloutky a rychle vypracuj hladké těsto.",
          "Těsto vytvaruj do plochého obdélníku a zabal do fólie. Nechej odpočívat minimálně 2 hodiny v lednici.",
          "Odleželé těsto rozválejte na tloušťku 3–4 mm, jemně podsypávejte moukou.",
          "Vykrajuj tvary a pokládej je na studený plech vyložený papírem.",
          "Peč při 175 °C (horní/dolní ohřev) přibližně 10–12 minut — dozlatova.",
          "Nechej vychladnout a pak spoj lemon curdem nebo džemem.",
          "Z tohoto množství vyjde cca 50 slepených lineckých.",
        ],
      },
    ],
  },

  "pirohy": {
    instagram: "https://www.instagram.com/p/DYPmmAIMVZs/",
    intro: "Tyto brynzové pirohy mě naučila vařit tchýně z východního Slovenska, a jí zase její tchýně. Těsto je z uvařených brambor, takže je krásně vláčné a moc dobře se s ním pracuje. Klíčem k úspěchu je kvalitní brynza, která je v Česku bohužel těžko dostupná, ale po tolika letech už jsem našla pár spolehlivých zdrojů, kde ji seženu. Pokud bys chtěla vědět, kde, napiš mi na Instagramu.",
    ingredients: [
      {
        group: "Těsto",
        items: [
          { amount: "150 g",  name: "uvařených brambor (ještě teplé pasírujeme a smícháme se 40 g sádla)" },
          { amount: "40 g",  name: "sádla" },
          { amount: "250 g",  name: "polohrubé mouky" },
          { amount: "1",      name: "vejce" },
          { amount: "½ ČL",   name: "soli" },
        ],
      },
      {
        group: "Náplň",
        items: [
          { amount: "350 g",     name: "(zbytek) uvařených brambor" },
          { amount: "250 g", name: "brynza" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Nejprve uvaříme 500 g nakrájených brambor ve slané vodě.",
          "150 g uvařených brambor (ještě teplých) propasírujeme, přimícháme sádlo a přidáme mouku, vejce a sůl. Vypracujeme nelepivé těsto.",
          "Zbytek brambor rozmačkáme vidličkou, smícháme s brynzou — to je náplň.",
          "Těsto rozválíme, sklenicí vykrajujeme kolečka (vyjde cca 32 ks). Naplníme, okraje pevně stiskneme a překládáme (techniku je dobře vidět na videu).",
          "Vložíme do hrnce s vroucí osolenou vodou, promícháme a vaříme. Po vyplutí vaříme ještě 2–3 minuty.",
          "Podáváme se zakysanou smetanou, vyškvařenou slaninou a pažitkou.",
        ],
      },
    ],
  },

  "syrove-tycinky": {
    instagram: "https://www.instagram.com/p/DXcDeZGMvJ0/",
    intro: "",
    ingredients: [
      {
        group: "Těsto",
        items: [
          { amount: "400 g",       name: "hladké mouky" },
          { amount: "1 kostka",    name: "droždí" },
          { amount: "2 ČL",        name: "cukru" },
          { amount: "1 ČL",        name: "soli" },
          { amount: "30 g (4 PL)", name: "olivového oleje" },
          { amount: "240 ml",      name: "vlažné vody" },
        ],
      },
      {
        group: "Česneková pasta na potření",
        items: [
          { amount: "20 g",  name: "prolisovaného česneku" },
          { amount: "40 g",  name: "změklého másla" },
          { amount: "60 g",  name: "smetanového sýru (např. Philadelphia)" },
          { amount: "1/2 ČL",     name: "sůl (podle chuti)" },
        ],
      },
      {
        group: "Na posypání",
        items: [
          { amount: "500 g", name: "strouhaná mozzarella" },
          { amount: " ",     name: "oregano" },
          { amount: " ",     name: "parmazán (asi 50 g, dávám přibližně)" },
          { amount: " ",     name: "vejce na potření" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Z vody, cukru a droždí necháme nakynout kvásek. Pak ho přidáme ke zbytku surovin na těsto a hněteme v robotu cca 10 minut, případně ručně trochu déle.",
          "Těsto rozdělíme na polovinu, jednu polovinu zatím odložíme.",
          "Druhou polovinu rozválíme do obdélníku o velikosti cca 40 × 30 cm. Těsto si při válení průběžně podsypávejte moukou, aby se nepřilepilo na podložku.",
          "Polovinu těsta potřeme polovinou česnekové pasty, posypeme oreganem a polovinou sýra. Přeložíme na polovinu a nakrájíme na proužky (cca 10 ks, každý asi 3 cm široký). Každý proužek zamotáme a přeložíme na plech. Potřeme vajíčkem a posypeme vypadlým sýrem.",
          "To samé zopakujeme s odloženou polovinou těsta — celkem tedy budeme mít 20 tyčinek.",
          "Pečeme na 210 °C cca 12–15 minut.",
          "Tip: Pokud se nechcete trápit s motáním tyčinek, stačí rozválené těsto přeložit na plech, celé potřít česnekovou pastou, posypat sýrem a oreganem a po upečení nakrájet.",
        ],
      },
    ],
  },

  "honzovy-buchty-s-tvarohom": {
    instagram: "https://www.instagram.com/p/DXzCnWlMScD/",
    intro: "",
    ingredients: [
      {
        group: "Těsto",
        items: [
          { amount: "400 g",  name: "hladké mouky" },
          { amount: "180 ml", name: "mléka" },
          { amount: "15 g",   name: "droždí" },
          { amount: "1",      name: "vejce" },
          { amount: "40 g",   name: "cukru" },
          { amount: "3 g",    name: "soli (asi ½ ČL)" },
          { amount: "60 g",   name: "změklého másla" },
        ],
      },
      {
        group: "Náplň (stačí připravit až když těsto nakyne)",
        items: [
          { amount: "2 balení", name: "tvarohu hrudkového (460 g)" },
          { amount: "2",        name: "malá vejce" },
          { amount: "60 g",     name: "moučkového cukru" },
          { amount: "špetka",   name: "vanilky" },
          { amount: "kůra z",   name: "1 citronu" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Vše kromě másla smíchat a zpracovat těsto. Asi po 5 minutách přidat máslo a zapracovat. Celkem hnětení trvá cca 10 minut v robotu, ručně trochu déle.",
          "Těsto nech zakryté vykynout při pokojové teplotě, dokud zdvojnásobí objem (cca 40 minut).",
          "Po vykynutí těsto rozděl na 18 stejných kousků. Každý kousek rozplácni, vlož do něj lžíci náplně a okraje spoj. Buchty pokládej na plech vymazaný máslem spojem dolů. Nech ještě pod utěrkou dokynout cca 15 minut.",
          "Potři rozpuštěným máslem a peč na 175 °C cca 40 minut (třeba sledovat — každá trouba peče jinak).",
          "Po upečení ještě horké buchty potři máslem a posyp cukrem.",
        ],
      },
    ],
  },

  "coko-datlove-gulicky": {
    instagram: "https://www.instagram.com/p/DXrhY1VMMbQ/",
    intro: "",
    ingredients: [
      {
        group: "",
        items: [
          { amount: "160 g", name: "měkkých datlí bez pecky" },
          { amount: "1 PL",  name: "kakaa" },
          { amount: "40 g",  name: "mletých vlašských ořechů" },
          { amount: " ",     name: "kakao (nebo čokoláda) na obalování" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Datle rozmixovat, přidat kakao a ořechy, vše smíchat a tvarovat kuličky.",
          "Kuličky obalovat v kakau nebo rozpuštěné čokoládě.",
          "Z tohoto množství vyjde 14 kusů.",
        ],
      },
    ],
  },

  "slane-honzovy-buchty": {
    instagram: "https://www.instagram.com/p/DX9tWd4s8xt/",
    intro: "",
    ingredients: [
      {
        group: "Náplň",
        items: [
          { amount: "1 ks",      name: "cibule" },
          { amount: "2 dcl",  name: "kuřecího vývaru" },
          { amount: "½ ČL",   name: "uzené papriky" },
          { amount: "½ ČL",   name: "sladké mleté papriky" },
          { amount: "½ ČL",   name: "sušeného česneku" },
          { amount: "70 g",   name: "hustého rajčatového protlaku" },
          { amount: "1 PL",   name: "sójové omáčky" },
          { amount: "150 ml", name: "řídkého rajčatového protlaku" },
          { amount: "20 g",   name: "másla" },
          { amount: "300 g",  name: "uvařeného kuřecího masa (použila jsem maso z vývaru)" },
          { amount: "2",      name: "jarní cibulky" },
          { amount: "100 g",      name: "cheddar nakrájený na 12 kostiček" },
        ],
      },
      {
        group: "Těsto",
        items: [
          { amount: "350 g",  name: "hladké mouky" },
          { amount: "160 ml", name: "vlažného mléka" },
          { amount: "15 g",   name: "droždí" },
          { amount: "1",      name: "vejce M" },
          { amount: "35 g",   name: "cukru" },
          { amount: "1 ČL",   name: "soli" },
          { amount: "55 g",   name: "změklého másla" },
        ],
      },
    ],
    steps: [
      {
        heading: "Náplň",
        startAt: 1,
        items: [
          "Připravíme si <b>barbecue omáčku</b>: na oleji orestujeme velmi jemně nakrájenou cibuli, osolíme.",
          "Zalijeme vývarem a vaříme, dokud se zcela nevypaří.", 
          "Přidáme koření a minutu restujeme.", 
          "Přidáme hustý protlak, sójovou omáčku, zarestujeme a pak přidáme řídký protlak.",
          "Zredukujeme a nakonec přidáme máslo a natrhané maso.", 
          "Po vychladnutí přidáme jarní cibulku.",
        ],
      },
      {
        heading: "Těsto",
        startAt: 7,
        items: [
          "Vše kromě másla smíchat a zpracovat těsto. Asi po 5 minutách přidat máslo a zapracovat. Těsto nechej zakryté vykynout při pokojové teplotě, dokud nezdvojnásobí objem (cca 40 minut).",
          "Po vykynutí těsto rozdělíme na 12 stejných kousků. Každou buchtu naplníme vychladlou masovou náplní a kostičkou cheddaru. Buchty pokládáme na plech vymazaný máslem a necháme ještě pod utěrkou dokynout cca 15 minut. Těsně před pečením potřeme rozpuštěným máslem. Pečeme na <b>175 °C cca 40 minut.</b>",
          "Podáváme se salsou nebo domácím jogurtovým dipem (řecký jogurt + prolisovaný česnek + jarní cibulka + sůl).",
        ],
      },
    ],
  },

  "mrkvovy-kolac": {
    instagram: "https://www.instagram.com/p/DYFO-SAMc0k/",
    intro: "Receptů na mrkváč je hodně, toto je má oblíbená varianta. Peču ji pravidelně v různých formách - jako cupcakes, mini dortík nebo jako rychlou buchtu na plech. Inspirace: vikendovepeceni.cz",
    ingredients: [
      {
        group: "",
        items: [
          { amount: "2",         name: "vejce" },
          { amount: "100 g",     name: "krupicového cukru" },
          { amount: "90g",    name: "oleje" },
          { amount: "60 g",      name: "celozrnné hladké špaldové mouky" },
          { amount: "100 g",     name: "hladké špaldové mouky" },
          { amount: "1 lžička",  name: "jedlé sody" },
          { amount: "1 lžička",  name: "prášku do pečiva" },
          { amount: "1 lžička",  name: "mleté skořice" },
          { amount: "50 g",      name: "mletých vlašských ořechů" },
          { amount: "200 g",     name: "mrkve" },
        ],
      },
      {
        group: "Krém",
        items: [
          { amount: "200 g",  name: "smetanového sýru (např. Philadelphia)" },
          { amount: "200 g",  name: "smetany ke šlehání 40 %" },
          { amount: "1–2 PL", name: "moučkového cukru (podle chuti)" },
          { amount: "špetka", name: "vanilky" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Smíchejte suché ingredience (kromě cukru) — mouku, prášek do pečiva, sodu a skořici.",
          "V samostatné misce vyšlehejte vejce s cukrem do pěny, pak postupně zašlehejte olej.",
          "Suché ingredience vmíchejte k mokré směsi.",
          "Pak přidejte mleté ořechy, pak nastrouhanou mrkev a vše spolu dobře stěrkou promíchejte.",
          "Těsto rovnoměrně rozetřete do formy (24 × 20 cm) vyložené pečicím papírem.",
          "Pečte přibližně 15–20 minut na 175 °C — propečení zkontrolujte špejlí.",
          "Koláč nechejte chvíli vychladnout ve formě, pak ho vyndejte na mřížku a nechejte úplně vychladnout.",
          "Všechny ingredience na krém vyšlehejte do pevného krému (pozor — nepřešlehat). Krém natřete na úplně vychladlý koláč a posypte nasekanými ořechy.",
        ],
      },
    ],
  },

  "coko-gulicky-z-bielkov": {
    instagram: "https://www.instagram.com/p/DW4MXn4jGGq/",
    intro: "Tyto kuličky dělám nejradši, když chci využít bílky, které zbyly z pečení. Jsou jednoduché na přípravu, a chutí trochu připomínají Mozartovy koule. Pokud chceš, aby byly kuličky opravdu intenzivně mandlové, přidej do těsta pár kapek mandlového extraktu — ale není to nutné, chuť bude i tak výrazná.",
    ingredients: [
      {
        group: "",
        items: [
          { amount: "100 g", name: "mandlové mouky (mleté mandle)" },
          { amount: "60 g",  name: "krupicového cukru" },
          { amount: "2",     name: "bílky" },
        ],
      },
      {
        group: "Poleva",
        items: [
          { amount: "100 g", name: "hořké čokolády 60%" },
          { amount: "20 g",  name: "oleje" },
          { amount: " ",     name: "plátky mandlí na ozdobu" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Troubu předehřej na 160 °C, plech vyložte pečicím papírem.", 
          "V míse smíchej mandlovou mouku a cukr, pak přidej bílky a jestli chceš, i pár kapek mandlového extraktu.", 
          "Vše dobře promíchej (nešlehat) — vznikne lepivá hmota.", 
          "Nachystej si nádobu s vodou. Před tvarováním každé kuličky si <b>namoč ruce do vody</b> — těsto se díky tomu nebude lepit.",
          "Peč 20–25 minut, dokud nezačnou jemně praskat.",
          "Čokoládu rozpusti ve vodní lázni, přimíchej olej a vychladlé kuličky v ní obaluj. Ozdobte plátky mandlí.",
        ],
      },
    ],
  },

  "french-toast": {
    instagram: "https://www.instagram.com/p/DWrNb3JstVp/",
    intro: "Luxusní brunch z mazance nebo třeba i vánočky za 10 minut.",
    ingredients: [
      {
        group: "Na 1 porci",
        items: [
          { amount: "2",      name: "plátky staršího mazance nebo vánočky" },
          { amount: "1",      name: "vejce" },
          { amount: "50 ml",  name: "mléka" },
          { amount: "1 ČL",   name: "vanilkového cukru" },
          { amount: "špetka", name: "skořice (podle chuti)" },
          { amount: " ",      name: "máslo na opékání" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "V hlubokém talíři vidličkou vyšlehej vejce s mlékem a vanilkovým cukrem.",
          "Plátky mazance namočte ve směsi z obou stran (nechejte je chvíli nasáknout).",
          "Opékáme na másle dozlatova na středním ohni (cca 2 minuty z každé strany).",
          "Servírujeme s javorovým sirupem, čerstvým ovocem, řeckým jogurtem nebo třeba i s ořechynebo ovocným rozvarem.",
        ],
      },
    ],
  },

  "mini-cheesecake": {
    instagram: "",
    intro: "Mini verze cheesecaku — menší forma, ale plná chuť. Sušenkový základ, krémová náplň ze smetanového sýru a řeckého jogurtu a navrch lesklá čokoládová poleva. Počítej s tím, že cheesecake potřebuje pár hodin v lednici, takže ho připravuj ideálně den předem.",
    ingredients: [
      {
        group: "Základ",
        items: [
          { amount: "100 g", name: "máslových sušenek" },
          { amount: "40 g",  name: "másla" },
        ],
      },
      {
        group: "Krém",
        items: [
          { amount: "200 g", name: "smetanového sýru (např. Philadelphia)" },
          { amount: "70 g",  name: "krupicového cukru" },
          { amount: "10 g",  name: "vanilkového cukru" },
          { amount: "1",     name: "vejce" },
          { amount: "200 g", name: "řeckého jogurtu" },
        ],
      },
      {
        group: "Čokoládová poleva",
        items: [
          { amount: "50 g",  name: "hořké čokolády 60 %" },
          { amount: "50 ml", name: "smetany ke šlehání" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Troubu předehřejeme na 160 °C.",
          "Sušenky rozmixujeme, smícháme s rozpuštěným máslem a stlačíme na dno dortové formy.",
          "Smetanový sýr vyšleháme s cukrem, přidáme vejce a pomalu zašleháme. Nakonec přidáme jogurt a nalijeme na připravený sušenkový základ.",
          "Vložíme do předehřáté trouby a pečeme nejprve 20 minut, poté teplotu snížíme na 150 °C a pečeme dalších 25–30 minut dozlatova. Po vychladnutí dáme na několik hodin do lednice (alespoň na 2 hodiny, klidně i přes noc).",
          "Když je cheesecake vychlazený, připravíme čokoládovou polevu – smetanu ke šlehání zahřejeme téměř k bodu varu, nalijeme na nasekanou čokoládu, rozmícháme do hladka a rozetřeme na povrch. Ozdobíme ovocem.",
        ],
      },
    ],
  },

  "brownie": {
    instagram: "",
    intro: "Brownies jsou u nás doma klasika, kterou peču pořád dokola. Recept je jednoduchý, ale výsledek pokaždé překvapí — uvnitř krémové, nahoře lehce křupavé. Důležité je nepřepéct: špejle má vyjít s několika mokrými drobečky, ne čistá.",
    ingredients: [
      {
        group: "Těsto",
        items: [
          { amount: "200 g",   name: "máslo" },
          { amount: "250 g",   name: "70% čokoláda" },
          { amount: "150 g",   name: "třtinový cukr" },
          { amount: "4 ks",    name: "vejce" },
          { amount: "4 PL",    name: "hladká mouka" },
          { amount: "2 PL",    name: "kakao" },
          { amount: "2 hrsti", name: "nasekaných vlašských ořechů" },
        ],
      },
    ],
    steps: [
      {
        heading: "Příprava",
        startAt: 1,
        items: [
          "Troubu předehřejeme na <b>170 °C</b>.",
          "Máslo s čokoládou rozpustíme ve vodní lázni. Necháme mírně vychladnout.",
          "Vejce metličkou krátce smícháme s cukrem, přidáme rozpuštěnou čokoládu s máslem a promícháme. Postupně vmícháme kakao, mouku a nakonec ořechy.",
        ],
      },
      {
        heading: "Pečení",
        startAt: 4,
        items: [
          "Formu (<b>20×24 cm</b>) vymažeme máslem a vysypeme moukou, nebo vyložíme pečicím papírem. Těsto vlijeme a uhladíme.",
          "Pečeme na <b>170 °C</b> přibližně <b>20–25 minut</b>. Pozor nepřepéct — špejle má vyjít s několika mokrými drobečky.",
          "Necháme vychladnout ve formě, poté nakrájíme na čtverce.",
        ],
      },
    ],
  },

};
