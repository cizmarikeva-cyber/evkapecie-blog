/* ============================================================
   data.js — Evka pečie obsah receptov
   ↳ TU MENÍŠ TEXTY, RECEPTY, KATEGÓRIE
   ============================================================ */

/* Recept týždňa — zobrazuje sa v hero sekcii */
var FEATURED = {
  slug:     "podplamennik-s-klobasou-a-nivou",
  categories: ["Slané", "Tradičné"],
  title:    "Podplamenník <em>s klobásou a nivou</em>",
  intro:    "Tretí diel série o podplamenníku bez miesenia patrí kombinácii, ktorá vyhrala v ankete – klobása a niva. Túto verziu som piekla rovno z dvojitej dávky. Základ zostáva rovnaký: žiadne miesenie, žiadna drina, len pár preložení a čas. To cesto je proste skvelé v tom, aké je jednoduché.",
  time:     "2 h",
  servings: "6 porcií",
  level:    "Ľahké",
  paint:    "cesnek",                              /* záložný gradient ak nie je fotka */
  image:    "images/podplamennik-s-klobasou-a-nivou.jpeg",                               /* ← "images/podplamennik.jpg"      */
};

/* Zoznam receptov — každý sa zobrazí ako karta
   paint: mak | vianocka | jablka | orechy | medovnik | bezlepek | cesnek
   categories: pole, recept môže patriť do viacerých kategórií             */
var RECIPES = [
  /* ---- Najnovšie (featured: true) --------------------------------- */
  {
    slug:       "podplamennik-s-rajcinami",
    featured:   true,
    categories: ["Slané", "Tradičné"],
    title:      "Podplamenník s <em>rajčinami a rozmarínom</em>",
    time:       "1,5 h",
    servings:   "3 porcie",
    level:      "Ľahké",
    paint:      "cesnek",
    image:      "images/podplamennik-s-rajcinami.jpeg",
  },
  {
    slug:       "podplamennik-bryndza-udene",
    featured:   true,
    categories: ["Slané", "Tradičné"],
    title:      "Podplamenník s <em>bryndzou a údeným</em>",
    time:       "2 h",
    servings:   "3 porcie",
    level:      "Ľahké",
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
    level:      "Stredne náročné",
    paint:      "vianocka",
    image:      "images/pastel-de-nata.jpeg",
  },
  /* ---- Sezónne (seasonal: true) ----------------------------------- */
  {
    slug:       "linecke-vajicka",
    seasonal:   true,
    categories: ["Tradičné", "Sezónne"],
    title:      "Linecké <em>vajíčka</em>",
    time:       "2 h 30 min",
    servings:   "40 ks",
    level:      "Stredne náročné",
    paint:      "medovnik",
    image:      "images/linecke-vajicka.jpeg",
  },
  /* ---- Najobľúbenejšie (popular: true) ---------------------------- */
  {
    slug:       "podplamennik-s-klobasou-a-nivou",
    popular:    true,
    categories: ["Slané", "Tradičné"],
    title:      "Podplamenník <em>s klobásou a nivou</em>",
    time:       "2 h",
    servings:   "6 porcií",
    level:      "Ľahké",
    paint:      "cesnek",
    image:      "images/podplamennik-s-klobasou-a-nivou.jpeg",
  },
  {
    slug:       "mrkvovy-kolac",
    popular:    true,
    categories: ["Sladké", "Rýchle"],
    title:      "<em>Mrkvový</em> koláč",
    time:       "1 h 20 min",
    servings:   "20 ks",
    level:      "Ľahké",
    paint:      "cesnek",
    image:      "images/mrkvovy-kolac.jpeg",
  },
  {
    slug:       "honzovy-buchty-s-tvarohom",
    popular:    true,
    categories: ["Tradičné", "Sladké"],
    title:      "Honzovy buchty <em>s tvarohom</em>",
    time:       "2 h 30 min",
    servings:   "12 ks",
    level:      "Stredne náročné",
    paint:      "cesnek",
    image:      "images/honzovy-buchty-s-tvarohom.jpeg",
  },
  {
    slug:       "lemon-curd",
    categories: ["Sladké", "Rýchle"],
    title:      "Lemon <em>curd</em>",
    time:       "30 min",
    servings:   "—",
    level:      "Ľahké",
    paint:      "jablka",
    image:      "images/lemon-curd.jpeg",
  },
  {
    slug:       "machova-torta",
    categories: ["Sladké", "Torty & dezerty"],
    title:      "<em>Machová</em> torta",
    time:       "2 h",
    servings:   "8–10 porcií",
    level:      "Ľahké",
    paint:      "mak",
    image:      "images/machova-torta.jpeg",
  },
  {
    slug:       "pirohy",
    categories: ["Slané", "Varenie"],
    title:      "<em>Pirohy</em>",
    time:       "1 h 15 min",
    servings:   "4 porcie",
    level:      "Stredne náročné",
    paint:      "cesnek",
    image:      "images/pirohy.jpeg",
  },
  {
    slug:       "syrove-tycinky",
    categories: ["Slané"],
    title:      "Syrové <em>tyčinky</em>",
    time:       "2 h",
    servings:   "8 porcií",
    level:      "Stredne náročné",
    paint:      "cesnek",
    image:      "images/syrove-tycinky.jpeg",
  },
  {
    slug:       "coko-datlove-gulicky",
    categories: ["Sladké", "Rýchle"],
    title:      "Čoko-<em>datľové</em> guličky",
    time:       "30 min",
    servings:   "14 ks",
    level:      "Ľahké",
    paint:      "mak",
    image:      "images/coko-datlove-gulicky.jpeg",
  },
  {
    slug:       "slane-honzovy-buchty",
    categories: ["Slané", "Varenie"],
    title:      "<em>Slané</em> Honzovy buchty",
    time:       "3 h",
    servings:   "12 ks",
    level:      "Náročné",
    paint:      "cesnek",
    image:      "images/slane-honzovy-buchty.jpeg",
  },
  {
    slug:       "coko-gulicky-z-bielkov",
    categories: ["Sladké", "Rýchle"],
    title:      "Čoko guličky <em>z bielkov</em>",
    time:       "40 min",
    servings:   "18 ks",
    level:      "Ľahké",
    paint:      "mak",
    image:      "images/coko-gulicky-z-bielkov.jpeg",
  },
  {
    slug:       "french-toast",
    categories: ["Sladké", "Rýchle", "Varenie"],
    title:      "French <em>toast</em>",
    time:       "20 min",
    servings:   "1 porcia",
    level:      "Ľahké",
    paint:      "vianocka",
    image:      "images/french-toast.jpeg",
  },
];

