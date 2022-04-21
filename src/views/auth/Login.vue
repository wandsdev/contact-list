<template>
  <v-container class="px-4 py-2" style="height: 90vh; max-width: 420px">
    <v-row class="justify-center mt-6 mb-6">
      <v-img class="" src="/logo2.png"></v-img>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="12" md="12" lg="12" class="px-0 mx-0 py-0">
        <v-form class="">
          <v-text-field
            color="purple"
            prepend-inner-icon="mdi-email"
            v-model="formData.email"
            outlined
            name="login"
            label="Email"
            :error-messages="errorMessages.email"
            type="text"
          ></v-text-field>
          <v-text-field
            color="purple"
            prepend-inner-icon="mdi-lock"
            v-model="formData.password"
            :error-messages="errorMessages.password"
            outlined
            label="Senha"
            type="password"
          ></v-text-field>
          <v-btn color="purple" block dark large @click="login"> Entrar </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row class="justify-space-between mt-2"> </v-row>
  </v-container>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  auth: 'guest',
  data: () => ({
    formData: {
      email: '',
      password: '',
    },
    errorMessages: {},
  }),
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.formData.email, this.formData.password)
        .then((userCredential) => {
          console.log(userCredential);
          this.$router.replace({ name: 'contactList' });
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });
    },
  },
};
</script>

<style lang='scss' scoped></style>
