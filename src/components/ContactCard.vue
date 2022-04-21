<template>
  <v-card class="mx-auto">
    <v-list-item>
      <v-list-item-avatar size="56">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png"></v-img>
      </v-list-item-avatar>

      <v-list-item-content class="ml-4">
        <v-list-item-title class="title" v-html="contact.name"></v-list-item-title>

        <div class="d-flex align-center mt-2">
          <v-icon color="purple">mdi-phone</v-icon>
          <span class="body-2 ml-2">{{ contact.contact }}</span>
        </div>

        <div class="d-flex align-center mt-2">
          <v-icon color="purple">mdi-email</v-icon>
          <span class="body-2 ml-2">{{ contact.email }}</span>
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-divider class="purple mx-4"></v-divider>

    <v-card-actions>
      <v-list-item>
        <v-spacer></v-spacer>
        <v-btn @click="onEdit(contact)" class="mb-0" color="purple" dark fab small>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn @click="onDelete(contact)" class="ml-5" color="purple" dark fab small>
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn @click="onDetail(contact)" class="ml-5" color="purple" dark fab small>
          <v-icon>mdi-card-account-details</v-icon>
        </v-btn>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ContactCard',
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEdit(contact) {
      this.$emit('onEdit', contact);
    },
    onDelete(contact) {
      if (!this.user.loggedIn) {
        this.$router.push({ name: 'login' });
      }
      this.$emit('onDelete', contact);
    },
    onDetail(contact) {
      this.$emit('onDetail', contact);
    },
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
};
</script>

<style lang="scss" scoped></style>
