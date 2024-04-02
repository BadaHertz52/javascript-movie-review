import { defineConfig } from 'cypress';

import * as env from './cypress.env.json';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
  },
  env: {
    TMDB_API_KEY: env.tmdbApiKey,
  },
});
