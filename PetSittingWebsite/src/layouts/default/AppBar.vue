<template>
  <v-app-bar app flat color="rgb(56,127,147)" style="border-bottom: 3px solid rgba(0, 0, 0, 0.5);">
    <!-- <v-app-bar-nav-icon icon="mdi-menu"></v-app-bar-nav-icon> -->
    <v-menu 
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn 
          icon="mdi-menu" 
          color="green-lighten-3"
          v-bind="props"
        ></v-btn>
      </template>
          <!-- <router-link 
            
            v-for="(item, index) in items"
            :key="index"
            :to="item.link"
            style="text-decoration: none;"
            ><v-btn 
              width="150"
              rounded="0"
              variant="flat" 
              color="primary"
            >{{ item.title }}
            </v-btn>
          </router-link> -->
           
            <v-btn 
              v-for="(item, index) in items"
              :key="index"
              :to="item.link"
              rounded="0"
              variant="flat" 
              color="primary"
            >
              {{ item.title }}
            </v-btn>
            <v-btn rounded="0" variant="flat" color="primary" href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWF-ElxUNUNMMldHTE1QS1E3WTlDRzAxSlVIMVBGQi4u" target="_blank">Create a Booking</v-btn>
    </v-menu>
    <v-btn 
      class="ml-4 pa-5 py-7 d-flex align-center" 
      variant="plain" 
      style="opacity: 100% !important;" 
      draggable="false"
      @click="handleSectionClick('section1')"
    >
      <v-row>
        <v-col cols="12" class="d-flex align-center">
          <img src="/logo/square.png" style="max-height: 50px;" class="mr-6"  draggable="false" :href="'#section1'" />
          <h1 class="text-h5">Personalised Petsitting</h1>
        </v-col>
      </v-row>
    </v-btn>
    <template v-slot:append>
      <v-btn @click="handleSectionClick('section2')">
        About Us
      </v-btn>
      <v-btn @click="handleSectionClick('section3')">
        Gallery
      </v-btn>
      <v-btn @click="handleSectionClick('section4')">
        Packages
      </v-btn>
      <v-btn @click="handleSectionClick('section5')">
        Reviews
      </v-btn>
      <v-btn @click="handleSectionClick('section6')">
        FAQs
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
  //
</script>

<script>

  export default {
    data: () => ({
      items: [
        { title: 'Petsitting', link: '/petsitting/'},
        { title: 'Fur Packages', link: '/packages/'},
        // { title: 'Create a Booking', link: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWF-ElxUNUNMMldHTE1QS1E3WTlDRzAxSlVIMVBGQi4u'},
      ],
      // menu: false,
    }),
    methods: {
      handleSectionClick(sectionId) {
        // Check if the current route is "/petsitting"
        if (this.$route.path === '/petsitting') {
          // If already on "/petsitting", scroll to the "About" section
          this.ScrollToSection(sectionId);
        } else {
          // If not on "/petsitting", navigate to the "/petsitting" route
          this.$router.push('/petsitting').then(() => {
            // Use nextTick to ensure the scroll happens after navigation
            this.$nextTick(() => {
              this.ScrollToSection(sectionId);
            });
          });
        }
      },
      ScrollToSection(sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
          let offsetTop;

          // Check if it's section1 and scroll to the top
          if (sectionId === 'section1') {
            offsetTop = 0; // Scroll to the very top of the page
          } else {
            // Calculate the offset to center the section in the viewport
            const sectionRect = section.getBoundingClientRect();
            offsetTop = sectionRect.top + window.scrollY - window.innerHeight / 2 + sectionRect.height / 2;
          }

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    }

  }
</script>

<style>

</style>