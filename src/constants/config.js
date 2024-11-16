const ENVIRONMENT = process.env.NODE_ENV; // 'development', 'production', or 'test'

const BASE_URLS = {
  development: 'http://localhost:1337',
  staging: 'https://staging-api.yourdomain.com',
  production: 'https://api.yourdomain.com',
};

export const BASE_URL = BASE_URLS[ENVIRONMENT];