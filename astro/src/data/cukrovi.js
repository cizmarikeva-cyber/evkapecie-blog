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

// Maximum krabičiek jednej veľkosti na jednu objednávku (Eva, 18. 11. 2026).
export const MAX_KRABIC = 3;

// Možnosti prevzatia vo formulári.
export const PREVZETI = [
  { id: 'ne20', text: 'Osobně, neděle 20. 12. 2026, 16:00-18:00 (Údolní 34, Brno)', rozvoz: false },
  { id: 'ut22', text: 'Osobně, úterý 22. 12. 2026, 16:00-18:00 (Údolní 34, Brno)',   rozvoz: false },
  { id: 'po21', text: 'Rozvoz po Brně, pondělí 21. 12. 2026, 17:00-21:00',            rozvoz: true },
];

// Termíny vyzdvihnutia a rozvozu (Eva, 18. 11. 2026).
export const TERMINY_VYZDVIHNUTIE = [
  'Neděle 20. 12. 2026, od 16:00 do 18:00',
  'Úterý 22. 12. 2026, od 16:00 do 18:00',
];
export const TERMIN_ROZVOZ = 'Pondělí 21. 12. 2026, mezi 17:00 a 21:00';
export const ROZVOZ_POZNAMKA = 'Přesný čas upřesním e-mailem a SMS den předem.';

// Do kedy sa dá objednať. Kým je null, ukáže sa placeholder.
export const OBJEDNAVKY_DO = '30. 11. 2026 nebo do vyprodání';

// Texty na stránke /cukrovi sú v češtine (znenie od Evy, 18. 11. 2026).
export const KRABICE = [
  {
    id:     'velka',
    nazov:  'Velká krabička',
    cena:   1490,
    obsah:  'Obsah velké krabičky je cca 68 ks a její váha je 1 kg. Obsahuje 8 druhů cukroví, z každého druhu 8-9 kusů.',
  },
  {
    id:     'mala',
    nazov:  'Malá krabička',
    cena:   400,
    obsah:  'Obsah malé krabičky je 16 ks, váha cca 230g. Obsahuje 8 druhů cukroví, z každého druhu 2 kusy. Vhodná jako dárek.',
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
];

export const UPOZORNENI = 'Upozornění: Objednávka je platná až po potvrzení a zaplacení. Pokud objednávka nebude uhrazena do 3 pracovních dnů od objednání, místo uvolňujeme dalšímu.';

export const VYZDVIHNUTIE = {
  adresa:       'Údolní 34, Brno',
  rozvozCena:   300,
};