/* Kolekcie — zobrazujú sa v sekcii "Sezónne kolekcie" */
var COLLECTIONS = [
  { paint: "vianocka", eyebrow: "Zimné sviatky",  title: "Vianoce u babky",               count: 24, large: true },
  { paint: "jablka",   eyebrow: "Jeseň",           title: "Štrúdle, závinky, koláče",       count: 18, large: false },
  { paint: "bezlepek", eyebrow: "Pre každého",     title: "Bezlepkovo bez kompromisov",     count: 31, large: false },
];

/* Kategórie (strip pod hero sekciou) */
var CATEGORIES = [
  { icon: "wheat",  name: "Slané",          count: 4 },
  { icon: "cake",   name: "Sladké",         count: 4 },
  { icon: "bread",  name: "Tradičné",       count: 5 },
  { icon: "cookie", name: "Rýchle",         count: 1 },
  { icon: "leaf",   name: "Sezónne",        count: 3 },
  { icon: "star",   name: "Torty & dezerty", count: 0 },
  { icon: "pot",    name: "Varenie",         count: 0 },
];

/* Detailné dáta receptov — suroviny, kroky, intro
   Každý recept je kľúčovaný podľa slug.
   Recepty bez dát majú prázdne polia — na stránke sa zobrazí "čoskoro doplníme". */
