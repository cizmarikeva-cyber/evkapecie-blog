// ============================================================
// cukrovi.js — vianočné cukroví na objednávku
// ============================================================
// SEZONA_CUKROVI = true  → cukroví je v menu, v pruhu pod menu
//                          a v hero na hlavnej stránke.
// SEZONA_CUKROVI = false → web je ako predtým (recept v hero),
//                          stránka /cukrovi ostane, len nie je v menu.
export const SEZONA_CUKROVI = true;

// Google Formulár „Objednávky cukroví 2026 (web)“ slúži len ako úložisko.
// Formulár na /cukrovi posiela odpovede sem; zákazníčka ho nevidí.
export const GOOGLE_FORM = {
  action: 'https://docs.google.com/forms/d/e/1FAIpQLSdUxPxKAe742GyYq-aY15eej4KFdOoD1q2qoXFm98wvh8VfvA/formResponse',
  entry: {
    meno:     'entry.1814114365',
    email:    'entry.1055969273',
    telefon:  'entry.2053498723',
    velke:    'entry.1141970151',
    male:     'entry.322746501',
    prevzeti: 'entry.1140161492',
    adresa:   'entry.1071780822',
    poznamka: 'entry.1289243855',
    cena:     'entry.990448974',
    souhlas:  'entry.3896465',
  },
};

// Údaje na platbu prevodom. ❗ Číslo účtu a IBAN doplní Eva sama.
// cisloUctu: v českom formáte, napr. '123456789/0100' (zobrazí sa na stránke)
// iban:      rovnaký účet ako IBAN, napr. 'CZ65...' (z neho sa robí QR kód)
// Variabilný symbol = telefón zákazníčky bez predvoľby (9 číslic).
export const PLATBA = {
  cisloUctu: '378839625/0300',
  iban:      'CZ5803000000000378839625',
  zprava:    'Cukrovi 2026',
};

// Maximum krabičiek jednej veľkosti na jednu objednávku (Eva, 20. 11. 2026: zvýšené z 3 na 10).
export const MAX_KRABIC = 10;

// PREPÍNAČ KAPACITY: true = termín je plný. Vo formulári sa nedá vybrať
// a pri termíne sa ukáže „(obsazeno)“. Kapacita Evy: max. 25 objednávok
// na jeden deň (Eva, 23. 11. 2026). Počet si Eva sleduje v tabuľke.
export const OBSAZENO = {
  pa18: false,  // pátek 18. 12., osobně
  ne20: false,  // neděle 20. 12., osobně
  po21: false,  // pondělí 21. 12., rozvoz
  ut22: false,  // úterý 22. 12., osobně
};

// VOĽNÉ KRABIČKY ŽIVO ZO SHEETU „Kapacita terminy pre Claude“ (Eva, 27. 11. 2026).
// Stránka si pri každom otvorení načíta sheet a podľa neho ukáže voľné krabičky:
//   • stĺpec „Voľných“ = voľné veľké krabičky na daný termín (riadok podľa dátumu v stĺpci A),
//   • stĺpec „Maximálna kapacita“ = 100 % pruhu,
//   • stĺpec „Malé ostáva“ = voľné malé krabičky spolu (berie sa prvé číslo v stĺpci),
//   • prázdna bunka = bez limitu (napr. rozvoz), 0 = termín sa nedá vybrať.
// Sheet musí mať prístup „Každý, kto má odkaz → Čitateľ“. Nedávaj doň osobné údaje zákazníčok.
// Keď sa sheet nenačíta, formulár funguje ďalej, len bez ukazovateľa.
export const KAPACITA_SHEET =
  'https://docs.google.com/spreadsheets/d/1BDD4qj4_3c478gCvXE2gk7FUHfWZ_lwRrjscB17ZZM8/gviz/tq?tqx=out:csv&headers=1&gid=0';

