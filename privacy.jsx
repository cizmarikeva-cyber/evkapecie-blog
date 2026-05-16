/* ============================================================
   privacy.jsx — Ochrana osobních údajů (Privacy Policy)
   ============================================================ */

const Privacy = ({ onHome }) => (
  <main>
    <section className="container" style={{ paddingTop: 56, paddingBottom: 96, maxWidth: 780 }}>

      <a className="back" href="#" onClick={(e) => { e.preventDefault(); onHome(); }}
         style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32 }}>
        <Icon name="arrowLeft" size={14} stroke={2} /> Zpět na úvod
      </a>

      <h1 style={{ marginBottom: 8 }}>Ochrana osobních údajů</h1>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--popol)', marginBottom: 40 }}>
        Platné od: 15. května 2026 · Správce: Eva Čižmáriková, <a href="mailto:cizmarik.eva@gmail.com">cizmarik.eva@gmail.com</a>
      </p>

      <div className="privacy-body">

        <h2>1. Úvod</h2>
        <p>
          Tato stránka (dále „Blog") je osobní kulinářský blog provozovaný Evou Čižmárikovou
          (dále „správce"). Respektujeme vaše soukromí a zpracováváme osobní údaje výhradně
          v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a příslušnými
          vnitrostátními předpisy.
        </p>

        <h2>2. Jaké údaje shromažďujeme a proč</h2>

        <h3>2.1 Newsletter</h3>
        <p>
          Pokud se přihlásíte k odběru newsletteru, zpracováváme vaši <strong>e-mailovou adresu</strong>.
        </p>
        <ul>
          <li><strong>Účel:</strong> zasílání pravidelného newsletteru s recepty a tipy.</li>
          <li><strong>Právní základ:</strong> souhlas (čl. 6 odst. 1 písm. a) GDPR).</li>
          <li><strong>Doba uchovávání:</strong> do odvolání souhlasu.</li>
          <li><strong>Odhlášení:</strong> kdykoliv kliknutím na odkaz v každém e-mailu nebo zasláním zprávy na <a href="mailto:cizmarik.eva@gmail.com">cizmarik.eva@gmail.com</a>.</li>
        </ul>

        <h3>2.2 Kontaktní formulář / e-mail</h3>
        <p>
          Pokud nás kontaktujete e-mailem, zpracováváme vaši <strong>e-mailovou adresu</strong> a obsah zprávy.
        </p>
        <ul>
          <li><strong>Účel:</strong> odpověď na vaši zprávu.</li>
          <li><strong>Právní základ:</strong> oprávněný zájem správce (čl. 6 odst. 1 písm. f) GDPR).</li>
          <li><strong>Doba uchovávání:</strong> po dobu nezbytnou k vyřízení požadavku, max. 1 rok.</li>
        </ul>

        <h3>2.3 Technické údaje (serverové logy)</h3>
        <p>
          Při každé návštěvě blogu může hosting automaticky zaznamenávat <strong>IP adresu, typ prohlížeče,
          navštívené URL a čas přístupu</strong>. Tyto údaje správce aktivně nezpracovává a slouží
          výhradně k zajištění provozu.
        </p>
        <ul>
          <li><strong>Právní základ:</strong> oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR).</li>
          <li><strong>Doba uchovávání:</strong> zpravidla 30 dní.</li>
        </ul>

        <h2>3. Služby třetích stran</h2>
        <p>
          Blog využívá následující externí služby, které mohou zpracovávat osobní údaje
          (zejména IP adresu) nezávisle na správci. Pro každou z nich doporučujeme
          přečíst si jejich vlastní zásady ochrany soukromí.
        </p>

        <h3>3.1 Google Fonts</h3>
        <p>
          Pro zobrazení písma se načítají fonty ze serverů Google LLC (USA). Při každém
          načtení stránky se vaše IP adresa odesílá na servery Google.
        </p>
        <ul>
          <li><strong>Provozovatel třetí strany:</strong> Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</li>
          <li><strong>Zásady ochrany soukromí Google:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
        </ul>

        <h3>3.2 Instagram / Meta (video embedy)</h3>
        <p>
          Na stránkách některých receptů jsou vložena videa z Instagramu. Při zobrazení
          takového videa se navazuje spojení se servery Meta Platforms Ireland Ltd.,
          které mohou nastavovat cookies a zaznamenávat vaši IP adresu — i pokud nejste
          přihlášeni na Instagram.
        </p>
        <ul>
          <li><strong>Provozovatel třetí strany:</strong> Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irsko.</li>
          <li><strong>Zásady ochrany soukromí Meta:</strong> <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">facebook.com/privacy/policy</a></li>
        </ul>

        <h3>3.3 Hostingová platforma</h3>
        <p>
          Blog je technicky provozován prostřednictvím hostingové platformy, která může
          zpracovávat technické údaje návštěvníků v souladu s vlastními podmínkami.
        </p>

        <h2>4. Cookies</h2>
        <p>
          Blog sám o sobě <strong>nenastavuje žádné vlastní cookies</strong>. Cookies mohou nastavovat
          výhradně třetí strany uvedené v bodě 3 (Google, Meta). Cookies třetích stran
          můžete spravovat v nastavení svého prohlížeče.
        </p>

        <h2>5. Příjemci osobních údajů</h2>
        <p>
          Osobní údaje nejsou prodávány třetím stranám. Mohou být zpřístupněny:
        </p>
        <ul>
          <li>poskytovatelům e-mailových služeb využívaných k rozesílání newsletteru,</li>
          <li>hostingovým službám nezbytným k provozu blogu,</li>
          <li>orgánům veřejné moci, pokud to vyžaduje zákon.</li>
        </ul>

        <h2>6. Předávání údajů mimo EU/EHP</h2>
        <p>
          Google LLC sídlí v USA. Předávání údajů do USA probíhá na základě standardních
          smluvních doložek schválených Evropskou komisí (čl. 46 GDPR). Podrobnosti
          najdete v zásadách ochrany soukromí Google.
        </p>

        <h2>7. Vaše práva</h2>
        <p>
          Podle GDPR máte následující práva:
        </p>
        <ul>
          <li><strong>Právo na přístup</strong> — můžete požádat o potvrzení, zda zpracováváme vaše osobní údaje, a o kopii těchto údajů.</li>
          <li><strong>Právo na opravu</strong> — můžete požádat o opravu nesprávných nebo neúplných údajů.</li>
          <li><strong>Právo na výmaz</strong> („právo být zapomenut") — můžete požádat o výmaz vašich údajů, pokud pominul účel jejich zpracování.</li>
          <li><strong>Právo na omezení zpracování</strong> — můžete požádat o pozastavení zpracování vašich údajů v určitých případech.</li>
          <li><strong>Právo na přenositelnost údajů</strong> — můžete požádat o vydání vašich údajů ve strukturovaném, strojově čitelném formátu.</li>
          <li><strong>Právo vznést námitku</strong> — můžete vznést námitku proti zpracování na základě oprávněného zájmu.</li>
          <li><strong>Právo odvolat souhlas</strong> — pokud je zpracování založeno na souhlasu, můžete ho kdykoliv odvolat bez vlivu na zákonnost předchozího zpracování.</li>
        </ul>
        <p>
          Žádosti zasílejte na <a href="mailto:cizmarik.eva@gmail.com">cizmarik.eva@gmail.com</a>.
          Na vaši žádost odpovíme do 30 dnů.
        </p>

        <h2>8. Právo podat stížnost</h2>
        <p>
          Pokud se domníváte, že vaše osobní údaje zpracováváme v rozporu s platnou legislativou,
          máte právo podat stížnost na příslušný dozorový úřad:
        </p>
        <ul>
          <li>
            <strong>Česká republika:</strong> Úřad pro ochranu osobních údajů,
            Pplk. Sochora 27, 170 00 Praha 7, <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">uoou.cz</a>
          </li>
          <li>
            <strong>Slovenská republika:</strong> Úrad na ochranu osobných údajov SR,
            Hraničná 12, 820 07 Bratislava, <a href="https://www.dataprotection.gov.sk" target="_blank" rel="noopener noreferrer">dataprotection.gov.sk</a>
          </li>
        </ul>

        <h2>9. Změny těchto zásad</h2>
        <p>
          Tyto zásady můžeme příležitostně aktualizovat. Aktuální verze je vždy dostupná
          na této stránce s datem poslední aktualizace.
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
