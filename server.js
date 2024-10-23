import { createRequestHandler } from "@remix-run/netlify";

export const handler = createRequestHandler({
  // Enable this if you want to forcefully purge the cache of your app
  // cache: 'manual'
});
