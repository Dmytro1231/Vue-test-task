<template>
  <v-app>
    <v-main>
      <UsersDisplay />
    </v-main>
  </v-app>
</template>

<script>
import UsersDisplay from "./components/UsersDisplay.vue";

export default {
  name: "App",

  components: {
    UsersDisplay,
  },
};
</script>