// Možnosti prevzatia vo formulári (v tomto poradí sa ukážu ako karty termínov).
// den + cas = krátky text na karte, sheet = začiatok textu v stĺpci A sheetu.
export const PREVZETI = [
  { id: 'pa18', den: 'Pátek 18. 12.',   cas: '15:00-17:00', sheet: '18.12', text: 'Osobně, pátek 18. 12. 2026, 15:00-17:00 (Údolní 34, Brno)',  rozvoz: false },
  { id: 'ne20', den: 'Neděle 20. 12.',  cas: '16:00-18:00', sheet: '20.12', text: 'Osobně, neděle 20. 12. 2026, 16:00-18:00 (Údolní 34, Brno)', rozvoz: false },
  { id: 'po21', den: 'Pondělí 21. 12.', cas: '16:00-21:00', sheet: '21.12', text: 'Rozvoz po Brně, pondělí 21. 12. 2026, 16:00-21:00',            rozvoz: true },
  { id: 'ut22', den: 'Úterý 22. 12.',   cas: '16:00-18:00', sheet: '22.12', text: 'Osobně, úterý 22. 12. 2026, 16:00-18:00 (Údolní 34, Brno)',   rozvoz: false },
];

// Termíny vyzdvihnutia a rozvozu (Eva, 18. 11. 2026).
export const TERMINY_VYZDVIHNUTIE = [
  { id: 'pa18', text: 'Pátek 18. 12. 2026, od 15:00 do 17:00' },
  { id: 'ne20', text: 'Neděle 20. 12. 2026, od 16:00 do 18:00' },
  { id: 'ut22', text: 'Úterý 22. 12. 2026, od 16:00 do 18:00' },
];
export const TERMIN_ROZVOZ = { id: 'po21', text: 'Pondělí 21. 12. 2026, mezi 16:00 a 21:00' };
export const ROZVOZ_POZNAMKA = 'Přesný čas upřesním e-mailem a SMS den předem.';

// Do kedy sa dá objednať. Ukazuje sa v pruhu hore na stránke /cukrovi (Eva, 27. 11. 2026).
export const OBJEDNAVKY_DO = '6. 12. 2026';

// Texty na stránke /cukrovi sú v češtine (znenie od Evy, 18. 11. 2026).
// obsah sa vypisuje ako HTML (<strong> = tučné množstvo).
export const KRABICE = [
  {
    id:     'velka',
    nazov:  'Velká krabička',
    cena:   1490,
    vaha:   '1 kg',
    obsah:  [
      'Cukroví pro celou rodinu.',
      '8 druhů, z každého <strong>8-9 kusů</strong>, váha <strong>1 kg</strong>.',
    ],
    pozn:   'Fotografie má ilustrační charakter, skutečný počet jednotlivých druhů se může lišit.',
  },
  {
    id:     'mala',
    nazov:  'Malá krabička',
    cena:   400,
    vaha:   '230 g',
    obsah:  [
      'Cukroví v malé dárkové krabičce převázané saténovou stuhou, takže ho můžete rovnou někomu darovat.',
      '8 druhů, z každého <strong>2 kousky</strong>, váha <strong>230 g</strong>.',
    ],
  },
];

export const DRUHY = [
  'Tartaletky s malinami a bílou čokoládou',
  'Čokoládovo-karamelové linecké',
  'Milionářský řez',
  'Rafaello',
  'Medovníkové kuličky',
  'Linecké plněné ribízovým džemem',
  'Vanilkové rohlíčky',
  'Pistáciové vosí hnízda s malinovým krémem',
];

export const ALERGENY = [
  'Alergeny: lepek, mléko, vejce, ořechy, sója.',
  'Alergeny u každého druhu na vyžádání.',
  'Podmínky uchování: Spotřebujte do 4 dnů od převzetí. Skladujte v chladu při teplotě do 5 °C.',
];

// Vypisuje sa ako HTML (<strong> = tučné).
export const UPOZORNENI = '<strong>Objednávka je platná až po zaplacení.</strong> Pokud objednávka nebude uhrazena do 3 pracovních dnů od objednání, bude zrušena a místo uvolníme dalšímu.';

export const VYZDVIHNUTIE = {
  adresa:       'Údolní 34, Brno-střed',
  rozvozCena:   300,
};
