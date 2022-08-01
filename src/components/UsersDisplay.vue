<template>
  <v-card>
    <v-toolbar color="primary" elevation="3" dark rounded="0">
      <v-toolbar-title>Users list</v-toolbar-title>
    </v-toolbar>
  </v-card>
  <v-card class="ma-4">
    <v-list>
      <v-list-item v-for="user in users" :key="user.id" two-line>
        <v-list-item-title>Name: {{ user.name }}</v-list-item-title>
        <v-list-item-title>UserName: {{ user.username }}</v-list-item-title>
        <v-list-item-subtitle>website: {{ user.website }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "UsersDisplay",
  computed: mapState({
    users: (state) => state.Users.users,
  }),
  methods: {
    ...mapActions({
      fetchUsers: "Users/getUsers",
    }),
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>
