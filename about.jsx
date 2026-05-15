/* ============================================================
   about.jsx — stránka „O mne"
   ============================================================ */

/* Nahraď YOUR_FORMSPREE_ID skutočným ID z formspree.io */
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';

const ContactForm = ({ onPrivacy }) => {
  const [fields, setFields] = React.useState({ name: '', email: '', message: '' });
  const [consent, setConsent] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState('idle'); /* idle | sending | success | error */

  const set = (key) => (e) => {
    setFields(f => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors(er => ({ ...er, [key]: null }));
  };

  const validate = () => {
    const e = {};
    if (!fields.email.trim()) e.email = 'E-mail je povinný.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Zadaj platnú e-mailovú adresu.';
    if (!fields.message.trim()) e.message = 'Správa je povinná.';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus('success');
        setFields({ name: '', email: '', message: '' });
        setConsent(false);
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-success">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--lekvar)" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
        <h3>Správa odoslaná!</h3>
        <p>Ďakujem za správu, ozvem sa čoskoro.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-row">
        <label>
          <span>Meno</span>
          <input
            type="text"
            value={fields.name} onChange={set('name')}
          />
        </label>
        <label>
          <span>E-mail <span className="contact-required">*</span></span>
          <input
            type="email"
            className={errors.email ? 'has-error' : ''}
            value={fields.email} onChange={set('email')}
          />
          {errors.email && <span className="contact-field-error">{errors.email}</span>}
        </label>
      </div>
      <label>
        <span>Správa <span className="contact-required">*</span></span>
        <textarea
          rows={5}
          className={errors.message ? 'has-error' : ''}
          value={fields.message} onChange={set('message')}
        />
        {errors.message && <span className="contact-field-error">{errors.message}</span>}
      </label>
      <label className="contact-consent">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>
          Súhlasím so spracovaním osobných údajov v súlade so{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); onPrivacy && onPrivacy(); }}>
            zásadami ochrany osobných údajov
          </a>.
        </span>
      </label>
      {status === 'error' && (
        <p className="contact-error">Niečo sa pokazilo. Skús znova alebo napíš priamo na cizmarik.eva@gmail.com.</p>
      )}
      <Button variant="primary" size="large" type="submit" disabled={status === 'sending' || !consent}>
        {status === 'sending' ? 'Odosiela sa…' : 'Odoslať správu'}
      </Button>
    </form>
  );
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

          <img
            src="images/portret.jpeg"
            alt="Eva Čižmáriková — Evka pečie"
            className="about-portrait"
          />

          <div>
            <Eyebrow>O mne</Eyebrow>
            <h1 style={{ marginTop: 16 }}>
              Ahoj, som <em>Eva</em>
            </h1>

            <p className="about-intro">
              Vyrastala som na Slovensku v rodine, kde sa cez víkend pieklo takmer vždy.
              Môj vzťah k pečeniu od detstva formovala mamka a obe staré mamy — a ja som
              pri tom rada stála, pomáhala a ochutnávala. Naučili ma, že na kvalite surovín
              záleží: maslo je nenahraditeľné, šľahačka má byť vysokopercentná a ovocie
              zo záhrady chutí úplne inak ako z obchodu. To sú moje základy, od ktorých
              sa neodkloním.
            </p>

            <p className="about-intro" style={{ marginTop: 16 }}>
              Keď som sa odsťahovala do Českej Republiky, môj záujem o pečenie sa ešte
              prehĺbil. Inšpirujem sa z rôznych zdrojov — veľa mi dal blog Víkendové pečení,
              absolvovala som rôzne kurzy a rada skúšam nové chute. Pečiem hlavne tradičné
              slovenské a české koláče: kysnuté cesto, bábovky, vianočné pečivo (cukroví).
              Avšak rada to prekladám modernými vecami — takže u mňa nájdete aj recepty
              na cupcakes či cheesecake, alebo zahraničné dezerty, ktoré som ochutnala
              na dovolenkách.
            </p>

            <p className="about-intro" style={{ marginTop: 16 }}>
              Mám pocit, že tradičné koláče sa v dnešnom rýchlom svete trošku strácajú.
              Chcem ukázať, že sa dajú pripraviť naozaj dobre, tradične ale aj s moderným
              nádychom. Preto som tu a zdieľam recepty, ktoré fungujú.
            </p>

            {/* Sociálne siete */}
            <div className="about-social">
              <a href="https://www.instagram.com/evkapecie/" target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" size={16} stroke={1.6} />
                Instagram
              </a>
              <a href="https://www.tiktok.com/@evkapecie" target="_blank" rel="noopener noreferrer">
                <Icon name="tiktok" size={16} stroke={1.6} />
                TikTok
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577433120544" target="_blank" rel="noopener noreferrer">
                <Icon name="facebook" size={16} stroke={1.6} />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKTNÝ FORMULÁR */}
      <section className="container contact-section" id="contact" style={{ paddingBottom: 96 }}>
        <Eyebrow>Napíš mi</Eyebrow>
        <h2 style={{ marginTop: 12, marginBottom: 40 }}>
          <em>Kontaktujte</em> ma
        </h2>
        <ContactForm onPrivacy={onPrivacy} />
      </section>

    </main>
  );
};

Object.assign(window, { About });
