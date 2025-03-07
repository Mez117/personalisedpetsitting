<template>
    <v-footer class="bg-black" :height="smAndDown ? 250 : 200">
        <v-row class="h-100">
            <v-col :cols="smAndDown ? 6 : 4">
                <h5 class="text-h5">Check out our socials</h5>

                <v-spacer class="my-2"/>

                <a href="https://www.instagram.com/personalised_petsitting/" target="_blank">
                    <v-btn 
                        prepend-icon="mdi-instagram" 
                        variant="text" 
                        class="bg-pink"
                        :size="xs ? 'small' : 'large'"
                    >Instagram</v-btn>
                </a>

                <v-spacer />

                <a href="https://www.facebook.com/personalisedpetsitting" target="_blank">
                    <v-btn 
                        prepend-icon="mdi-facebook" 
                        variant="text" 
                        class="bg-blue mt-2"
                        :size="xs ? 'small' : 'large'"
                    >Facebook</v-btn>
                </a>

            </v-col>

            <v-col cols="4" v-if="mdAndUp" class="text-center">
                <h5 class="text-subtitle-1 d-block mb-4">Contact Us</h5>
                <h5 class="text-subtitle-1 d-block mb-2">Email: personalisedpetsitting@outlook.com</h5>
                <h5 class="text-subtitle-1 d-block">Ph: 0478 230 410 </h5>
            </v-col>

            <v-col :cols="smAndDown ? 6 : 4" class="text-right pr-5">
                <h5 class="text-h4 mb-2">Links</h5>

                <router-link to="/" class="links" @click="scrollToTopAfter()">
                    Home
                </router-link>
                <router-link to="/bookings" class="links right-links" @click="scrollToTopAfter()">
                    Booking
                </router-link>

                <v-spacer class="my-2"/>

                <router-link to="/gallery" class="links" @click="scrollToTopAfter()">
                    Gallery
                </router-link>
                <router-link to="/packages" class="links right-links" @click="scrollToTopAfter()">
                    Packages
                </router-link>

                <v-spacer class="my-2"/>

                <router-link to="/reviews" class="links" @click="scrollToTopAfter()">
                    Reviews
                </router-link>
                <router-link to="/faqs" class="links right-links" @click="scrollToTopAfter()">
                    FAQs
                </router-link>
            </v-col>
            <v-col v-if="smAndDown" cols="12" class="pt-0">
                <h5 :class="[smAndDown ? 'text-subtitle-1' : 'text-subtitle-1 mb-4']">Contact Us</h5>
                <h5 :class="[smAndDown ? '' : 'text-subtitle-1 mb-4']">Email: personalisedpetsitting@outlook.com</h5>
                <h5 :class="[smAndDown ? '' : 'text-subtitle-1 mb-4']">Ph: 0478 230 410 </h5>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
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
        const { xs, smAndDown, mdAndUp } = useDisplay();

        return { xs, smAndDown, mdAndUp }
    }
}
</script>

<style>

.links {
    color: white;
    width: 70px;
    display: inline-block;
    text-align: left;
}

.right-links {
    text-align: right;
}

@media (max-width: 360px) {
    .links {
        font-size: 14px;
        width: 60px;
    }
} 
</style>