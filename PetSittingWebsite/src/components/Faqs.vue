<template>

    <v-container style="max-width: 1000px;">

        <v-responsive>

                <!------------------------------------------------------Heading------------------------------------------------------------------>

                <h1 class="text-center" :class="[xs ? 'text-h4 my-4' : 'text-h2 ma-7']">Frequently Asked Questions</h1>

                <v-divider class="mt-5" />

                <!------------------------------------------------------FAQs------------------------------------------------------------------>

                <v-row>

                    <v-col cols="12">

                        <h1 class="text-h5 mt-10">Why choose Personalised Petsitting?</h1>
                        <p class="mt-4">Personalised Petsitting not only has over 4 years experiences in the field, we hold a certification, first aid and a large number of 5 star reviews from happy customers that can’t get enough of their petsitter.  </p>
                        
                        <h1 class="text-h5 mt-8">Why Petsit at your own home?</h1>
                        <p class="mt-2">Your home is not only your pet’s most familiar enviroment it is also the safest pet your pet can be in. With the biggest change of you as the owner being there by only changing one </p>
                        
                        <h1 class="text-h5 mt-8">How to book?</h1>
                        <p class="mt-2">Go to the "booking" page via the burger menu or from the home page, fill in the required details and we will contact you shortly after.</p>

                        <h1 class="text-h5 mt-8">Why is a meet and greet needed before the booking is confirmed?</h1>
                        <p class="mt-2">A meet and greet is a great way for everyone including your pets, a chance to met before the booking and ensure that not only you as the paying client but the Personalised Petsitter are happy and comfortable with everything. Meet and Greets are important because this is also the time that you petsitter gets all the information about everything they will need to know for the booking, for example the location of all your pets supplies, emergency contact, rough routine of your pet, house rule, etc. </p>
                        
                        <h1 class="text-h5 mt-8">How far in advance should I book?</h1>
                        <p class="mt-2">The earlier the better is always best as it ensures that you secure the dates of your booking. If you are booking the separation anxiety package over a month is a minimal requirement as your petsitter will need to organised work related affairs. </p>
                    
                    </v-col>
                </v-row>
        </v-responsive>
    </v-container>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {
    setup() {
        const { smAndDown, mdAndUp, xs, smAndUp } = useDisplay(); //Display sizes to use as reference points to adjust the layout depending on the page width

        return {
            smAndDown,
            smAndUp,
            mdAndUp, 
            xs,
        };
    }
}
</script>

<style scoped>

p {
    text-align: justify;
}

</style>