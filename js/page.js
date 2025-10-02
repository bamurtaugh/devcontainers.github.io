$('#small-nav-dropdown').change(function() {
  window.location = $(this)
    .find('option:selected')
    .val()
})

// Theme customization functionality
$(function() {
  // Initialize theme from localStorage or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  const reducedMotion = localStorage.getItem('reducedMotion') === 'true';
  
  // Apply saved theme
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Apply reduced motion preference
  if (reducedMotion) {
    document.documentElement.setAttribute('data-reduced-motion', 'true');
    $('#reduce-motion-toggle').prop('checked', true);
  }
  
  // Mark active theme in dropdown
  $(`.theme-option[data-theme="${savedTheme}"]`).addClass('active');
  
  // Theme option click handlers
  $('.theme-option').on('click', function() {
    const theme = $(this).data('theme');
    
    // Update UI
    $('.theme-option').removeClass('active');
    $(this).addClass('active');
    
    // Apply theme
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save preference
    localStorage.setItem('theme', theme);
  });
  
  // Reduced motion toggle handler
  $('#reduce-motion-toggle').on('change', function() {
    const isChecked = $(this).is(':checked');
    
    if (isChecked) {
      document.documentElement.setAttribute('data-reduced-motion', 'true');
      localStorage.setItem('reducedMotion', 'true');
    } else {
      document.documentElement.removeAttribute('data-reduced-motion');
      localStorage.setItem('reducedMotion', 'false');
    }
  });
  
  // Respect system preferences if no saved preference
  if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      $(`.theme-option[data-theme="dark"]`).addClass('active');
      $('.theme-option[data-theme="light"]').removeClass('active');
    }
  }
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only auto-switch if user hasn't manually selected a theme
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      $('.theme-option').removeClass('active');
      $(`.theme-option[data-theme="${newTheme}"]`).addClass('active');
    }
  });
});

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