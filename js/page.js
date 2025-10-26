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

  // Initialize glossary tooltips
  initializeGlossaryTooltips();
})

// Glossary tooltip initialization
function initializeGlossaryTooltips() {
  // Add tooltips to elements with data-term attribute
  const glossaryElements = document.querySelectorAll('[data-term]');
  
  glossaryElements.forEach(function(element) {
    const term = element.getAttribute('data-term');
    const definition = element.getAttribute('data-definition');
    
    if (definition) {
      // Create tooltip element
      const tooltip = document.createElement('span');
      tooltip.className = 'glossary-tooltip';
      tooltip.textContent = definition;
      tooltip.setAttribute('role', 'tooltip');
      
      // Make the element focusable for keyboard accessibility
      if (!element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '0');
      }
      
      // Add ARIA attributes for accessibility
      element.setAttribute('aria-describedby', 'tooltip-' + term.replace(/\s+/g, '-'));
      tooltip.setAttribute('id', 'tooltip-' + term.replace(/\s+/g, '-'));
      
      // Append tooltip to element
      element.appendChild(tooltip);
      
      // Position tooltip on hover/focus to keep it in viewport
      element.addEventListener('mouseenter', function() {
        positionTooltip(element, tooltip);
      });
      
      element.addEventListener('focus', function() {
        positionTooltip(element, tooltip);
      });
    }
  });
}

// Position tooltip to ensure it stays within viewport
function positionTooltip(element, tooltip) {
  setTimeout(function() {
    const rect = tooltip.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    
    // Reset position
    tooltip.style.bottom = '';
    tooltip.style.top = '';
    tooltip.style.left = '';
    tooltip.style.transform = '';
    
    // Check if tooltip goes off the left edge
    if (rect.left < 0) {
      tooltip.style.left = '0';
      tooltip.style.transform = 'none';
    }
    // Check if tooltip goes off the right edge
    else if (rect.right > window.innerWidth) {
      tooltip.style.left = 'auto';
      tooltip.style.right = '0';
      tooltip.style.transform = 'none';
    }
    // Default centered position
    else {
      tooltip.style.left = '50%';
      tooltip.style.transform = 'translateX(-50%)';
    }
    
    // Check if tooltip goes off the top edge
    if (rect.top < 0) {
      tooltip.style.bottom = 'auto';
      tooltip.style.top = '100%';
      tooltip.style.marginTop = '8px';
      tooltip.style.marginBottom = '0';
    }
  }, 0);
}