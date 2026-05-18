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
      <label className="contact-consent" style={{ flexDirection: 'row' }}>
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
      <Button variant="primary" type="submit" style={{ alignSelf: 'flex-start' }} disabled={status === 'sending' || !consent}>
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

          <div className="about-title">
            <Eyebrow>O mně</Eyebrow>
            <h1 style={{ marginTop: 16 }}>
              Ahoj, jsem <em>Eva</em>
            </h1>
          </div>

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
            <a href="https://www.tiktok.com/@evkapecie" target="_blank" rel="noopener noreferrer">
              <Icon name="tiktok" size={16} stroke={1.6} />
              TikTok
            </a>
            <a href="https://www.facebook.com/profile.php?id=61577433120544" target="_blank" rel="noopener noreferrer">
              <Icon name="facebook" size={16} stroke={1.6} />
              Facebook
            </a>
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
      </section>

      {/* KONTAKTNÍ FORMULÁŘ */}
      <section className="container contact-section" id="contact" style={{ paddingBottom: 96 }}>
        <h2 style={{ marginBottom: 40 }}>
          <em>Kontaktujte</em> mě
        </h2>
        <ContactForm onPrivacy={onPrivacy} />
      </section>

    </main>
  );
};

Object.assign(window, { About });
