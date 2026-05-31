window.CONFIG = {
  MARKETING_URL: 'https://way2better.com',
  APP_URL: 'https://app.way2better.com',
  LOGIN_URL: 'https://app.way2better.com/login',
  REGISTER_URL: 'https://app.way2better.com/register'
};

document.addEventListener('DOMContentLoaded', () => {
  // Automatically rewrite any local/relative login or signup references in HTML templates
  document.querySelectorAll('a[href*="login.html"]').forEach(el => {
    const href = el.getAttribute('href');
    if (href.includes('redirect=')) {
      const redirectPage = href.split('redirect=').pop();
      el.setAttribute('href', `${window.CONFIG.LOGIN_URL}?redirect=${redirectPage}`);
    } else {
      el.setAttribute('href', window.CONFIG.LOGIN_URL);
    }
  });

  document.querySelectorAll('a[href*="signup.html"]').forEach(el => {
    el.setAttribute('href', window.CONFIG.REGISTER_URL);
  });
});
