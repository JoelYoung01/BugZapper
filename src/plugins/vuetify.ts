// Vuetify
import "@/assets/styles/custom-vuetify.scss";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify, type ThemeDefinition } from "vuetify";

// To customize SASS variables, follow the guide here: https://vuetifyjs.com/en/features/sass-variables

const grey = "#3e434b";
const yellow = "#ffe120";

const MainTheme: ThemeDefinition = {
  dark: true,
  colors: {
    // Add color overrides here
    background: grey,
    surface: grey,
    primary: yellow
  },
  variables: {
    // Add CSS Variables here
    // https://github.com/vuetifyjs/vuetify/discussions/18883#discussioncomment-7868798
  }
};

export const vuetify = createVuetify({
  theme: {
    defaultTheme: "MainTheme",
    themes: {
      MainTheme
    }
  }
});
