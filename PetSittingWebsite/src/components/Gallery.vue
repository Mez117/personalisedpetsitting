<template>

    <v-container style="max-width: 1300px;">

        <v-responsive>

            <!------------------------------------------------------Heading------------------------------------------------------------------>

            <h1 class="text-center" :class="[xs ? 'text-h4 my-4' : 'text-h2 ma-7']">Gallery of our amazing pets</h1>

            <!------------------------------------------------------Gallery of all photos------------------------------------------------------------------>

            <v-row class="py-8">

                <div class="text-center">

                    <div 
                    v-for="(photo, index) in visiblePhotos"
                    :key="index"
                    class="boxes"
                    :class="[smAndDown ? 'mobileBox' : null]"
                    >
                        <img :src=" photo.src " alt="pet photo" class="gap" />

                    </div>

                    <v-btn v-if="hasMorePhotos" @click="showMore" class="mt-5" color="primary">
                        Show More
                    </v-btn>
                </div>
            </v-row>
        </v-responsive>
    </v-container>
</template>

<script>
import { useDisplay } from 'vuetify';
import { ref, computed } from 'vue';

export default {
    
    setup() {

        ////////////All Images/////////////

        const allDogPics = ref([
            { src: "/lara_dogs/dog13.jpg", alt: "Petsitting Photo1" },
            { src: "/lara_dogs/dog5.jpg", alt: "Petsitting Photo2" },
            { src: "/lara_dogs/pbatchtwo1.jpg", alt: "Petsitting Photo3" },
            { src: "/lara_dogs/dog14.jpg", alt: "Petsitting Photo4" },
            { src: "/lara_dogs/dog8.jpg", alt: "Petsitting Photo5" },
            { src: "/lara_dogs/dog15.jpg", alt: "Petsitting Photo6" },
            { src: "/lara_dogs/pbatchtwo2.jpg", alt: "Petsitting Photo7" },
            { src: "/lara_dogs/dog9.jpg", alt: "Petsitting Photo8" },
            { src: "/lara_dogs/pbatchtwo3.jpg", alt: "Petsitting Photo9" },
            { src: "/lara_dogs/dog1.jpg", alt: "Petsitting Photo10" },
            { src: "/lara_dogs/pbatchtwo4.jpg", alt: "Petsitting Photo11" },
            { src: "/lara_dogs/dog2.jpg", alt: "Petsitting Photo12" },
            { src: "/lara_dogs/pbatchtwo5.jpg", alt: "Petsitting Photo13" },
            { src: "/lara_dogs/dog3.jpg", alt: "Petsitting Photo14" },
            { src: "/lara_dogs/pbatchtwo6.jpg", alt: "Petsitting Photo15" },
            { src: "/lara_dogs/dog4.jpeg", alt: "Petsitting Photo16" },
            { src: "/lara_dogs/dog6.jpg", alt: "Petsitting Photo17" },
            { src: "/lara_dogs/pbatchtwo7.jpg", alt: "Petsitting Photo18" },
            { src: "/lara_dogs/dog7.jpg", alt: "Petsitting Photo19" },
            { src: "/lara_dogs/dog10.jpg", alt: "Petsitting Photo20" },
            { src: "/lara_dogs/pbatchtwo8.jpg", alt: "Petsitting Photo21" },
            { src: "/lara_dogs/dog11.jpg", alt: "Petsitting Photo22" },
            { src: "/lara_dogs/pbatchtwo9.jpg", alt: "Petsitting Photo23" },
            { src: "/lara_dogs/dog12.jpg", alt: "Petsitting Photo24" },
            { src: "/reviews/r5.jpg", alt: "Petsitting Photo25" },
            { src: "/reviews/r6.jpg", alt: "Petsitting Photo26" },
            { src: "/reviews/r7.jpg", alt: "Petsitting Photo27" },
            { src: "/reviews/r8.jpg", alt: "Petsitting Photo28" },
            { src: "/reviews/r9.jpg", alt: "Petsitting Photo29" },
            { src: "/reviews/r10.jpg", alt: "Petsitting Photo30" },
            { src: "/reviews/r11.jpg", alt: "Petsitting Photo31" },
            { src: "/reviews/r12.jpg", alt: "Petsitting Photo32" },
            { src: "/reviews/r13.jpg", alt: "Petsitting Photo33" },
            { src: "/reviews/r14.jpg", alt: "Petsitting Photo34" },
            { src: "/reviews/r15.jpg", alt: "Petsitting Photo35" },
            { src: "/reviews/r16.jpg", alt: "Petsitting Photo36" },
        ]);

        const photosPerPage = ref(12); //Value equating to the amount of photos that are being displayed (starting at 12)
        const visiblePhotos = computed(() => allDogPics.value.slice(0, photosPerPage.value)); //Slices from allDogPics using photosPerPage value to show that specific amount
        const hasMorePhotos = computed(() => photosPerPage.value < allDogPics.value.length); //hasMorePhotos = true if not all photosPerPage != the amount of allDogPics

        const showMore = () => { //Adds 8 to the photosPerPage value
            photosPerPage.value += 8;
        };

        const { smAndDown, mdAndUp, xs } = useDisplay(); //Display sizes to use as reference points to adjust the layout depending on the page width
        
        return {
            smAndDown,
            mdAndUp, 
            xs,
            visiblePhotos,
            hasMorePhotos,
            showMore,
        }
    }, 
}

</script>