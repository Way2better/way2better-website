// PWA Manager: Registration and Installation Helper

let deferredPrompt;

// 1. Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => {
        console.log('SW Registered!', reg);
      })
      .catch((err) => {
        console.log('SW Registration failed:', err);
      });
  });
}

// 2. Handle Installation Prompt
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  
  // Show the install button if it exists
  const installBtn = document.getElementById('pwa-install-btn');
  if (installBtn) {
    installBtn.classList.remove('hidden');
    installBtn.classList.add('flex');
  }
});

// 3. Trigger Installation
function installApp() {
  if (!deferredPrompt) {
    return;
  }
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the PWA prompt');
    } else {
      console.log('User dismissed the PWA prompt');
    }
    deferredPrompt = null;
    // We keep the button visible as per user request for "available across all pages"
  });
}

// 4. Global access if needed
window.installApp = installApp;
