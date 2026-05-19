/* ============================================================
   about.jsx — stránka „O mně"
   ============================================================ */

const BrevoContactForm = () => {
  React.useEffect(() => {
    window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
    window.LOCALE = 'cs';
    window.EMAIL_INVALID_MESSAGE = 'Zadaná adresa je v nesprávném formátu. Zkontrolujte ji prosím.';
    window.REQUIRED_ERROR_MESSAGE = 'Povinné pole.';
    window.GENERIC_INVALID_MESSAGE = 'Zadané informace jsou v nesprávném formátu. Zkontrolujte je prosím.';
    window.INVALID_NUMBER = 'Zadané informace jsou v nesprávném formátu.';
    window.INVALID_DATE = 'Zadejte prosím platné datum.';
    window.REQUIRED_MULTISELECT_MESSAGE = 'Vyberte prosím alespoň jednu možnost.';
    window.translation = { common: { selectedList: '{quantity} list selected', selectedLists: '{quantity} lists selected', selectedOption: '{quantity} selected', selectedOptions: '{quantity} selected' } };
    window.AUTOHIDE = Boolean(0);

    if (!document.getElementById('brevo-form-script')) {
      const s = document.createElement('script');
      s.id = 'brevo-form-script';
      s.src = 'https://sibforms.com/forms/end-form/build/main.js';
      document.body.appendChild(s);
    }

    const handleSubmit = (e) => {
      const form = document.getElementById('sib-form');
      if (!form || !form.contains(e.target) && e.target !== form) return;

      e.preventDefault();
      e.stopImmediatePropagation();

      const checkbox = document.getElementById('GDPR_CONSENT');
      if (checkbox && !checkbox.checked) {
        let errEl = document.getElementById('gdpr-error');
        if (!errEl) {
          errEl = document.createElement('label');
          errEl.id = 'gdpr-error';
          errEl.className = 'entry__error entry__error--primary';
          errEl.style.display = 'block';
          errEl.textContent = 'Prosím, potvrďte souhlas se zpracováním osobních údajů.';
          checkbox.closest('.form__entry').appendChild(errEl);
        }
        errEl.style.display = 'block';
        return;
      }

      const gdprErr = document.getElementById('gdpr-error');
      if (gdprErr) gdprErr.style.display = 'none';

      const successEl = document.getElementById('success-message');
      const errorEl   = document.getElementById('error-message');
      if (successEl) successEl.style.display = 'none';
      if (errorEl)   errorEl.style.display   = 'none';

      const data = new FormData(form);
      fetch(form.action, { method: 'POST', body: data, mode: 'no-cors' })
        .then(() => {
          if (successEl) successEl.style.display = 'block';
          form.reset();
        })
        .catch(() => {
          if (errorEl) errorEl.style.display = 'block';
        });
    };

    const handlePrivacyLink = (e) => {
      const link = e.target.closest('[data-navigate="privacy"]');
      if (!link) return;
      e.preventDefault();
      const state = { name: 'privacy', slug: null };
      window.history.pushState(state, '');
      window.dispatchEvent(new PopStateEvent('popstate', { state }));
    };

    document.addEventListener('submit', handleSubmit, true);
    document.addEventListener('click', handlePrivacyLink);

    return () => {
      document.removeEventListener('submit', handleSubmit, true);
      document.removeEventListener('click', handlePrivacyLink);
    };
  }, []);

  const formHtml = `
    <div id="sib-form-container" class="sib-form-container">
      <div id="error-message" class="sib-form-message-panel" style="color:#661d1d;background-color:#ffeded;border-color:#ff4949;border-radius:8px;margin-bottom:16px;">
        <div class="sib-form-message-panel__text"><span class="sib-form-message-panel__inner-text">Něco se pokazilo. Zkuste to znovu prosím.</span></div>
      </div>
      <div id="success-message" class="sib-form-message-panel" style="color:#085229;background-color:#e7faf0;border-color:#13ce66;border-radius:8px;margin-bottom:16px;">
        <div class="sib-form-message-panel__text"><span class="sib-form-message-panel__inner-text">Vaše zpráva byla odeslána. Ozvu se vám během nejbližších dní!</span></div>
      </div>
      <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:left;background-color:transparent;border:none;direction:ltr">
        <form id="sib-form" method="POST" action="https://1acb54ba.sibforms.com/serve/MUIFAKD3U0KiXEiEo-BAr6I7S_jCK_VThQqYLDbJVV-IP6nxtX1fiDR_g0bg3JpICXn3skPrhPvEQksWmWG588UdXBwYAL7pQUof-f35Yzxm0coeB2U1FrfgWYrGRO3IdJj_gLNh1oEwZw2tA9ARbJuilFRLopcVQeR619KSImXt6AtIUZoysWoIzvH53Fd6Zgmq8G8fmPnEktfzJw==" data-type="subscription">
          <div style="padding:8px 0">
            <div class="sib-input sib-form-block">
              <div class="form__entry entry_block">
                <div class="form__label-row">
                  <label class="entry__label" for="EMAIL" data-required="*">E-mail</label>
                  <div class="entry__field"><input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" value="" data-required="true" required /></div>
                </div>
                <label class="entry__error entry__error--primary"></label>
              </div>
            </div>
          </div>
          <div style="padding:8px 0">
            <div class="sib-input sib-form-block">
              <div class="form__entry entry_block">
                <div class="form__label-row">
                  <label class="entry__label" for="FIRSTNAME">Jméno</label>
                  <div class="entry__field"><input class="input" maxlength="200" type="text" id="FIRSTNAME" name="FIRSTNAME" autocomplete="off" /></div>
                </div>
                <label class="entry__error entry__error--primary"></label>
              </div>
            </div>
          </div>
          <div style="padding:8px 0">
            <div class="sib-input sib-form-block">
              <div class="form__entry entry_block">
                <div class="form__label-row">
                  <label class="entry__label" for="LASTNAME" data-required="*">Zpráva</label>
                  <div class="entry__field"><textarea rows="7" class="input" maxlength="255" id="LASTNAME" name="LASTNAME" autocomplete="off" data-required="true" required></textarea></div>
                </div>
                <label class="entry__error entry__error--primary"></label>
              </div>
            </div>
          </div>
          <div style="padding:8px 0">
            <div class="sib-optin sib-form-block">
              <div class="form__entry entry_mcq">
                <div class="form__label-row">
                  <div class="entry__choice">
                    <label>
                      <input type="checkbox" class="input_replaced" value="1" id="GDPR_CONSENT" name="GDPR_CONSENT" />
                      <span class="checkbox checkbox_tick_positive"></span>
                      <span>Souhlasím se zpracováním osobních údajů dle <a href="#" data-navigate="privacy" style="color:inherit;text-decoration:underline;">zásad ochrany osobních údajů</a>.</span>
                    </label>
                  </div>
                </div>
                <label class="entry__error entry__error--primary"></label>
              </div>
            </div>
          </div>
          <div style="padding:4px 0 12px;font-size:12px;color:#687484;">
            Ke zpracování formuláře používám <a href="https://www.brevo.com" rel="nofollow">Brevo</a>. Odesláním souhlasíte s přenosem dat dle jejich <a href="https://www.brevo.com/en/legal/privacypolicy/" rel="nofollow" target="_blank">zásad ochrany soukromí</a>.
          </div>
          <div style="padding:8px 0;text-align:left">
            <button class="sib-form-block__button sib-form-block__button-with-loader" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512"><path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.010z" /></svg>
              Odeslat zprávu
            </button>
          </div>
          <input type="text" name="email_address_check" value="" class="input--hidden" />
          <input type="hidden" name="locale" value="cs" />
        </form>
      </div>
    </div>
  `;

  return <div className="brevo-form-wrap" dangerouslySetInnerHTML={{ __html: formHtml }} />;
};

