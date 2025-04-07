<script setup lang="ts">
import BugZapLogoTransparent from "@/assets/bugzapper-transparent.png";
import FadeIn from "@/components/FadeIn.vue";
import { ref } from "vue";

const searchText = ref("");
const apps = ref<string[]>([]);
</script>

<template>
  <v-container max-width="500">
    <div class="header-bar d-flex text-black font-weight-bold">
      <v-spacer />
      <RouterLink to="login">Log In</RouterLink>
    </div>

    <section id="title">
      <div class="mx-auto">
        <v-img :src="BugZapLogoTransparent" width="200" aspect-ratio="1" />
      </div>
      <h1 class="text-center text-h2 font-weight-bold mb-10">Bug Zapper</h1>
      <v-autocomplete
        v-model="searchText"
        variant="outlined"
        label="Find an app"
        class="flex-grow-0"
        :items="apps"
        rounded
        append-inner-icon="mdi-magnify"
      />
    </section>

    <section id="about">
      <h2 class="text-h4 font-weight-bold mb-5">What is Bug Zapper?</h2>
      <FadeIn class="mb-10">
        <h3 class="text-color-primary">Catch bugs early</h3>
        <p>
          Bug Zapper provides a clean and simple interface for your users to report bugs in detail,
          including screenshots and system information.
        </p>
      </FadeIn>
      <FadeIn class="mb-10">
        <h3 class="text-color-primary">Track user feedback</h3>
        <p>
          Bug Zapper allows users to view and comment on bugs to promote user feedback and track
          your users' interest and priority.
        </p>
      </FadeIn>
      <FadeIn class="mb-10">
        <h3 class="text-color-primary">Monitor bug status</h3>
        <p>
          Bug Zapper provides a comprehensive dashboard for app owners to track bug status, view
          summary statistics, and understand the overall health of their applications at a glance.
        </p>
      </FadeIn>
    </section>
  </v-container>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header-bar {
  margin-bottom: 1rem;
}

#title {
  height: calc(100vh - 5rem);
}

#about {
  height: 100vh;
}
</style>
