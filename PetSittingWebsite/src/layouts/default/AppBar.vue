<template>

  <v-app-bar color="rgb(56,127,147)" style="border-bottom: 3px solid white">

    <!--------Home button for larger sized screens---------->

    <v-btn 
    v-if="mdAndUp"
    icon="mdi-home" 
    to="/"
    variant="plain"
    @click="scrollToTopAfter()"
    ></v-btn>

    <!--------Drop down burger menu for smaller screens---------->

    <v-menu v-if="smAndDown">

      <template v-slot:activator="{ props }">

          <v-btn v-bind="props" icon="mdi-menu"></v-btn>

      </template>

      <v-btn 
      v-for="(item, index) in items"
      :key="index"
      :to="item.link"
      width="150"
      rounded="0"
      variant="flat" 
      color="primary"
      draggable="false"
      @click="scrollToTopAfter()"
      >
        {{ item.title }}
      </v-btn>

    </v-menu>

    <!--------Logo + Company Name in the form of a button that links back to the home page---------->

    <v-btn 
    to="/" 
    @click="scrollToTopAfter()"
    class="py-7 d-flex" 
    :class="[smAndDown ? 'ml-0 pa-1' : 'ml-2 pa-5']"
    variant="plain" 
    style="opacity: 100% !important;" 
    draggable="false"
    ><v-row>

        <v-col cols="12" class="d-flex align-center">

          <img 
          src="/logo/square.png" 
          style="max-height: 50px;" 
          :class="[smAndDown ? 'mr-2' : 'mr-6']"  
          draggable="false" 
          />

          <h1 :class="[smAndDown ? 'text-body-1 tiny-screen' : 'text-h5']">
            Personalised Petsitting</h1>

        </v-col>

    </v-row>
    </v-btn>

    <!--------Links to all pages for Larger screens---------->

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

      //////////////////Links for burger menu//////////////////

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

      scrollToTopAfter() { //Scroll to top function taking you to the very top of the page after clicking on any link

            setTimeout(() => { //Timeout to prevent page loading and scroll function happening at the same time

              window.scrollTo({

                top: 0,
                behavior: 'smooth'
              });
            }, 50);
        return;
      }
    },

    setup() {

      const { smAndDown, mdAndUp } = useDisplay(); //Display sizes to use as reference points to adjust the layout depending on the page width

      return {
        smAndDown,
        mdAndUp,

      };
    },
  };
</script>

<style>

@media (max-width: 340px) {
  
  .tiny-screen {  
    font-size: 14px !important;
  }

}

</style>