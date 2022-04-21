<template>
  <div>
    <v-col offset-xs="1" xs="10" offset-sm="1" sm="10" offset-md="3" md="6" offset-lg="4" lg="4" >
      <v-list v-for="item in contacts" :key="item.id">
        <ContactCard :contact="item" />
      </v-list>
    </v-col>
  </div>
</template>

<script>
import ContactCard from '../components/ContactCard.vue';

export default {
  components: { ContactCard },
  data: () => ({
    contacts: [
      {
        id: 1,
        name: 'test',
        contact: '965896745',
        email: 'test@gmail.com',
        image: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      },
      {
        id: 2,
        name: 'test 2',
        contact: '56894161',
        email: 'test@gmail.com',
        image: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
