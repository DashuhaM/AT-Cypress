import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    baseUrl: "https://qauto.forstudy.space/",
     // Приховати XHR запити в логах
  experimentalModifyObstructiveThirdPartyCode: true,
  pageLoadTimeout: 90000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
