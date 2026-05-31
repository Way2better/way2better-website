export const CONFIG = {
  MARKETING_URL: import.meta.env.VITE_MARKETING_URL || 'https://way2better.com',
  APP_URL: import.meta.env.VITE_APP_URL || 'https://app.way2better.com',
  LOGIN_URL: `${import.meta.env.VITE_APP_URL || 'https://app.way2better.com'}/login`,
  REGISTER_URL: `${import.meta.env.VITE_APP_URL || 'https://app.way2better.com'}/register`,
};
