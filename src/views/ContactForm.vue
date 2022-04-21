<template>
  <v-col offset-xs="1" xs="10" offset-sm="1" sm="10" offset-md="3" md="6" offset-lg="4" lg="4">
    <v-form class="mt-4" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        color="purple"
        prepend-inner-icon="mdi-account"
        v-model="formData.name"
        outlined
        label="Name"
        :rules="nameRules"
        :error-messages="errorMessages.name"
        type="text"
      ></v-text-field>

      <v-text-field
        color="purple"
        prepend-inner-icon="mdi-phone"
        v-model="formData.contact"
        outlined
        label="contact"
        :rules="contactRules"
        :error-messages="errorMessages.contact"
        type="text"
      ></v-text-field>

      <v-text-field
        color="purple"
        prepend-inner-icon="mdi-email"
        v-model="formData.email"
        outlined
        label="Email"
        :rules="emailRules"
        :error-messages="errorMessages.email"
        type="email"
      ></v-text-field>

      <v-btn v-if="addMode" color="purple" block dark large @click="add()"> Adicionar </v-btn>
      <v-btn v-else color="purple" block dark large @click="update()"> Editar </v-btn>
    </v-form>
  </v-col>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ContactCrud from '../localstorage/ContactCrud';

export default {
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length > 5) || 'Name must be less than 6 characters',
    ],
    contactRules: [
      v => (v.length === 9) || 'Contact must be 9 digits',
    ],
    emailRules: [
      v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
    ],
    formData: {
      id: '',
      name: '',
      contact: '',
      email: '',
    },
    errorMessages: {},
    addMode: true,
  }),
  mounted() {
    if (this.$route.name === 'contactEdit') {
      if (!this.getContact.id) {
        this.$router.push({ name: 'contactList' });
      }
      this.addMode = false;
      this.formData = this.getContact;
    }
  },
  methods: {
    ...mapActions('Contact', ['setContact']),
    add() {
      if (this.$refs.form.validate()) {
        this.formData.id = this.generateId();
        ContactCrud.create(this.formData);
        this.$refs.form.resetValidation();
        this.resetForm();
      }
    },
    update() {
      ContactCrud.update(this.formData);
      this.resetForm();
      this.setContact({});
      this.$router.push({ name: 'contactList' });
    },
    generateId() {
      return new Date().getTime();
    },
    resetForm() {
      this.formData.name = '';
      this.formData.contact = '';
      this.formData.email = '';
    },
  },
  computed: {
    ...mapGetters('Contact', ['getContact']),
  },
};
</script>

<style lang="scss" scoped></style>
