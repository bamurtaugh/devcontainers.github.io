$('#small-nav-dropdown').change(function() {
  window.location = $(this)
    .find('option:selected')
    .val()
})

const site_tag = 'UA-62780441-30';
function loadAnalytics(gtag) {
  // set cookie to expire in 12 x 28 days
  gtag('config', site_tag, { 'anonymize_ip': true, 'cookie_expires': 29030400 })
}

function onConsentChanged() {
  function gtag() {
    window.dataLayer.push(arguments)
  }

  if (!consentRequired() || WcpConsent.siteConsent.getConsentFor(WcpConsent.consentCategories.Analytics)) {
    // Load GA
    loadAnalytics(gtag)
  }
}

function consentRequired() {
  return WcpConsent.siteConsent.isConsentRequired;
}

$(function() {
  // Load GA upfront because we classify it as essential cookie
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())

  window.WcpConsent && WcpConsent.init("en-US", "cookie-banner", function (err, _siteConsent) {
  }, onConsentChanged, WcpConsent.themes.light);

  const cookieManager = document.querySelector('#footer-cookie-link');
  if (consentRequired() && cookieManager && cookieManager.parentElement) {
    cookieManager.parentElement.style.display = '';
  }

  // initialize consent
  onConsentChanged();
  
  // Theme toggle functionality
  const DEFAULT_THEME = 'light';
  const DARK_THEME = 'dark';
  
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');
    if (themeIcon) {
      // Check for saved theme preference or default to light mode
      const savedTheme = localStorage.getItem('theme');
      const currentTheme = (savedTheme === DARK_THEME || savedTheme === DEFAULT_THEME) ? savedTheme : DEFAULT_THEME;
      
      function updateTheme(isDark) {
        if (isDark) {
          body.classList.add('dark-theme');
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
          themeToggle.setAttribute('aria-label', 'Switch to light mode');
          localStorage.setItem('theme', DARK_THEME);
        } else {
          body.classList.remove('dark-theme');
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
          themeToggle.setAttribute('aria-label', 'Switch to dark mode');
          localStorage.setItem('theme', DEFAULT_THEME);
        }
      }
      
      // Apply saved theme
      updateTheme(currentTheme === DARK_THEME);
      
      themeToggle.addEventListener('click', function() {
        const willBeDark = !body.classList.contains('dark-theme');
        updateTheme(willBeDark);
      });
    }
  }
})