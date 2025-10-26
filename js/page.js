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
  
  // Initialize tooltips
  initGlossaryTooltips();
})

// Initialize glossary tooltips
function initGlossaryTooltips() {
  // Ensure tooltips stay within viewport on mobile
  const tooltips = document.querySelectorAll('.glossary-term');
  
  tooltips.forEach(tooltip => {
    tooltip.addEventListener('mouseenter', function() {
      const tooltipContent = this.querySelector('.tooltip-content');
      if (tooltipContent) {
        const rect = tooltipContent.getBoundingClientRect();
        
        // Adjust if tooltip goes off-screen to the right
        if (rect.right > window.innerWidth) {
          tooltipContent.style.left = 'auto';
          tooltipContent.style.right = '0';
          tooltipContent.style.transform = 'translateX(0)';
        }
        
        // Adjust if tooltip goes off-screen to the left
        if (rect.left < 0) {
          tooltipContent.style.left = '0';
          tooltipContent.style.transform = 'translateX(0)';
        }
      }
    });
    
    // Add keyboard accessibility
    tooltip.setAttribute('tabindex', '0');
    tooltip.setAttribute('role', 'button');
    tooltip.setAttribute('aria-label', 'Show definition');
  });
}