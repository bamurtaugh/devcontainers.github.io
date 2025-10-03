$('#small-nav-dropdown').change(function() {
  window.location = $(this)
    .find('option:selected')
    .val()
})

/**
 * Font Customization Feature
 * 
 * Allows users to choose from 5 different font families for the site.
 * The selected font is applied globally and persists across sessions using localStorage.
 */

/**
 * Initializes the font customization feature
 * - Loads the user's previously saved font preference from localStorage
 * - Applies the saved (or default) font to the page
 * - Sets up an event listener to handle font changes
 */
function initFontCustomization() {
  const fontSelector = document.getElementById('font-selector');
  
  // Exit early if font selector is not found in the DOM
  if (!fontSelector) return;

  // Load the user's saved font preference from localStorage, defaulting to 'source-sans' if none exists
  const savedFont = localStorage.getItem('preferredFont') || 'source-sans';
  
  // Apply the saved font to the page
  applyFont(savedFont);
  
  // Update the dropdown to show the currently selected font
  fontSelector.value = savedFont;

  // Listen for changes to the font selector dropdown
  fontSelector.addEventListener('change', function() {
    const selectedFont = this.value;
    
    // Apply the newly selected font immediately
    applyFont(selectedFont);
    
    // Save the user's font preference to localStorage for future visits
    localStorage.setItem('preferredFont', selectedFont);
  });
}

/**
 * Applies the specified font to the entire page by updating the body element's CSS class
 * 
 * @param {string} fontName - The font identifier (e.g., 'source-sans', 'open-sans', 'roboto')
 * 
 * How it works:
 * 1. Removes all existing font classes from the body element
 * 2. Adds the new font class (e.g., 'font-roboto')
 * 3. CSS rules for each font class define the actual font-family to use
 */
function applyFont(fontName) {
  const body = document.body;
  
  // Remove all existing font classes to ensure only one font is active at a time
  body.classList.remove('font-source-sans', 'font-open-sans', 'font-roboto', 'font-lato', 'font-merriweather');
  
  // Add the CSS class for the selected font (e.g., 'font-roboto')
  // The corresponding CSS rule (e.g., body.font-roboto) defines the actual font-family
  body.classList.add('font-' + fontName);
}

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

/**
 * Font Customization Initialization
 * 
 * Initialize the font customization feature as early as possible, independent of jQuery.
 * This ensures the user's font preference is applied immediately when the page loads.
 * 
 * The code checks the document's readyState:
 * - If 'loading': DOM is still being parsed, so wait for DOMContentLoaded event
 * - Otherwise ('interactive' or 'complete'): DOM is ready, initialize immediately
 */
if (document.readyState === 'loading') {
  // DOM is still loading, wait for it to be ready
  document.addEventListener('DOMContentLoaded', initFontCustomization);
} else {
  // DOM is already ready, initialize immediately
  initFontCustomization();
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