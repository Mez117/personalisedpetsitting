<template>
  <v-app-bar app flat color="rgb(56,127,147)" style="border-bottom: 3px solid white">
    <v-btn 
      v-if="mdAndUp"
      icon="mdi-home" 
      to="/"
      variant="plain"
      @click="scrollToTopAfter()"
    ></v-btn>
    <v-menu v-if="smAndDown">
    <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon="mdi-menu"></v-btn>
    </template>
          <v-btn 
            
            v-for="(item, index) in items"
            :key="index"
            :to="item.link"
            style="text-decoration: none;"
            width="150"
            rounded="0"
            variant="flat" 
            color="primary"
            draggable="false"
            @click="scrollToTopAfter()"
          >{{ item.title }}</v-btn>

    </v-menu>

    <v-btn 
      to="/" 
      @click="scrollToTopAfter()"
      class="py-7 d-flex align-center" 
      :class="[smAndDown ? 'ml-0 pa-1' : 'ml-2 pa-5']"
      variant="plain" 
      style="opacity: 100% !important;" 
      draggable="false"
    >
      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <img src="/logo/square.png" style="max-height: 50px;" :class="[smAndDown ? 'mr-2' : 'mr-6']"  draggable="false" :href="'#section1'" />
          <h1 :class="[smAndDown ? 'text-body-1' : 'text-h5']">Personalised Petsitting</h1>
        </v-col>
      </v-row>
    </v-btn>
    <template v-if="mdAndUp" v-slot:append>
      <v-btn to="/bookings" @click="scrollToTopAfter()">
        Booking
      </v-btn>
      <v-btn to="/gallery" @click="scrollToTopAfter()">
        Gallery
      </v-btn>
      <v-btn to="/packages" @click="scrollToTopAfter()">
        Packages
      </v-btn>
      <v-btn to="/reviews" @click="scrollToTopAfter()">
        Reviews
      </v-btn>
      <v-btn to="/faqs" @click="scrollToTopAfter()">
        FAQs
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import { useDisplay } from 'vuetify'

  export default {
    data: () => ({
      items: [
        { title: 'Petsitting', link: '/'},
        { title: 'Packages', link: '/packages/'},
        { title: 'Booking', link: '/bookings/'},
        { title: 'Gallery', link: '/gallery/'},
        { title: 'Reviews', link: '/reviews/'},
        { title: 'FAQs', link: '/faqs/'},
      ]
    }),

    methods: {
      scrollToTopAfter() {
            setTimeout(() => { 
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }, 50);
        return;
      }
    },
    setup() {
      const { smAndDown, mdAndUp } = useDisplay();

      return {
        smAndDown,
        mdAndUp,
      };
    },

  };
</script>

<style>

</style>