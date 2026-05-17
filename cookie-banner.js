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

  var banner = document.getElementById('cookie-banner');
  var consent = localStorage.getItem('cookie_consent');

  if (consent === 'accepted') {
    loadGA();
  } else if (!consent) {
    banner.style.display = 'flex';
  }

  document.getElementById('cookie-accept').addEventListener('click', function () {
    localStorage.setItem('cookie_consent', 'accepted');
    banner.style.display = 'none';
    loadGA();
  });

  document.getElementById('cookie-decline').addEventListener('click', function () {
    localStorage.setItem('cookie_consent', 'declined');
    banner.style.display = 'none';
  });
})();