const About = ({ onGoRecipes, scrollToContact, onPrivacy }) => {
  React.useEffect(() => {
    if (scrollToContact) {
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  }, [scrollToContact]);

  return (
    <main>

      {/* HERO — portrét + úvod */}
      <section className="container">
        <div className="about-hero">

          <div className="about-col-left">
            <div className="about-portrait-wrap">
              <img
                src="images/portret.jpeg"
                alt="Eva Čižmariková — Evka pečie"
                className="about-portrait"
              />
            </div>
            <div className="about-social">
              <a href="https://www.instagram.com/evkapecie/" target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" size={16} stroke={1.6} />
                Instagram
              </a>
<a href="https://www.facebook.com/profile.php?id=61577433120544" target="_blank" rel="noopener noreferrer">
                <Icon name="facebook" size={16} stroke={1.6} />
                Facebook
              </a>
            </div>
          </div>

          <div className="about-col-right">
            <div className="about-title">
              <Eyebrow>O mně</Eyebrow>
              <h1 style={{ marginTop: 16 }}>
                Ahoj, jsem <em>Eva</em>
              </h1>
            </div>
            <div className="about-text">
              <p className="about-intro">
                Vyrůstala jsem na Slovensku a u nás doma se obvykle hodně peklo o víkendech. Můj vztah k pečení tedy začal už v dětství, a to díky vlivu mé mámy a obou babiček. Bavilo mě sledovat, jak pečou, pomáhat a samozřejmě ochutnávat. I díky nim jsem se naučila, že na použitých ingrediencích záleží: máslo se nedá ničím nahradit, šlehačka musí být vysokoprocentní a že nelze srovnávat ovoce ze zahrádky s ovocem z obchodu. To jsou moje základy, od kterých se neodkloním.
              </p>
              <p className="about-intro" style={{ marginTop: 16 }}>
                Po přestěhování do Česka se můj zájem o pečení se postupně prohluboval. K pečení mě inspiruje mnoho zdrojů, například hodně mi dal blog Víkendové pečení, absolvovala jsem i několik kurzů pečení - třeba Minidotríky a Croissants od Olakala - a také ráda experimentuji s novými chutěmi. Počas Covidu jsem se naučila péct i kváskový chleba. Nyní peču nejvíc tradiční slovenské a české koláče; dělám bábovky, kynuté koláče a o Vánocích samozřejmě cukroví a vánočku. Ráda to občas prokládám i moderními věcmi — takže u mě najdete i recepty třeba na mrkvový dort, brownie, nebo dezerty, které jsem ochutnala v zahraničí.
              </p>
              <p className="about-intro" style={{ marginTop: 16 }}>
                Mám pocit, že tradiční koláče se v dnešním rychlém světě trochu ztrácejí. Chci ukázat, že se dají připravit opravdu dobře, tradičně ale i s moderním nádechem. Proto jsem tady a sdílím recepty, které fungují.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* KONTAKTNÍ FORMULÁŘ */}
      <section className="container contact-section" id="contact" style={{ paddingBottom: 96 }}>
        <h2 style={{ marginBottom: 40 }}>
          <em>Kontaktujte</em> mě
        </h2>
        <BrevoContactForm />
      </section>

    </main>
  );
};

Object.assign(window, { About });
