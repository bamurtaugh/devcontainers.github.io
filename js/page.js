// Theme customization functionality
(function() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTheme);
  } else {
    initializeTheme();
  }
  
  function initializeTheme() {
    // Initialize theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    const reducedMotion = localStorage.getItem('reducedMotion') === 'true';
    
    // Apply saved theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Apply reduced motion preference
    if (reducedMotion) {
      document.documentElement.setAttribute('data-reduced-motion', 'true');
      const reduceMotionToggle = document.getElementById('reduce-motion-toggle');
      if (reduceMotionToggle) {
        reduceMotionToggle.checked = true;
      }
    }
    
    // Mark active theme in menu
    const activeOption = document.querySelector(`.theme-option[data-theme="${savedTheme}"]`);
    if (activeOption) {
      activeOption.classList.add('active');
    }
    
    // Theme toggle button handler
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeMenu = document.getElementById('theme-menu');
    
    if (themeToggleBtn && themeMenu) {
      themeToggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        themeMenu.classList.toggle('show');
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!themeToggleBtn.contains(e.target) && !themeMenu.contains(e.target)) {
          themeMenu.classList.remove('show');
        }
      });
    }
    
    // Theme option click handlers
    const themeOptions = document.querySelectorAll('.theme-option');
    themeOptions.forEach(function(option) {
      option.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        
        // Update UI
        themeOptions.forEach(function(opt) {
          opt.classList.remove('active');
        });
        this.classList.add('active');
        
        // Apply theme
        document.documentElement.setAttribute('data-theme', theme);
        
        // Save preference
        localStorage.setItem('theme', theme);
        
        // Close menu
        if (themeMenu) {
          themeMenu.classList.remove('show');
        }
      });
    });
    
    // Reduced motion toggle handler
    const reduceMotionToggle = document.getElementById('reduce-motion-toggle');
    if (reduceMotionToggle) {
      reduceMotionToggle.addEventListener('change', function() {
        const isChecked = this.checked;
        
        if (isChecked) {
          document.documentElement.setAttribute('data-reduced-motion', 'true');
          localStorage.setItem('reducedMotion', 'true');
        } else {
          document.documentElement.removeAttribute('data-reduced-motion');
          localStorage.setItem('reducedMotion', 'false');
        }
      });
    }
    
    // Respect system preferences if no saved preference
    if (!localStorage.getItem('theme')) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        const darkOption = document.querySelector(`.theme-option[data-theme="dark"]`);
        const lightOption = document.querySelector(`.theme-option[data-theme="light"]`);
        if (darkOption) darkOption.classList.add('active');
        if (lightOption) lightOption.classList.remove('active');
      }
    }
    
    // Listen for system preference changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        // Only auto-switch if user hasn't manually selected a theme
        if (!localStorage.getItem('theme')) {
          const newTheme = e.matches ? 'dark' : 'light';
          document.documentElement.setAttribute('data-theme', newTheme);
          themeOptions.forEach(function(opt) {
            opt.classList.remove('active');
          });
          const newOption = document.querySelector(`.theme-option[data-theme="${newTheme}"]`);
          if (newOption) {
            newOption.classList.add('active');
          }
        }
      });
    }
  }
})();

// Small navigation dropdown handler
if (typeof $ !== 'undefined') {
  $(function() {
    $('#small-nav-dropdown').change(function() {
      window.location = $(this)
        .find('option:selected')
        .val()
    });
  });
} else {
  // Vanilla JS fallback
  document.addEventListener('DOMContentLoaded', function() {
    const smallNavDropdown = document.getElementById('small-nav-dropdown');
    if (smallNavDropdown) {
      smallNavDropdown.addEventListener('change', function() {
        window.location = this.value;
      });
    }
  });
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