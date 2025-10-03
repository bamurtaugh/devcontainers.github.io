// Theme Switcher
(function() {
  const THEME_KEY = 'devcontainers-theme';
  const DEFAULT_THEME = 'purple-github';
  
  const themes = {
    'purple-github': { name: 'Purple (GitHub)', primary: '#8250df' },
    'purple-light': { name: 'Purple Light', primary: '#8250df' },
    'purple-dark': { name: 'Purple Dark', primary: '#6639ba' },
    'orange-light': { name: 'Orange Light', primary: '#f97316' },
    'orange-dark': { name: 'Orange Dark', primary: '#ea580c' },
    'blue-original': { name: 'Blue (Original)', primary: '#2753E3' }
  };

  // Get current theme from localStorage or default
  function getCurrentTheme() {
    return localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
  }

  // Set theme
  function setTheme(themeName) {
    if (!themes[themeName]) {
      themeName = DEFAULT_THEME;
    }
    
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem(THEME_KEY, themeName);
    
    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor && themes[themeName]) {
      metaThemeColor.setAttribute('content', themes[themeName].primary);
    }
    
    // Update dropdown if it exists
    const themeSelect = document.getElementById('theme-selector');
    if (themeSelect) {
      themeSelect.value = themeName;
    }
  }

  // Initialize theme on page load
  function initTheme() {
    const currentTheme = getCurrentTheme();
    setTheme(currentTheme);
  }

  // Create theme switcher UI
  function createThemeSwitcher() {
    const navbarNav = document.querySelector('.navbar-nav');
    if (!navbarNav) return;

    const themeItem = document.createElement('li');
    themeItem.className = 'nav-item';
    
    const themeSelect = document.createElement('select');
    themeSelect.id = 'theme-selector';
    themeSelect.className = 'form-control form-control-sm theme-selector';
    themeSelect.style.cssText = 'margin: 0.5rem; max-width: 150px; display: inline-block;';
    
    // Add option for each theme
    Object.keys(themes).forEach(function(themeKey) {
      const option = document.createElement('option');
      option.value = themeKey;
      option.textContent = themes[themeKey].name;
      themeSelect.appendChild(option);
    });
    
    // Set current theme
    themeSelect.value = getCurrentTheme();
    
    // Handle theme change
    themeSelect.addEventListener('change', function() {
      setTheme(this.value);
    });
    
    themeItem.appendChild(themeSelect);
    navbarNav.appendChild(themeItem);
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initTheme();
      createThemeSwitcher();
    });
  } else {
    initTheme();
    createThemeSwitcher();
  }
})();
