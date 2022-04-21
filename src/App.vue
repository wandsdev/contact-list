<template>
  <v-app>
    <v-app-bar
      app
      color="purple"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <span class="title" style="cursor: pointer;" @click="$router.push({ name: 'contactList' })">Contact List</span>
      </div>

      <v-spacer></v-spacer>

      <v-menu offset-y v-if="user.loggedIn">
        <template v-slot:activator="{ on, attrs }">
          <v-avatar v-bind="attrs" v-on="on">
            <img
              src='https://cdn.vuetifyjs.com/images/john.jpg'
              alt='John'
            >
          </v-avatar>
        </template>
        <v-list>
          <v-list-item>
            <span>Joao</span>
          </v-list-item>
          <v-list-item>
            <v-btn outlined color="purple" class="singout" @click="logout()">Sair</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>

      <span v-else class="mr-4 " style="cursor: pointer" @click="$router.push('/login')">Logar</span>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import { getAuth, signOut } from 'firebase/auth';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    async logout() {
      const auth = getAuth();
      try {
        const routeIndexPage = 'contactList';
        await signOut(auth);
        this.$router.replace('/');
        if (this.$route.name === routeIndexPage) {
          window.location.reload();
        } else {
          this.$router.push({ name: routeIndexPage });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
};
</script>

<style scoped>
.singout {
  cursor: pointer;
}
</style>
