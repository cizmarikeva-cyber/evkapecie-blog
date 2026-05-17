(function () {
  var GA_ID = 'G-NVMG8WLWL1';

  function loadGA() {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
  }

  function hideBanner() {
    document.getElementById('cookie-banner').style.display = 'none';
  }

  function navigateToPrivacy() {
    window.history.pushState({ name: 'privacy', slug: null }, '');
    window.dispatchEvent(new PopStateEvent('popstate', { state: { name: 'privacy', slug: null } }));
    window.scrollTo(0, 0);
  }

  var banner  = document.getElementById('cookie-banner');
  var prefs   = document.getElementById('cookie-prefs');
  var prefsBtn = document.getElementById('cookie-prefs-btn');
  var consent = localStorage.getItem('cookie_consent');

  if (consent === 'accepted') {
    loadGA();
  } else if (!consent) {
    banner.style.display = 'flex';
  }

  /* Více informací — otvorí privacy stránku, banner zostáva */
  document.getElementById('cookie-more').addEventListener('click', function (e) {
    e.preventDefault();
    navigateToPrivacy();
  });

  /* Zobrazit předvolby — rozbalí/zbalí sekciu */
  prefsBtn.addEventListener('click', function () {
    var open = prefs.style.display !== 'none';
    prefs.style.display = open ? 'none' : 'block';
    prefsBtn.textContent = open ? 'Zobrazit předvolby' : 'Skrýt předvolby';
  });

  /* Odmítnout — uloží zamietnutie */
  document.getElementById('cookie-decline').addEventListener('click', function () {
    localStorage.setItem('cookie_consent', 'declined');
    hideBanner();
  });

  /* Přijmout vše / Uložit předvolby */
  document.getElementById('cookie-accept').addEventListener('click', function () {
    var analyticsChecked = document.getElementById('cookie-analytics-check').checked;
    localStorage.setItem('cookie_consent', analyticsChecked ? 'accepted' : 'declined');
    if (analyticsChecked) loadGA();
    hideBanner();
  });
})();
