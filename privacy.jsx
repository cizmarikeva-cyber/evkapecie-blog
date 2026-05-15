/* ============================================================
   privacy.jsx — Ochrana osobných údajov (Privacy Policy)
   ============================================================ */

const Privacy = ({ onHome }) => (
  <main>
    <section className="container" style={{ paddingTop: 56, paddingBottom: 96, maxWidth: 780 }}>

      <a className="back" href="#" onClick={(e) => { e.preventDefault(); onHome(); }}
         style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32 }}>
        <Icon name="arrowLeft" size={14} stroke={2} /> Späť na úvod
      </a>

      <Eyebrow>Právne informácie</Eyebrow>
      <h1 style={{ marginTop: 12, marginBottom: 8 }}>Ochrana osobných údajov</h1>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--popol)', marginBottom: 40 }}>
        Platné od: 15. mája 2026 · Prevádzkovateľ: Eva Čižmáriková, <a href="mailto:cizmarik.eva@gmail.com">cizmarik.eva@gmail.com</a>
      </p>

      <div className="privacy-body">

        <h2>1. Úvod</h2>
        <p>
          Táto stránka (ďalej „Blog") je osobný kulinársky blog prevádzkovaný Evou Čižmárikovou
          (ďalej „prevádzkovateľ"). Rešpektujeme vaše súkromie a spracúvame osobné údaje výhradne
          v súlade s Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR) a príslušnými
          vnútroštátnymi predpismi.
        </p>

        <h2>2. Aké údaje zbierame a prečo</h2>

        <h3>2.1 Newsletter</h3>
        <p>
          Ak sa prihlásite na odber newslettera, spracúvame vašu <strong>e-mailovú adresu</strong>.
        </p>
        <ul>
          <li><strong>Účel:</strong> zasielanie pravidelného newslettera s receptami a tipmi.</li>
          <li><strong>Právny základ:</strong> súhlas (čl. 6 ods. 1 písm. a) GDPR).</li>
          <li><strong>Doba uchovávania:</strong> do odvolania súhlasu.</li>
          <li><strong>Odhlásenie:</strong> kedykoľvek kliknutím na odkaz v každom e-maile alebo zaslaním správy na <a href="mailto:cizmarik.eva@gmail.com">cizmarik.eva@gmail.com</a>.</li>
        </ul>

        <h3>2.2 Kontaktný formulár / e-mail</h3>
        <p>
          Ak nás kontaktujete e-mailom, spracúvame vašu <strong>e-mailovú adresu</strong> a obsah správy.
        </p>
        <ul>
          <li><strong>Účel:</strong> odpoveď na vašu správu.</li>
          <li><strong>Právny základ:</strong> oprávnený záujem prevádzkovateľa (čl. 6 ods. 1 písm. f) GDPR).</li>
          <li><strong>Doba uchovávania:</strong> po dobu nevyhnutnú na vybavenie požiadavky, max. 1 rok.</li>
        </ul>

        <h3>2.3 Technické údaje (serverové logy)</h3>
        <p>
          Pri každej návšteve blogu môže hosting automaticky zaznamenávať <strong>IP adresu, typ prehliadača,
          navštívené URL a čas prístupu</strong>. Tieto údaje prevádzkovateľ aktívne nespracúva a slúžia
          výhradne na zabezpečenie prevádzky.
        </p>
        <ul>
          <li><strong>Právny základ:</strong> oprávnený záujem (čl. 6 ods. 1 písm. f) GDPR).</li>
          <li><strong>Doba uchovávania:</strong> spravidla 30 dní.</li>
        </ul>

        <h2>3. Služby tretích strán</h2>
        <p>
          Blog využíva nasledujúce externé služby, ktoré môžu spracúvať osobné údaje
          (najmä IP adresu) nezávisle od prevádzkovateľa. Pre každú z nich odporúčame
          prečítať si ich vlastné zásady ochrany súkromia.
        </p>

        <h3>3.1 Google Fonts</h3>
        <p>
          Na zobrazenie písma sa načítavajú fonty zo serverov Google LLC (USA). Pri každom
          načítaní stránky sa vaša IP adresa odošle na servery Google.
        </p>
        <ul>
          <li><strong>Prevádzkovateľ tretej strany:</strong> Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</li>
          <li><strong>Zásady ochrany súkromia Google:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
        </ul>

        <h3>3.2 Instagram / Meta (video embedy)</h3>
        <p>
          Na stránkach niektorých receptov sú vložené videá z Instagramu. Pri zobrazení
          takéhoto videa sa nadväzuje spojenie so servermi Meta Platforms Ireland Ltd.,
          ktoré môžu nastaviť cookies a zaznamenať vašu IP adresu — aj keď nie ste
          prihlásení na Instagram.
        </p>
        <ul>
          <li><strong>Prevádzkovateľ tretej strany:</strong> Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Írsko.</li>
          <li><strong>Zásady ochrany súkromia Meta:</strong> <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a></li>
        </ul>

        <h3>3.3 Hostingová platforma</h3>
        <p>
          Blog je technicky prevádzkovaný prostredníctvom hostingovej platformy, ktorá môže
          spracúvať technické údaje návštevníkov v súlade s vlastnými podmienkami.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Blog sám o sebe <strong>nenastavuje žiadne vlastné cookies</strong>. Cookies môžu nastavovať
          výhradne tretie strany uvedené v bode 3 (Google, Meta). Cookies tretích strán
          môžete spravovať v nastaveniach svojho prehliadača.
        </p>

        <h2>5. Príjemcovia osobných údajov</h2>
        <p>
          Osobné údaje nie sú predávané tretím stranám. Môžu byť sprístupnené:
        </p>
        <ul>
          <li>poskytovateľom e-mailových služieb využívaných na rozosielanie newslettera,</li>
          <li>hostingovým službám nevyhnutným na prevádzku blogu,</li>
          <li>orgánom verejnej moci, ak to vyžaduje zákon.</li>
        </ul>

        <h2>6. Prenos údajov mimo EÚ/EHP</h2>
        <p>
          Google LLC sídli v USA. Prenos údajov do USA prebieha na základe štandardných
          zmluvných doložiek schválených Európskou komisiou (čl. 46 GDPR). Podrobnosti
          nájdete v zásadách ochrany súkromia Google.
        </p>

        <h2>7. Vaše práva</h2>
        <p>
          Podľa GDPR máte nasledujúce práva:
        </p>
        <ul>
          <li><strong>Právo na prístup</strong> — môžete požiadať o potvrdenie, či spracúvame vaše osobné údaje, a o kópiu týchto údajov.</li>
          <li><strong>Právo na opravu</strong> — môžete požiadať o opravu nesprávnych alebo neúplných údajov.</li>
          <li><strong>Právo na vymazanie</strong> („právo byť zabudnutý") — môžete požiadať o vymazanie vašich údajov, ak pominul účel ich spracúvania.</li>
          <li><strong>Právo na obmedzenie spracúvania</strong> — môžete požiadať o pozastavenie spracúvania vašich údajov v určitých prípadoch.</li>
          <li><strong>Právo na prenosnosť údajov</strong> — môžete požiadať o vydanie vašich údajov v štruktúrovanom, strojovo čitateľnom formáte.</li>
          <li><strong>Právo namietať</strong> — môžete namietať voči spracúvaniu na základe oprávneného záujmu.</li>
          <li><strong>Právo odvolať súhlas</strong> — ak je spracúvanie založené na súhlase, môžete ho kedykoľvek odvolať bez vplyvu na zákonnosť predchádzajúceho spracúvania.</li>
        </ul>
        <p>
          Žiadosti zasielajte na <a href="mailto:cizmarik.eva@gmail.com">cizmarik.eva@gmail.com</a>.
          Na vašu žiadosť odpovieme do 30 dní.
        </p>

        <h2>8. Právo podať sťažnosť</h2>
        <p>
          Ak sa domnievate, že vaše osobné údaje spracúvame v rozpore s platnou legislatívou,
          máte právo podať sťažnosť na príslušný dozorný orgán:
        </p>
        <ul>
          <li>
            <strong>Slovenská republika:</strong> Úrad na ochranu osobných údajov SR,
            Hraničná 12, 820 07 Bratislava, <a href="https://www.dataprotection.gov.sk" target="_blank" rel="noopener noreferrer">dataprotection.gov.sk</a>
          </li>
          <li>
            <strong>Česká republika:</strong> Úřad pro ochranu osobních údajů,
            Pplk. Sochora 27, 170 00 Praha 7, <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">uoou.cz</a>
          </li>
        </ul>

        <h2>9. Zmeny týchto zásad</h2>
        <p>
          Tieto zásady môžeme príležitostne aktualizovať. Aktuálna verzia je vždy dostupná
          na tejto stránke s dátumom poslednej aktualizácie.
        </p>

        <h2>10. Kontakt</h2>
        <p>
          Eva Čižmáriková<br />
          E-mail: <a href="mailto:cizmarik.eva@gmail.com">cizmarik.eva@gmail.com</a><br />
          Instagram: <a href="https://www.instagram.com/evkapecie/" target="_blank" rel="noopener noreferrer">@evkapecie</a>
        </p>

      </div>
    </section>
  </main>
);

Object.assign(window, { Privacy });
