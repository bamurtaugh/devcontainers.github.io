$('#small-nav-dropdown').change(function() {
  window.location = $(this)
    .find('option:selected')
    .val()
})

// Theme Toggle Functionality
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;
  
  // Exit if theme toggle elements are not present
  if (!themeToggle || !themeIcon) {
    return;
  }
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply the saved theme
  if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    
    // Update icon
    if (body.classList.contains('dark-theme')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });
}

// Initialize theme toggle when DOM is ready
document.addEventListener('DOMContentLoaded', initThemeToggle);

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
})