var RECIPE_DATA = {

  "podplamennik-s-klobasou-a-nivou": {
    instagram: "https://www.instagram.com/p/DXUUrX6jHJW/",
    intro: "Tretí diel série o podplamenníku bez miesenia patrí kombinácii, ktorá vyhrala v ankete – klobása a niva. Túto verziu som piekla rovno z dvojitej dávky. Základ zostáva rovnaký: žiadne miesenie, žiadna drina, len pár preložení a čas. To cesto je proste skvelé v tom, aké je jednoduché.",
    ingredients: [
      {
        group: "Cesto",
        items: [
          { amount: "500 g",  name: "hladká múka" },
          { amount: "400 ml", name: "vlažná voda" },
          { amount: "20 g",   name: "čerstvé droždie" },
          { amount: "1 ČL",   name: "cukor" },
          { amount: "2 ČL",   name: "soľ" },
          { amount: "2 PL",   name: "olej" },
          { amount: "—",      name: "bravčová masť na vymastenie plechu" },
        ],
      },
      {
        group: "Na vrch",
        items: [
          { amount: "200 g",  name: "kyslá smotana" },
          { amount: "200 g",  name: "niva" },
          { amount: "1 ks",   name: "klobása (cca 140 g)" },
          { amount: "—",      name: "cibuľa (nemusí byť)" },
        ],
      },
    ],
    steps: [
      {
        heading: "Cesto",
        startAt: 1,
        items: [
          "Zmiešaj vlažnú vodu, cukor a droždie. Primiešaj múku, olej a soľ. Stačí, aby sa všetko dobre spojilo. Prikry a nechaj <b>15 minút</b> odpočívať pri izbovej teplote.",
          "Cesto v miske dookola poprekladaj. Prikry a nechaj opäť <b>15 minút</b> odpočívať.",
          "Preklad zopakuj ešte raz. Prikry a nechaj kysnúť, kým cesto zdvojnásobí objem (asi <b>30 minút</b>).",
        ],
      },
      {
        heading: "Tvarovanie",
        startAt: 4,
        items: [
          "Plech (<b>24×40 cm</b>) vymasti bravčovou masťou.",
          "Cesto prelož na tretiny, prelož na plech, a nechaj ešte chvíľu odpočinúť (<b>10 min</b>).",
          "Potom cesto roztlač až k okrajom (namoč si ruky, aby sa nelepilo) a prstami urob jamky. Ak to nejde hneď a sťahuje sa, nechaj ho minutku postáť a ono povolí.",
        ],
      },
      {
        heading: "Vrch a pečenie",
        startAt: 7,
        items: [
          "Potri smotanou, posyp nastrúhanou Nivou a navrch poukladaj polkolieska klobásy a ak chceš, tak aj plátky cibule.",
          "Peč v rúre vyhriatej na <b>220 °C</b>. Po 20 minútach zakry papierom na pečenie, zníž teplotu na <b>210 °C</b> a dopekaj ešte približne 10–15 minút. (Treba sledovať, každá rúra pečie inak. Cesto som kontrolovala špajdľou.)",
        ],
      },
    ],
  },

  "podplamennik-bryndza-udene": {
    instagram: "https://www.instagram.com/p/DW9DBrSDFq9/",
    intro: "",
    ingredients: [
      {
        group: "Cesto",
        items: [
          { amount: "250 g",      name: "hladká múka" },
          { amount: "195–210 ml", name: "vlažná voda" },
          { amount: "10 g",       name: "čerstvé droždie" },
          { amount: "1/2 ČL",    name: "cukor" },
          { amount: "1 ČL",      name: "soľ" },
          { amount: "2 ČL",      name: "olej" },
          { amount: "—",         name: "bravčová masť na vymastenie formy" },
        ],
      },
      {
        group: "Na vrch",
        items: [
          { amount: "100 g",    name: "bryndza" },
          { amount: "100 g",    name: "kyslá smotana" },
          { amount: "80–100 g", name: "údené mäso alebo slanina" },
          { amount: "1 ks",     name: "cibuľa" },
        ],
      },
    ],
    steps: [
      {
        heading: "Cesto",
        startAt: 1,
        items: [
          "Zmiešaj vlažnú vodu, cukor a droždie. Primiešaj múku, olej a soľ. Stačí, aby sa všetko dobre spojilo. Prikry a nechaj <b>15 minút</b> odpočívať pri izbovej teplote.",
          "Cesto v miske dookola poprekladaj. Prikry a nechaj opäť <b>15 minút</b> odpočívať.",
          "Preklad zopakuj ešte raz. Prikry a nechaj kysnúť, kým cesto zdvojnásobí objem (asi <b>30 minút</b>).",
        ],
      },
      {
        heading: "Tvarovanie",
        startAt: 4,
        items: [
          "Formu (<b>24x20 cm</b>) vymasti bravčovou masťou.",
          "Cesto do nej prelož, znova prelož podľa videa, prikry a nechaj už len chvíľu odpočinúť.",
          "Potom cesto roztlač až k okrajom (namoč si ruky, aby sa nelepilo) a prstami urob jamky.",
        ],
      },
      {
        heading: "Vrch a pečenie",
        startAt: 7,
        items: [
          "Potri smotanou rozmiešanou s bryndzou a navrch poukladaj plátky cibule a kocky mäsa.",
          "Peč v rúre vyhriatej na <b>220 °C</b>. Po 20 minútach zakry papierom na pečenie, zníž teplotu na <b>210 °C</b> a dopekaj ešte približne <b>20 minút</b>. 🥨",
        ],
      },
    ],
  },

  "podplamennik-s-rajcinami": {
    instagram: "https://www.instagram.com/p/DXCZyLRDB8r/",
    intro: "",
    ingredients: [
      {
        group: "Cesto",
        items: [
          { amount: "250 g",      name: "hladká múka" },
          { amount: "195–210 ml", name: "vlažná voda" },
          { amount: "10 g",       name: "čerstvé droždie" },
          { amount: "1/2 ČL",    name: "cukor" },
          { amount: "1 ČL",      name: "soľ" },
          { amount: "2 ČL",      name: "olivový olej" },
          { amount: "—",         name: "olivový olej na vymastenie formy" },
        ],
      },
      {
        group: "Na vrch",
        items: [
          { amount: "10–15 ks", name: "cherry paradajky" },
          { amount: "—",        name: "čerstvý rozmarín" },
        ],
      },
    ],
    steps: [
      {
        heading: "Cesto",
        startAt: 1,
        items: [
          "Zmiešaj vlažnú vodu, cukor a droždie. Primiešaj múku, olej a soľ. Stačí, aby sa všetko dobre spojilo. Prikry a nechaj <b>15 minút</b> odpočívať pri izbovej teplote.",
          "Cesto v miske dookola poprekladaj. Prikry a nechaj opäť <b>15 minút</b> odpočívať.",
          "Preklad zopakuj ešte raz. Prikry a nechaj kysnúť, kým cesto zdvojnásobí objem (asi <b>30 minút</b>).",
        ],
      },
      {
        heading: "Tvarovanie",
        startAt: 4,
        items: [
          "Formu <b>24x20 cm</b> vymasti olivovým olejom (nešetri - použila som asi 2PL).",
          "Cesto do nej prelož, prelož na tretiny, prikry a nechaj <b>10 minút</b> odpočinúť.",
          "Potom cesto roztlač až k okrajom (naolejuj si ruky, aby sa nelepilo) a prstami urob jamky.",
        ],
      },
      {
        heading: "Vrch a pečenie",
        startAt: 7,
        items: [
          "Poukladaj na vrch rozpolené paradajky a kúsky rozmarínu, a posoľ. Rozmarín treba naolejovať aby nezhorel.",
          "Peč v rúre vyhriatej na <b>220 °C</b>, cca <b>24 minút</b>. Ešte horúci som ho potrela olivovým olejom.",
        ],
      },
    ],
  },

  "pastel-de-nata": {
    instagram: "https://www.instagram.com/p/DYU2d27ssgv/",
    intro: "Pastel de nata som prvý krát ochutnala na dovolenke v Portugalsku, a odvtedy som ich chcela skúsiť doma. Tak som si ich konečne spravila. Dvakrát, lebo prvý pokus nevyšiel 😅 Mám teraz z toho v chladničke 8 zvyšných bielkov - ak máš nápad, čo s nimi, napíš mi do komentu (pomôžeš aj ostatným :) ) Recept je na 12 ks a cesto je falošné lístkové - oveľa jednoduchšie ako klasické.",
    ingredients: [
      {
        group: "Cesto",
        items: [
          { amount: "150 g",  name: "hladká múka" },
          { amount: " ",      name: "štipka soli" },
          { amount: "10 g",   name: "kryštálový cukor" },
          { amount: "75 g",   name: "studené maslo" },
          { amount: "65 ml",  name: "studená voda" },
          { amount: "5 ml",   name: "ocot (1 a pol ČL)" },
        ],
      },
      {
        group: "Náplň",
        items: [
          { amount: "400 ml", name: "mlieko" },
          { amount: "100 g",  name: "cukor" },
          { amount: "35 g",   name: "hladká múka" },
          { amount: "4 ks",   name: "žĺtky" },
          { amount: "1–2 ks", name: "tyčinky celej škorice" },
          { amount: " ",      name: "pár plátkov kôry z citróna" },
        ],
      },
    ],
    steps: [
      {
        heading: "Cesto",
        startAt: 1,
        items: [
          "V miske zmiešame múku, cukor a soľ. Do tejto zmesi nastrúhame studené maslo a krátko premiešame. Potom pridáme studenú vodu zmiešanú s octom a cesto rýchlo zmiesime. Pracujeme rýchlo a čo najkratšie. Cesto nemá byť dokonalo hladké, ale chceme aby v ňom ostali kúsky masla - vďaka tomo vznikne falošné lístkovanie.",
          "Vytvarujeme obdĺžnik, zabalíme do fólie a dáme chladiť aspoň na <b>2 hodiny</b> (alebo <b>20–30 minút</b> v mrazničke).",
          "Vyvaľkáme na tenký obdĺžnik asi <b>30x40 cm</b>, preložíme na tretiny, znovu vyvaľkáme a zrolujeme. Necháme takto krátko odpočinúť v chladničke aspoň <b>hodinu</b> (ja som nechala cez noc).",
        ],
      },
      {
        heading: "Náplň",
        startAt: 4,
        items: [
          "K múke postupne pridáme časť mlieka (dohromady asi 100–150 ml) a zmiešame tak, aby sa nevytvorili hrudky. Zvyšné mlieko dáme do hrnca, pridáme cukor, škoricu a citrónovú kôru, privedieme k varu. Potom za stáleho miešania prilievame zmes múky a mlieka. Varíme asi <b>1 minútu</b> (krátko, krém nemusí byť hustý). Vyberieme citrónovú kôru a škoricu (alebo precedíme). Po <b>10 minútach</b> k nemu primiešame žĺtky.",
        ],
      },
      {
        heading: "Košíčky a pečenie",
        startAt: 5,
        items: [
          "Medzitým pripravíme košíčky: plech na muffiny alebo formičky vymažeme maslom. Zrolované cesto nakrájame na 12 častí a z každej vytvarujeme jeden košíček. Cesto má byť naozaj tenké, asi <b>2 mm</b> - ak máš prebytky, pokojne ich po okrajoch orež.",
          "Do košíčkov nalejeme náplň asi do 3/4 a dáme piecť do poriadne vyhriatej rúry na <b>250 °C</b> na <b>12 minút</b>.",
        ],
      },
    ],
    tips: {
      heading: "Na čo si dávať pozor",
      items: [
        "cesto musí ísť do poriadne predhriatej rúry (250 °C, nie menej)",
        "v žiadnom prípade neotvárať rúru počas pečenia",
        "formičky vymazať maslom",
        "krém už nabudúce nebudem pasírovať, len z neho vyberiem škoricu a citrónovú kôru",
      ],
    },
  },

  /* ---- Ďalšie recepty — doplň podľa vzoru vyššie ---- */
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
          { amount: "2",       name: "žĺtky" },
          { amount: "40 g",    name: "cukru krupica" },
          { amount: "kôra z",  name: "1 bio citrónu" },
          { amount: "šťava z", name: "1 a pol citrónu" },
          { amount: "30 g",    name: "masla" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Všetky ingrediencie okrem masla zmiešame a zahrievame vo vodnom kúpeli alebo nad parou na teplotu 70 °C, kým celá hmota zhustne. Prepasírujeme (nepovinné), necháme trochu vychladnúť a nakoniec vmiešame maslo.",
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
          { amount: "175 g",   name: "hladkej múky" },
          { amount: "135 g",   name: "kryštálového cukru" },
          { amount: "30 g",    name: "kakaa" },
          { amount: "1 ČL",    name: "sódy bikarbony" },
          { amount: "štipka",  name: "soli" },
          { amount: "2",       name: "vajcia" },
          { amount: "100 ml",  name: "silnej kávy" },
          { amount: "100 ml",  name: "kefíru" },
          { amount: "100 ml",  name: "oleja" },
        ],
      },
      {
        group: "Zelený korpus",
        items: [
          { amount: "1",      name: "vajce" },
          { amount: "50 g",   name: "práškového cukru" },
          { amount: "65 g",   name: "listového špenátu" },
          { amount: "60 ml",  name: "oleja" },
          { amount: "100 g",  name: "hladkej múky" },
          { amount: "3 g",    name: "prášku do pečiva" },
        ],
      },
      {
        group: "Náplň",
        items: [
          { amount: "250 g",  name: "mascarpone" },
          { amount: "200 ml", name: "40 % smotany na šľahanie" },
          { amount: "1",      name: "vanilkový cukor" },
          { amount: "1 PL",   name: "práškového cukru" },
        ],
      },
    ],
    steps: [
      {
        heading: "Čokoládový korpus",
        startAt: 1,
        items: [
          "Zmiešame zvlášť suché suroviny a mokré suroviny, potom vmiešame suché do mokrých. Vzniknutú hmotu rozdelíme na 3 rovnaké časti (cca 250 g) a upečieme 3 korpusy (dno formy vystlať papierom na pečenie) cca 25 minút na 160 °C.",
        ],
      },
      {
        heading: "Zelený korpus",
        startAt: 2,
        items: [
          "Vajce vyšľaháme s cukrom do peny. Špenát rozmixujeme s olejom a pridáme k vajciam. Nakoniec primiešame múku s práškom do pečiva. Pečieme vo forme ⌀ 16 cm cca 20 minút na 170 °C.",
        ],
      },
      {
        heading: "Náplň a zostavenie",
        startAt: 3,
        items: [
          "Všetko spolu vyšľaháme na malé otáčky.",
          "Vychladnuté korpusy naplníme krémom rozdelenými na 3 rovnaké časti — 2 časti krému natrieme medzi korpusy a s treťou obmažeme celú tortu. Zelený korpus rozdrobíme a ním obalíme tortu. Ozdobíme ovocím.",
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
          { amount: "300 g",  name: "hladkej múky" },
          { amount: "200 g",  name: "studeného masla (min. 82 % tuku)" },
          { amount: "100 g",  name: "práškového cukru" },
          { amount: "2",      name: "žĺtky" },
          { amount: "½ ČL",   name: "vanilky" },
          { amount: "kôra z", name: "½ citróna" },
          { amount: "štipka", name: "soli" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Zmiešaj suché ingrediencie.",
          "Studené maslo nakrájaj na malé kocky a pridaj k suchým ingredienciám — rýchlo vypracuj na drobenku.",
          "Pridaj žĺtky a rýchlo vypracuj hladké cesto.",
          "Cesto vytvaruj do ploského obdĺžnika a zabaľ do fólie. Nechaj odpočívať minimálne 2 hodiny v chladničke.",
          "Odležané cesto rozvaľkaj na hrúbku 3–4 mm, jemne podsypávaj múkou.",
          "Vykrajuj tvary a ukladaj ich na studený plech vystlaný papierom.",
          "Peč pri 175 °C (horný/dolný ohrev) približne 10–12 minút — doružova.",
          "Nechaj vychladnúť a potom spájaj lemon curdom alebo džemom.",
          "Z tohto množstva vyjde cca 50 zlepených lineckých.",
        ],
      },
    ],
  },

  "pirohy": {
    instagram: "https://www.instagram.com/p/DYPmmAIMVZs/",
    intro: "",
    ingredients: [
      {
        group: "Cesto",
        items: [
          { amount: "150 g",  name: "uvarených zemiakov (ešte teplé prepasírujeme a zmiešame so 40 g bravčovej masti)" },
          { amount: "250 g",  name: "polohrubej múky" },
          { amount: "1",      name: "vajce" },
          { amount: "½ ČL",   name: "soli" },
        ],
      },
      {
        group: "Náplň",
        items: [
          { amount: "—",     name: "zvyšok uvarených zemiakov (roztlačíme vidličkou)" },
          { amount: "250 g", name: "bryndze" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Najprv uvaríme 500 g nakrájaných zemiakov v slanej vode.",
          "150 g uvarených zemiakov (ešte teplé) prepasírujeme, primiešame bravčovú masť a pridáme múku, vajce a soľ. Vypracujeme cesto.",
          "Zvyšok zemiakov roztlačíme vidličkou, zmiešame s bryndzou — to je náplň.",
          "Cesto vyvaľkáme, pohárom vykrajujeme krúžky (vyjde cca 32 ks). Naplníme, okraje pevne stlačíme.",
          "Vložíme do hrnca s vriacou osolenou vodou, premiešame a varíme. Po vyplávaní varíme ešte 2–3 minúty.",
          "Podávame s kyslou smotanou, vyškvarenou slaninkou a pažítkou.",
        ],
      },
    ],
  },

  "syrove-tycinky": {
    instagram: "https://www.instagram.com/p/DXcDeZGMvJ0/",
    intro: "",
    ingredients: [
      {
        group: "Cesto",
        items: [
          { amount: "400 g",       name: "hladkej múky" },
          { amount: "1 kocka",     name: "droždia" },
          { amount: "2 ČL",        name: "cukru" },
          { amount: "1 ČL",        name: "soli" },
          { amount: "30 g (4 PL)", name: "olivového oleja" },
          { amount: "240 ml",      name: "vlažnej vody" },
        ],
      },
      {
        group: "Cesnaková pasta na potretie",
        items: [
          { amount: "20 g",  name: "pretlačeného cesnaku" },
          { amount: "40 g",  name: "zmäknutého masla" },
          { amount: "60 g",  name: "nátierkového masla (napr. Philadelphia)" },
          { amount: "—",     name: "soľ podľa chuti" },
        ],
      },
      {
        group: "Na posypanie",
        items: [
          { amount: "—",    name: "oregano" },
          { amount: "500 g", name: "strúhanej mozarelly" },
          { amount: "—",    name: "parmezán (asi 50 g, dávam od oka)" },
          { amount: "—",    name: "vajce na potretie" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Z vody, cukru a droždia necháme vzísť kvások. Potom ho pridáme k zvyšku surovín na cesto a miesime v robote cca 10 minút, prípadne ručne trochu dlhšie.",
          "Cesto rozdelíme na polovicu, jednu polovicu zatiaľ odložíme.",
          "Druhú polovicu vyvaľkáme do obdĺžnika o veľkosti cca 40 × 30 cm. Cesto si pri vaľkaní priebežne podsypávajte múkou, aby sa nenalepilo na podložku.",
          "Polovicu cesta potrieme polovicou cesnakovej pasty, posypeme oreganom a polovicou syru. Preložíme na polovicu a nakrájame na pásiky (cca 10 ks, každý asi 3 cm). Každý pásik zamotáme a preložíme na plech. Potrieme vajíčkom a posypeme vypadnutým syrom.",
          "To isté zopakujeme s odloženou polovicou cesta — dokopy teda budeme mať 20 tyčiniek.",
          "Pečieme na 210 °C cca 12–15 minút.",
          "Tip: Ak sa nechcete trápiť motaním tyčiniek, stačí keď vyvaľkané cesto preložíte na plech, celé potriete cesnakovou pastou, posypete syrom a oreganom, a po upečení nakrájate.",
        ],
      },
    ],
  },

  "honzovy-buchty-s-tvarohom": {
    instagram: "https://www.instagram.com/p/DXzCnWlMScD/",
    intro: "Doporučujem pripraviť rovno dvojitú dávku, lebo miznú extrémne rýchlo.",
    ingredients: [
      {
        group: "Cesto",
        items: [
          { amount: "400 g", name: "hladkej múky" },
          { amount: "180 ml", name: "mlieka" },
          { amount: "15 g",  name: "droždia" },
          { amount: "1",     name: "vajce" },
          { amount: "40 g",  name: "cukru" },
          { amount: "3 g",   name: "soli (asi ½ ČL)" },
          { amount: "60 g",  name: "zmäknutého masla" },
        ],
      },
      {
        group: "Náplň (stačí pripraviť až keď je cesto vykysnuté)",
        items: [
          { amount: "2 balenia", name: "hrudkového tvarohu (460 g)" },
          { amount: "2",         name: "malé vajcia" },
          { amount: "60 g",      name: "práškového cukru" },
          { amount: "štipka",    name: "vanilky" },
          { amount: "kôra z",    name: "1 citróna" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Všetko okrem masla zmiešať a spracovať cesto. Asi po 5 minútach pridať maslo a zapracovať. Dohromady miesenie trvá cca 10 minút v robote, ručne trochu dlhšie. Cesto nechaj zakryté vykysnúť pri izbovej teplote, kým zdvojnásobí objem (cca 40 minút).",
          "Po vykysnutí cesto rozdelíme na 18 rovnakých kúskov a plníme tvarohovou náplňou. Buchty ukladáme na pekáč vymazaný maslom a necháme ešte pod utierkou podkysnúť cca 15 minút.",
          "Potrieme rozpusteným maslom a pečieme na 175 °C cca 40 minút (treba sledovať — každá rúra pečie inak).",
          "Po upečení ešte horúce buchty potrieme maslom a posypeme cukrom.",
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
          { amount: "160 g", name: "mäkkých datlí bez kôstky" },
          { amount: "1 PL",  name: "kakaa" },
          { amount: "40 g",  name: "mletých vlašských orechov" },
          { amount: "—",     name: "kakao (alebo čokoláda) na obaľovanie" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Datle rozmixovať, pridať kakao a orechy, všetko zmiešať a tvarovať guličky.",
          "Guličky obaľovať v kakae alebo rozpustenej čokoláde.",
          "Z tohto množstva vyjde 14 kusov.",
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
          { amount: "—",     name: "cibuľa" },
          { amount: "2 dcl", name: "kuracieho vývaru" },
          { amount: "½ ČL",  name: "údenej papriky" },
          { amount: "½ ČL",  name: "sladkej mletej papriky" },
          { amount: "½ ČL",  name: "sušeného cesnaku" },
          { amount: "70 g",  name: "hustého rajčinového pretlaku" },
          { amount: "1 PL",  name: "sójovej omáčky" },
          { amount: "150 ml", name: "riedkeho rajčinového pretlaku" },
          { amount: "20 g",  name: "masla" },
          { amount: "300 g", name: "uvareného kuracieho mäsa (použila som mäso z vývaru)" },
          { amount: "2",     name: "jarné cibuľky" },
          { amount: "—",     name: "cheddar nakrájaný na 12 kociek" },
        ],
      },
      {
        group: "Cesto",
        items: [
          { amount: "350 g", name: "hladkej múky" },
          { amount: "160 ml", name: "vlažného mlieka" },
          { amount: "15 g",  name: "droždia" },
          { amount: "1",     name: "vajce M" },
          { amount: "35 g",  name: "cukru" },
          { amount: "1 ČL",  name: "soli" },
          { amount: "55 g",  name: "zmäknutého masla" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Pripravíme si barbecue omáčku: na oleji orestujeme veľmi jemne nakrájanú cibuľu, osolíme. Zalejeme vývarom a varíme, kým sa úplne odparí. Pridáme koreniny a minútu restujeme. Pridáme hustý pretlak, sójovú omáčku, zarestujeme a pridáme riedky pretlak. Zredukujeme na požadovanú hustotu, nakoniec pridáme maslo a natrhané mäso. Po vychladnutí pridáme jarnú cibuľku.",
          "Všetko okrem masla zmiešať a spracovať cesto. Asi po 5 minútach pridať maslo a zapracovať. Cesto nechaj zakryté vykysnúť pri izbovej teplote, kým zdvojnásobí objem (cca 40 minút).",
          "Po vykysnutí cesto rozdelíme na 12 rovnakých kúskov. Každú buchtu naplníme vychladnutou mäsovou náplňou a kockou cheddaru. Buchty ukladáme na pekáč vymazaný maslom a necháme ešte pod utierkou podkysnúť cca 15 minút. Tesne pred pečením potrieme rozpusteným maslom. Pečieme na 175 °C cca 40 minút (každá rúra pečie inak).",
          "Podávame so salsou alebo domácim jogurtovým dipom (grécky jogurt + pretlačený cesnak + jarná cibuľka + soľ).",
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
          { amount: "2",        name: "vajcia" },
          { amount: "100 g",    name: "cukru krupica" },
          { amount: "100 ml",   name: "oleja (slnečnicový alebo repkový)" },
          { amount: "60 g",     name: "celozrnnej hladkej špaldovej múky" },
          { amount: "100 g",    name: "hladkej špaldovej múky" },
          { amount: "1 lyžička", name: "sódy bikarbóny" },
          { amount: "1 lyžička", name: "prášku do pečiva" },
          { amount: "1 lyžička", name: "mletej škorice" },
          { amount: "50 g",     name: "mletých vlašských orechov" },
          { amount: "190 g",    name: "jemne nastrúhanej mrkvy" },
        ],
      },
      {
        group: "Krém",
        items: [
          { amount: "200 g",  name: "krémového syra (napr. Philadelphia)" },
          { amount: "200 g",  name: "smotany na šľahanie 40 %" },
          { amount: "1–2 PL", name: "práškového cukru (podľa chuti)" },
          { amount: "štipka", name: "vanilky" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Zmiešajte suché ingrediencie (okrem cukru) — múku, prášok do pečiva, sódu a škoricu.",
          "V samostatnej miske vyšľahajte vajcia s cukrom do peny, potom postupne zašľahajte olej.",
          "Suché ingrediencie vmiešajte k mokrej zmesi.",
          "Pridajte mleté orechy, potom nastrúhanú mrkvu a všetko spolu premiešajte.",
          "Cesto rovnomerne rozotrite do formy (24 × 20 cm) vystlanej papierom na pečenie.",
          "Pečte približne 15–20 minút na 175 °C — prepečenie skontrolujte špajdľou.",
          "Koláč nechajte chvíľu vychladnúť vo forme, potom ho vyberte na mriežku a nechajte úplne vychladnúť.",
          "Všetko vyšľahajte do pevného krému (pozor — neprešľahať). Krém natrite na vychladnutý koláč a posypte orechami.",
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
          { amount: "100 g", name: "mandľovej múky (mleté mandle)" },
          { amount: "60 g",  name: "cukru krupica" },
          { amount: "2",     name: "bielky" },
          { amount: "—",     name: "mandľový extrakt (nepovinné — pre intenzívnejšiu chuť)" },
        ],
      },
      {
        group: "Poleva",
        items: [
          { amount: "100 g", name: "horkej čokolády 60 %" },
          { amount: "20 g",  name: "oleja" },
          { amount: "—",     name: "plátky mandlí na ozdobu" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "Rúru predhrej na 160 °C, plech vylož papierom na pečenie. V miske zmiešaj mandľovú múku a cukor, potom pridaj bielky a pár kvapiek mandľového extraktu. Všetko dobre premiešaj — vznikne mazľavá hmota. Pred tvarovaním každej guľky si namoč ruky do vody — cesto sa nebude lepiť.",
          "Guľky peč 20–25 minút, kým začnú jemne praskať.",
          "Rozpusti čokoládu vo vodnom kúpeli, primiešaj olej a vychladnuté guľky v nej obaľuj. Ozdob plátkami mandlí.",
        ],
      },
    ],
  },

  "french-toast": {
    instagram: "https://www.instagram.com/p/DWrNb3JstVp/",
    intro: "Nevyhadzuj starý mazanec — takto z neho urobíš luxusný brunch za 5 minút.",
    ingredients: [
      {
        group: "Na 1 porciu",
        items: [
          { amount: "2",     name: "plátky staršieho mazanca" },
          { amount: "1",     name: "vajíčko" },
          { amount: "50 ml", name: "mlieka" },
          { amount: "1 ČL",  name: "vanilkového cukru" },
          { amount: "štipka", name: "škorice (podľa chuti)" },
          { amount: "—",     name: "maslo na opekanie" },
        ],
      },
    ],
    steps: [
      {
        heading: "",
        startAt: 1,
        items: [
          "V hlbokom tanieri vyšľahaj vajíčko s mliekom a vanilkovým cukrom.",
          "Plátky mazanca namoč v zmesi z oboch strán (nechaj ich chvíľu nasiaknuť).",
          "Opeč na masle dozlatista na strednom ohni (cca 2 minúty z každej strany).",
        ],
      },
    ],
  },

};
