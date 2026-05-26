import { defineConfig } from "cypress";
import "dotenv/config";
import { config } from "dotenv"; 

config({ path: ".env.prod" });

export default defineConfig({
  allowCypressEnv: false,
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  reporter: 'mochawesome',

  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      basicLogin:    "guest",
      basicPassword: "welcome2qauto",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
