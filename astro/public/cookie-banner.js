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
    var banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
  }

  var banner  = document.getElementById('cookie-banner');
  var prefs   = document.getElementById('cookie-prefs');
  var prefsBtn = document.getElementById('cookie-prefs-btn');
  var consent = localStorage.getItem('cookie_consent');

  if (!banner) return; // safety guard

  if (consent === 'accepted') {
    loadGA();
  } else if (!consent) {
    banner.style.display = 'flex';
  }

  /* Více informací — link to privacy page */
  var moreBtn = document.getElementById('cookie-more');
  if (moreBtn) {
    moreBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = '/ochrana-soukromi';
    });
  }

  /* Zobrazit předvolby */
  if (prefsBtn) {
    prefsBtn.addEventListener('click', function () {
      var open = prefs.style.display !== 'none';
      prefs.style.display = open ? 'none' : 'block';
      prefsBtn.textContent = open ? 'Zobrazit předvolby' : 'Skrýt předvolby';
    });
  }

  /* Odmítnout */
  var declineBtn = document.getElementById('cookie-decline');
  if (declineBtn) {
    declineBtn.addEventListener('click', function () {
      localStorage.setItem('cookie_consent', 'declined');
      hideBanner();
    });
  }

  /* Přijmout vše */
  var acceptBtn = document.getElementById('cookie-accept');
  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      var analyticsChecked = document.getElementById('cookie-analytics-check').checked;
      localStorage.setItem('cookie_consent', analyticsChecked ? 'accepted' : 'declined');
      if (analyticsChecked) loadGA();
      hideBanner();
    });
  }
})();
