<script setup lang="ts">
import BugZapLogoTransparent from "@/assets/bugzapper-transparent.png";
import { ref, onMounted } from "vue";

const searchText = ref("");
const apps = ref<App>([]);

const sectionRefs = ref<HTMLElement[]>([]);
const visibleSections = ref<Set<number>>(new Set());

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const index = sectionRefs.value.indexOf(entry.target as HTMLElement);
      if (entry.isIntersecting) {
        visibleSections.value.add(index);
      }
    });
  },
  {
    threshold: 0.1
  }
);

onMounted(() => {
  sectionRefs.value.forEach((section) => observer.observe(section));
});
</script>

<template>
  <v-container max-width="500">
    <div class="header-bar d-flex text-black font-weight-bold">
      <v-spacer />
      <RouterLink to="login">Log In</RouterLink>
    </div>

    <section id="title">
      <div class="d-flex justify-center align-center flex-wrap">
        <div class="img-container">
          <v-img :src="BugZapLogoTransparent" width="128" class="mx-auto" />
        </div>
        <h1 class="text-center text-h2 font-weight-bold mb-10">Bug Zapper</h1>
      </div>
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
      <div
        v-for="(section, index) in [
          {
            title: 'Catch bugs early',
            text: 'Bug Zapper provides a clean and simple interface for your users to report bugs in detail, including screenshots and system information.'
          },
          {
            title: 'Track user feedback',
            text: 'Bug Zapper allows users to view and comment on bugs to promote user feedback and track your users\' interest and priority.'
          },
          {
            title: 'Monitor bug status',
            text: 'Bug Zapper provides a comprehensive dashboard for app owners to track bug status, view summary statistics, and understand the overall health of their applications at a glance.'
          }
        ]"
        :key="index"
        :ref="
          (el) => {
            if (el) sectionRefs[index] = el as HTMLElement;
          }
        "
        class="about-subsection"
        :class="{ 'fade-in': visibleSections.has(index) }"
      >
        <h3 class="text-color-primary">{{ section.title }}</h3>
        <p>{{ section.text }}</p>
      </div>
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

.img-container {
  flex: 0 0 100%;
}

#title {
  height: calc(100vh - 5rem);
}

#about {
  height: 100vh;
}

.about-subsection {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}

.about-subsection.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.about-subsection:not(:first-child) {
  margin-top: 2.5rem;
}
</style>
