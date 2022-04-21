<template>
  <v-col offset-xs="1" xs="10" offset-sm="1" sm="10" offset-md="3" md="6" offset-lg="4" lg="4">
    <v-btn class="my-4" color="purple" dark block @click="$router.push({name: 'contactList'})">
      <v-icon class="mr-4" right dark>mdi-arrow-left-circle</v-icon>
      back
    </v-btn>
    <v-card max-width="375" class="mx-auto">
      <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="240px" dark>
        <v-row class="fill-height">
          <v-card-title>
            <v-spacer></v-spacer>
          </v-card-title>

          <v-spacer></v-spacer>
        </v-row>
      </v-img>

      <v-list two-line>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="purple"> mdi-account </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ contact.name }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="purple"> mdi-phone </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ contact.contact }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="purple"> mdi-email </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ contact.email }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-card>
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    contact: {},
  }),
  mounted() {
    if (!this.getContact.id) {
      this.$router.push({ name: 'contactList' });
    }
    this.contact = this.getContact;
  },
  computed: {
    ...mapGetters('Contact', ['getContact']),
  },
};
</script>

<style lang="scss" scoped></style>
