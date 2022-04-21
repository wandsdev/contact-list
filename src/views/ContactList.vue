<template>
  <div>
    <v-col offset-xs="1" xs="10" offset-sm="1" sm="10" offset-md="3" md="6" offset-lg="4" lg="4" >
      <v-btn class="my-4" color="purple" dark block @click="$router.push({name: 'contactAdd'})">
        <v-icon class="mr-4" right dark>mdi-account-plus</v-icon>
        Add
      </v-btn>

      <v-list v-for="item in contacts" :key="item.id">
        <ContactCard @onEdit="edit" @onDelete="onDelete" @onDetail="onDetail" :contact="item" />
      </v-list>

      <v-dialog v-model="removeDialog" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h5">
            Do you want to delete this record?
          </v-card-title>
          <v-divider class="purple mx-4"></v-divider>

          <v-card-actions class="py-4">
            <v-spacer></v-spacer>
            <v-btn color="purple" dark @click="remove()">
              Yes
            </v-btn>
            <v-btn color="purple" outlined @click="removeDialog = false">
              No
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
    </v-col>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ContactCard from '../components/ContactCard.vue';
import ContactCrud from '../localstorage/ContactCrud';

export default {
  components: { ContactCard },
  data: () => ({
    contacts: [],
    contact: {},
    removeDialog: false,
  }),
  async mounted() {
    this.load();
  },
  methods: {
    ...mapActions('Contact', ['setContact']),
    async load() {
      this.contacts = await ContactCrud.findAll();
    },
    edit(contact) {
      this.setContact(contact);
      this.$router.push({ name: 'contactEdit', params: { id: contact.id } });
    },
    onDelete(contact) {
      this.removeDialog = true;
      this.contact = contact;
    },
    onDetail(contact) {
      this.setContact(contact);
      this.$router.push({ name: 'contactDetail' });
    },
    async remove() {
      ContactCrud.delete(this.contact.id);
      this.removeDialog = false;
      await this.load();
    },
  },
};
</script>

<style lang="scss" scoped></style>
