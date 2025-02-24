<template>
    <v-container style="max-width: 1300px;">
        <v-responsive>
            <h1 class="text-h3 my-5 text-center">Gallery of our amazing pets</h1>
                <div class="text-center">
                    <div 
                        v-for="item in dogpics"
                        :key="item"
                        class="boxes"
                        :class="[smAndDown ? 'mobileBox' : null]"
                    >
                        <img :src=" item " alt="" class="gap" />
                    </div>
                </div>
        </v-responsive>
    </v-container>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
    data() {
        return {
            dogpics: [
                '/PetSitting/lara_dogs/dog13.jpg',
                '/PetSitting/lara_dogs/dog5.jpg',
                '/PetSitting/lara_dogs/pbatchtwo1.jpg',
                '/PetSitting/lara_dogs/dog14.jpg',
                '/PetSitting/lara_dogs/dog8.jpg',
                '/PetSitting/lara_dogs/dog15.jpg',
                '/PetSitting/lara_dogs/pbatchtwo2.jpg',
                '/PetSitting/lara_dogs/dog9.jpg',
                '/PetSitting/lara_dogs/pbatchtwo3.jpg',
                '/PetSitting/lara_dogs/dog1.jpg',
                '/PetSitting/lara_dogs/pbatchtwo4.jpg',
                '/PetSitting/lara_dogs/dog2.jpg',
                '/PetSitting/lara_dogs/pbatchtwo5.jpg',
                '/PetSitting/lara_dogs/dog3.jpg',
                '/PetSitting/lara_dogs/pbatchtwo6.jpg',
                '/PetSitting/lara_dogs/dog4.jpeg',
                '/PetSitting/lara_dogs/dog6.jpg',
                '/PetSitting/lara_dogs/pbatchtwo7.jpg',
                '/PetSitting/lara_dogs/dog7.jpg',
                '/PetSitting/lara_dogs/dog10.jpg',
                '/PetSitting/lara_dogs/pbatchtwo8.jpg',
                '/PetSitting/lara_dogs/dog11.jpg',
                '/PetSitting/lara_dogs/pbatchtwo9.jpg',
                '/PetSitting/lara_dogs/dog12.jpg',
            ],
        }
    },
    setup() {
    const { smAndDown, mdAndUp, xs } = useDisplay();
    
    return {
        smAndDown,
        mdAndUp, 
        xs,
    }
    }, 
}

</script>