// ============================================================
// cukrovi.js — vianočné cukroví na objednávku
// ============================================================
// SEZONA_CUKROVI = true  → cukroví je v menu, v pruhu pod menu
//                          a v hero na hlavnej stránke.
// SEZONA_CUKROVI = false → web je ako predtým (recept v hero),
//                          stránka /cukrovi ostane, len nie je v menu.
export const SEZONA_CUKROVI = true;

// Odkaz na Google Formulár. Kým je null, tlačidlá vedú na sekciu objednávky.
export const FORMULAR_URL = null;

// Termíny vyzdvihnutia / rozvozu. Kým je prázdne, ukáže sa placeholder.
export const TERMINY = [
  // 'Sobota 19. 12. 2026, 10:00–14:00',
];

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
