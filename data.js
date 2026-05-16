/* ============================================================
   data.js — Evka pečie obsah receptů
   ↳ ZDE MĚNÍŠ TEXTY, RECEPTY, KATEGORIE
   ============================================================ */

/* Recept týdne — zobrazuje se v hero sekci */
var FEATURED = {
  slug:     "podplamennik-s-klobasou-a-nivou",
  categories: ["Slané", "Tradiční"],
  title:    "Podplameník <em>s klobásou a nivou</em>",
  intro:    "Třetí díl série o podplamenikou bez hnětení patří kombinaci, která vyhrála v anketě – klobása a niva. Tuto verzi jsem pekla rovnou z dvojité dávky. Základ zůstává stejný: žádné hnětení, žádná dřina, jen pár přeložení a čas. To těsto je prostě skvělé v tom, jak je jednoduché.",
  time:     "2 h",
  servings: "6 porcí",
  level:    "Lehké",
  paint:    "cesnek",                              /* záložní gradient pokud není fotka */
  image:    "images/podplamennik-s-klobasou-a-nivou.jpeg",
};

/* Seznam receptů — každý se zobrazí jako karta
   paint: mak | vianocka | jablka | orechy | medovnik | bezlepek | cesnek
   categories: pole, recept může patřit do více kategorií             */
