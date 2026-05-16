/* ============================================================
   about.jsx — stránka „O mně"
   ============================================================ */

/* Nahraď YOUR_FORMSPREE_ID skutečným ID z formspree.io */
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
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Zadejte platnou e-mailovou adresu.';
    if (!fields.message.trim()) e.message = 'Zpráva je povinná.';
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
        <h3>Zpráva odeslána!</h3>
        <p>Děkuji za zprávu, ozvu se brzy.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-row">
        <label>
          <span>Jméno</span>
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
        <span>Zpráva <span className="contact-required">*</span></span>
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
          Souhlasím se zpracováním osobních údajů v souladu se{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); onPrivacy && onPrivacy(); }}>
            zásadami ochrany osobních údajů
          </a>.
        </span>
      </label>
      {status === 'error' && (
        <p className="contact-error">Něco se pokazilo. Zkus znovu nebo napiš přímo na cizmarik.eva@gmail.com.</p>
      )}
      <Button variant="primary" size="large" type="submit" disabled={status === 'sending' || !consent}>
        {status === 'sending' ? 'Odesílá se…' : 'Odeslat zprávu'}
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
            <Eyebrow>O mně</Eyebrow>
            <h1 style={{ marginTop: 16 }}>
              Ahoj, jsem <em>Eva</em>
            </h1>

            <p className="about-intro">
              Vyrostla jsem na Slovensku v rodině, kde se o víkendu peklo téměř vždy.
              Můj vztah k pečení od dětství formovaly mamka a obě babičky — a já jsem
              u toho ráda stávala, pomáhala a ochutnávala. Naučily mě, že na kvalitě
              surovin záleží: máslo je nenahraditelné, šlehačka má být vysokoprocentní
              a ovoce ze zahrady chutná úplně jinak než z obchodu. To jsou moje základy,
              od kterých se neodkloním.
            </p>

            <p className="about-intro" style={{ marginTop: 16 }}>
              Když jsem se přestěhovala do České republiky, můj zájem o pečení se ještě
              prohloubil. Inspiruji se z různých zdrojů — hodně mi dal blog Víkendové
              pečení, absolvovala jsem různé kurzy a ráda zkouším nové chutě. Peču hlavně
              tradiční slovenské a české koláče: kynuté těsto, bábovky, vánoční pečivo
              (cukroví). Ale ráda to prokládám moderními věcmi — takže u mě najdete i
              recepty na cupcakes nebo cheesecake, nebo zahraniční dezerty, které jsem
              ochutnala na dovolených.
            </p>

            <p className="about-intro" style={{ marginTop: 16 }}>
              Mám pocit, že tradiční koláče se v dnešním rychlém světě trochu ztrácejí.
              Chci ukázat, že se dají připravit opravdu dobře, tradičně ale i s moderním
              nádechem. Proto jsem tady a sdílím recepty, které fungují.
            </p>

            {/* Sociální sítě */}
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

      {/* KONTAKTNÍ FORMULÁŘ */}
      <section className="container contact-section" id="contact" style={{ paddingBottom: 96 }}>
        <Eyebrow>Napiš mi</Eyebrow>
        <h2 style={{ marginTop: 12, marginBottom: 40 }}>
          <em>Kontaktujte</em> mě
        </h2>
        <ContactForm onPrivacy={onPrivacy} />
      </section>

    </main>
  );
};

Object.assign(window, { About });