var RECIPES = [
  /* ---- Nejnovější (featured: true) --------------------------------- */
  {
    slug:       "podplamennik-s-rajcinami",
    featured:   true,
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
    featured:   true,
    categories: ["Slané", "Tradiční"],
    title:      "Podplameník s <em>brynzou a uzeným</em>",
    time:       "2 h",
    servings:   "3 porce",
    level:      "Lehké",
    paint:      "medovnik",
    image:      "images/podplamennik-bryndza-udene.jpeg",
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
  /* ---- Sezónní (seasonal: true) ----------------------------------- */
  {
    slug:       "linecke-vajicka",
    seasonal:   true,
    categories: ["Tradiční", "Sezónní"],
    title:      "Linecké <em>vajíčka</em>",
    time:       "2 h 30 min",
    servings:   "40 ks",
    level:      "Středně náročné",
    paint:      "medovnik",
    image:      "images/linecke-vajicka.jpeg",
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
    title:      "<em>Machový</em> dort",
    time:       "2 h",
    servings:   "8–10 porcí",
    level:      "Lehké",
    paint:      "mak",
    image:      "images/machova-torta.jpeg",
  },
  {
    slug:       "pirohy",
    categories: ["Slané", "Vaření"],
    title:      "<em>Pirohy</em>",
    time:       "1 h 15 min",
    servings:   "4 porce",
    level:      "Středně náročné",
    paint:      "cesnek",
    image:      "images/pirohy.jpeg",
  },
  {
    slug:       "syrove-tycinky",
    categories: ["Slané"],
    title:      "Sýrové <em>tyčinky</em>",
    time:       "2 h",
    servings:   "8 porcí",
    level:      "Středně náročné",
    paint:      "cesnek",
    image:      "images/syrove-tycinky.jpeg",
  },
  {
    slug:       "coko-datlove-gulicky",
    categories: ["Sladké", "Rychlé"],
    title:      "Čoko-<em>datlové</em> kuličky",
    time:       "30 min",
    servings:   "14 ks",
    level:      "Lehké",
    paint:      "mak",
    image:      "images/coko-datlove-gulicky.jpeg",
  },
  {
    slug:       "slane-honzovy-buchty",
    categories: ["Slané", "Vaření"],
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
];

/* Kolekce — zobrazují se v sekci "Sezónní kolekce" */
var COLLECTIONS = [
  { paint: "vianocka", eyebrow: "Zimní svátky",  title: "Vánoce u babičky",               count: 24, large: true },
  { paint: "jablka",   eyebrow: "Podzim",         title: "Štrúdly, záviny, koláče",        count: 18, large: false },
  { paint: "bezlepek", eyebrow: "Pro každého",    title: "Bezlepkově bez kompromisů",      count: 31, large: false },
];

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

  "podplamennik-s-klobasou-a-nivou": {
    instagram: "https://www.instagram.com/p/DXUUrX6jHJW/",
    intro: "Třetí díl série o podplamenikou bez hnětení patří kombinaci, která vyhrála v anketě – klobása a niva. Tuto verzi jsem pekla rovnou z dvojité dávky. Základ zůstává stejný: žádné hnětení, žádná dřina, jen pár přeložení a čas. To těsto je prostě skvělé v tom, jak je jednoduché.",
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
          { amount: "—",      name: "sádlo na vymazání plechu" },
        ],
      },
      {
        group: "Na vrch",
        items: [
          { amount: "200 g",  name: "zakysaná smetana" },
          { amount: "200 g",  name: "niva" },
          { amount: "1 ks",   name: "klobása (cca 140 g)" },
          { amount: "—",      name: "cibule (nemusí být)" },
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
          "Přeložení zopakuj ještě jednou. Přikryj a nechej kynout, dokud těsto nezdvojnásobí objem (asi <b>30 minut</b>).",
        ],
      },
      {
        heading: "Tvarování",
        startAt: 4,
        items: [
          "Plech (<b>24×40 cm</b>) vymaž sádlem.",
          "Těsto přelož na třetiny, přelož na plech a nechej ještě chvíli odpočinout (<b>10 min</b>).",
          "Pak těsto rozmáčkni až ke krajům (namočit si ruce, aby se nelepilo) a prsty udělej důlky. Pokud to nejde hned a stahuje se, nechej ho minutku stát a povolí.",
        ],
      },
      {
        heading: "Povrch a pečení",
        startAt: 7,
        items: [
          "Potři zakysanou smetanou, posyp strouhanou Nivou a nahoru vyskládej půlkolečka klobásy a pokud chceš, i plátky cibule.",
          "Peč v troubě předehřáté na <b>220 °C</b>. Po 20 minutách zakryj pečicím papírem, sniž teplotu na <b>210 °C</b> a dopékej ještě přibližně 10–15 minut. (Třeba sledovat, každá trouba peče jinak. Těsto jsem kontrolovala špejlí.)",
        ],
      },
    ],
  },

  "podplamennik-bryndza-udene": {
    instagram: "https://www.instagram.com/p/DW9DBrSDFq9/",
    intro: "",
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
          { amount: "—",         name: "sádlo na vymazání formy" },
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
          "Přeložení zopakuj ještě jednou. Přikryj a nechej kynout, dokud těsto nezdvojnásobí objem (asi <b>30 minut</b>).",
        ],
      },
      {
        heading: "Tvarování",
        startAt: 4,
        items: [
          "Formu (<b>24x20 cm</b>) vymaž sádlem.",
          "Těsto do ní přelož, znovu přelož podle videa, přikryj a nechej ještě chvíli odpočinout.",
          "Pak těsto rozmáčkni až ke krajům (namočit si ruce, aby se nelepilo) a prsty udělej důlky.",
        ],
      },
      {
        heading: "Povrch a pečení",
        startAt: 7,
        items: [
          "Potři zakysanou smetanou rozmíchanou s brynzou a nahoru vyskládej plátky cibule a kostičky masa.",
          "Peč v troubě předehřáté na <b>220 °C</b>. Po 20 minutách zakryj pečicím papírem, sniž teplotu na <b>210 °C</b> a dopékej ještě přibližně <b>20 minut</b>. 🥨",
        ],
      },
    ],
  },

  "podplamennik-s-rajcinami": {
    instagram: "https://www.instagram.com/p/DXCZyLRDB8r/",
    intro: "",
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
          { amount: "—",        name: "čerstvý rozmarýn" },
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
          "Přeložení zopakuj ještě jednou. Přikryj a nechej kynout, dokud těsto nezdvojnásobí objem (asi <b>30 minut</b>).",
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
        heading: "Povrch a pečení",
        startAt: 7,
        items: [
          "Nahoru vyskládej půlená rajčátka a kousky rozmarýnu a osoľ. Rozmarýn je třeba naoljet, aby neshořel.",
          "Peč v troubě předehřáté na <b>220 °C</b>, cca <b>24 minut</b>. Ještě horký jsem ho potřela olivovým olejem.",
        ],
      },
    ],
  },

  "pastel-de-nata": {
    instagram: "https://www.instagram.com/p/DYU2d27ssgv/",
    intro: "Pastel de nata jsem poprvé ochutnala na dovolené v Portugalsku, a od té doby jsem je chtěla zkusit doma. Tak jsem si je konečně udělala. Dvakrát, protože první pokus nevyšel 😅 Mám teď z toho v lednici 8 zbývajících bílků — pokud máš nápad, co s nimi, napiš mi do komentáře (pomůžeš i ostatním :) ) Recept je na 12 ks a těsto je falešné listové — mnohem jednodušší než klasické.",
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
          { amount: " ",      name: "pár plátků kůry z citronu" },
        ],
      },
    ],
    steps: [
      {
        heading: "Těsto",
        startAt: 1,
        items: [
          "V míse smícháme mouku, cukr a sůl. Do této směsi nastrouháme studené máslo a krátce promícháme. Pak přidáme studenou vodu smíchanou s octem a těsto rychle zpracujeme. Pracujeme rychle a co nejkratší dobu. Těsto nemá být dokonale hladké — chceme, aby v něm zůstaly kousky másla: díky tomu vznikne falešné listování.",
          "Vytvarujeme obdélník, zabalíme do fólie a dáme chladit alespoň na <b>2 hodiny</b> (nebo <b>20–30 minut</b> do mrazáku).",
          "Rozválíme na tenký obdélník asi <b>30×40 cm</b>, přeložíme na třetiny, znovu rozválíme a srolujeme. Necháme takto odpočinout v lednici alespoň <b>hodinu</b> (já nechala přes noc).",
        ],
      },
      {
        heading: "Náplň",
        startAt: 4,
        items: [
          "K mouce postupně přidáme část mléka (dohromady asi 100–150 ml) a rozmícháme tak, aby nevznikly hrudky. Zbývající mléko dáme do hrnce, přidáme cukr, skořici a citronovou kůru, přivedeme k varu. Pak za stálého míchání přiléváme směs mouky a mléka. Vaříme asi <b>1 minutu</b> (krátce, krém nemusí být hustý). Vybereme citronovou kůru a skořici (nebo přecedíme). Po <b>10 minutách</b> k němu přimícháme žloutky.",
        ],
      },
      {
        heading: "Košíčky a pečení",
        startAt: 5,
        items: [
          "Mezitím připravíme košíčky: plech na muffiny nebo formičky vymažeme máslem. Srolované těsto nakrájíme na 12 dílů a z každého vytvarujeme jeden košíček. Těsto má být opravdu tenké, asi <b>2 mm</b> — přebytky klidně po okrajích odřízni.",
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

  /* ---- Další recepty — doplň podle vzoru výše ---- */
  "jablkovy-kolac": { intro: "", ingredients: [], steps: [] },
  "medovnik":       { intro: "", ingredients: [], steps: [] },
  "orechovnik":     { intro: "", ingredients: [], steps: [] },
  "bezlepkove-pl":  { intro: "", ingredients: [], steps: [] },
  "cesnacka":       { intro: "", ingredients: [], steps: [] },

  /* ---- Recepty z Notion (importované) ---- */

  "lemon-curd": {
    instagram: "https://www.instagram.com/p/DWmGKPlMGDd/",
    intro: "",
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
    intro: "",
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
          { amount: "1 PL",   name: "moučkového cukru" },
        ],
      },
    ],
    steps: [
      {
        heading: "Čokoládový korpus",
        startAt: 1,
        items: [
          "Smícháme zvlášť suché suroviny a mokré suroviny, pak vmícháme suché do mokrých. Vzniklou hmotu rozdělíme na 3 stejné části (cca 250 g) a upečeme 3 korpusy (dno formy vyložit pečicím papírem) cca 25 minut na 160 °C.",
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
          "Vše spolu vyšleháme na nízké otáčky.",
          "Vychladlé korpusy naplníme krémem rozděleným na 3 stejné části — 2 části krému natrieme mezi korpusy a třetí potřeme celý dort. Zelený korpus rozdrobíme a obalíme jím dort. Ozdobíme ovocem.",
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
    intro: "",
    ingredients: [
      {
        group: "Těsto",
        items: [
          { amount: "150 g",  name: "uvařených brambor (ještě teplé pasírujeme a smícháme se 40 g sádla)" },
          { amount: "250 g",  name: "polohrubé mouky" },
          { amount: "1",      name: "vejce" },
          { amount: "½ ČL",   name: "soli" },
        ],
      },
      {
        group: "Náplň",
        items: [
          { amount: "—",     name: "zbytek uvařených brambor (rozmačkáme vidličkou)" },
          { amount: "250 g", name: "brynzy" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Nejprve uvaříme 500 g nakrájených brambor ve slané vodě.",
          "150 g uvařených brambor (ještě teplé) pasírujeme, přimícháme sádlo a přidáme mouku, vejce a sůl. Vypracujeme těsto.",
          "Zbytek brambor rozmačkáme vidličkou, smícháme s brynzou — to je náplň.",
          "Těsto rozválíme, sklenicí vykrajujeme kolečka (vyjde cca 32 ks). Naplníme, okraje pevně stiskneme.",
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
          { amount: "—",     name: "sůl podle chuti" },
        ],
      },
      {
        group: "Na posypání",
        items: [
          { amount: "—",     name: "oregano" },
          { amount: "500 g", name: "strouhaná mozzarella" },
          { amount: "—",     name: "parmazán (asi 50 g, dávám od oka)" },
          { amount: "—",     name: "vejce na potření" },
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
          "Polovinu těsta potřeme polovinou česnekové pasty, posypeme oreganem a polovinou sýra. Přeložíme na polovinu a nakrájíme na proužky (cca 10 ks, každý asi 3 cm). Každý proužek zamotáme a přeložíme na plech. Potřeme vajíčkem a posypeme vypadlým sýrem.",
          "To samé zopakujeme s odloženou polovinou těsta — celkem tedy budeme mít 20 tyčinek.",
          "Pečeme na 210 °C cca 12–15 minut.",
          "Tip: Pokud se nechcete trápit s motáním tyčinek, stačí rozválené těsto přeložit na plech, celé potřít česnekovou pastou, posypat sýrem a oreganem a po upečení nakrájet.",
        ],
      },
    ],
  },

  "honzovy-buchty-s-tvarohom": {
    instagram: "https://www.instagram.com/p/DXzCnWlMScD/",
    intro: "Doporučuji připravit rovnou dvojitou dávku, protože mizí extrémně rychle.",
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
          "Vše kromě másla smíchat a zpracovat těsto. Asi po 5 minutách přidat máslo a zapracovat. Celkem hnětení trvá cca 10 minut v robotu, ručně trochu déle. Těsto nechej zakryté vykynout při pokojové teplotě, dokud nezdvojnásobí objem (cca 40 minut).",
          "Po vykynutí těsto rozdělíme na 18 stejných kousků a plníme tvarohovou náplní. Buchty pokládáme na plech vymazaný máslem a necháme ještě pod utěrkou dokynout cca 15 minut.",
          "Potřeme rozpuštěným máslem a pečeme na 175 °C cca 40 minut (třeba sledovat — každá trouba peče jinak).",
          "Po upečení ještě horké buchty potřeme máslem a posypeme cukrem.",
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
          { amount: "—",     name: "kakao (nebo čokoláda) na obalování" },
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
        group: "Barbecue náplň",
        items: [
          { amount: "—",      name: "cibule" },
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
          { amount: "—",      name: "cheddar nakrájený na 12 kostiček" },
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
        heading: "",
        startAt: 1,
        items: [
          "Připravíme si barbecue omáčku: na oleji orestujeme velmi jemně nakrájenou cibuli, osolíme. Zalijeme vývarem a vaříme, dokud se zcela nevypaří. Přidáme koření a minutu restujeme. Přidáme hustý protlak, sójovou omáčku, zarestujeme a přidáme řídký protlak. Zredukujeme na požadovanou hustotu, nakonec přidáme máslo a natrhané maso. Po vychladnutí přidáme jarní cibulku.",
          "Vše kromě másla smíchat a zpracovat těsto. Asi po 5 minutách přidat máslo a zapracovat. Těsto nechej zakryté vykynout při pokojové teplotě, dokud nezdvojnásobí objem (cca 40 minut).",
          "Po vykynutí těsto rozdělíme na 12 stejných kousků. Každou buchtu naplníme vychladlou masovou náplní a kostičkou cheddaru. Buchty pokládáme na plech vymazaný máslem a necháme ještě pod utěrkou dokynout cca 15 minut. Těsně před pečením potřeme rozpuštěným máslem. Pečeme na 175 °C cca 40 minut (každá trouba peče jinak).",
          "Podáváme se salsou nebo domácím jogurtovým dipem (řecký jogurt + prolisovaný česnek + jarní cibulka + sůl).",
        ],
      },
    ],
  },

  "mrkvovy-kolac": {
    instagram: "https://www.instagram.com/p/DYFO-SAMc0k/",
    intro: "",
    ingredients: [
      {
        group: "",
        items: [
          { amount: "2",         name: "vejce" },
          { amount: "100 g",     name: "krupicového cukru" },
          { amount: "100 ml",    name: "oleje (slunečnicový nebo řepkový)" },
          { amount: "60 g",      name: "celozrnné hladké špaldové mouky" },
          { amount: "100 g",     name: "hladké špaldové mouky" },
          { amount: "1 lžička",  name: "jedlé sody" },
          { amount: "1 lžička",  name: "prášku do pečiva" },
          { amount: "1 lžička",  name: "mleté skořice" },
          { amount: "50 g",      name: "mletých vlašských ořechů" },
          { amount: "190 g",     name: "jemně nastrouhané mrkve" },
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
          "Suché ingredience vmícháme k mokré směsi.",
          "Přidejte mleté ořechy, pak nastrouhanou mrkev a vše spolu promíchejte.",
          "Těsto rovnoměrně rozetřete do formy (24 × 20 cm) vyložené pečicím papírem.",
          "Pečte přibližně 15–20 minut na 175 °C — propečení zkontrolujte špejlí.",
          "Koláč nechejte chvíli vychladnout ve formě, pak ho vyndejte na mřížku a nechejte úplně vychladnout.",
          "Vše vyšlehejte do pevného krému (pozor — nepřešlehat). Krém natřete na vychladlý koláč a posypte ořechy.",
        ],
      },
    ],
  },

  "coko-gulicky-z-bielkov": {
    instagram: "https://www.instagram.com/p/DW4MXn4jGGq/",
    intro: "",
    ingredients: [
      {
        group: "",
        items: [
          { amount: "100 g", name: "mandlové mouky (mleté mandle)" },
          { amount: "60 g",  name: "krupicového cukru" },
          { amount: "2",     name: "bílky" },
          { amount: "—",     name: "mandlový extrakt (nepovinné — pro intenzivnější chuť)" },
        ],
      },
      {
        group: "Poleva",
        items: [
          { amount: "100 g", name: "hořké čokolády 60 %" },
          { amount: "20 g",  name: "oleje" },
          { amount: "—",     name: "plátky mandlí na ozdobu" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Troubu předehřej na 160 °C, plech vyložte pečicím papírem. V míse smíchej mandlovou mouku a cukr, pak přidej bílky a pár kapek mandlového extraktu. Vše dobře promíchej — vznikne lepivá hmota. Před tvarováním každé kuličky si namočit ruce do vody — těsto se nebude lepit.",
          "Kuličky peč 20–25 minut, dokud nezačnou jemně praskat.",
          "Rozpust čokoládu ve vodní lázni, přimíchej olej a vychladlé kuličky v ní obaluj. Ozdobte plátky mandlí.",
        ],
      },
    ],
  },

  "french-toast": {
    instagram: "https://www.instagram.com/p/DWrNb3JstVp/",
    intro: "Nevyhazuj starý mazanec — takto z něj uděláš luxusní brunch za 5 minut.",
    ingredients: [
      {
        group: "Na 1 porci",
        items: [
          { amount: "2",      name: "plátky staršího mazance" },
          { amount: "1",      name: "vejce" },
          { amount: "50 ml",  name: "mléka" },
          { amount: "1 ČL",   name: "vanilkového cukru" },
          { amount: "špetka", name: "skořice (podle chuti)" },
          { amount: "—",      name: "máslo na opékání" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "V hlubokém talíři vyšlehej vejce s mlékem a vanilkovým cukrem.",
          "Plátky mazance namočte ve směsi z obou stran (nechejte je chvíli nasáknout).",
          "Opékáme na másle dozlatova na středním ohni (cca 2 minuty z každé strany).",
        ],
      },
    ],
  },

};
