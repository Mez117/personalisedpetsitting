<template>

    <v-container class="fill-height" style="max-width: 1500px;">

        <v-responsive>

                <h1 class="text-center" :class="[smAndDown ? 'text-h2 ma-5' : 'text-h1 ma-10']">Package Options</h1>

                <v-divider></v-divider>

                <!-----------------------------------------Independent Fur Child heading + price-------------------------------------------------->

                <v-row no-gutters class="ml-2 my-4">

                    <v-col cols="me-auto">
                        <h1 :class="[smAndDown ? 'text-h5' : 'text-h3']">Independent Fur Child</h1>
                    </v-col>

                    <v-col cols="auto">
                        <v-card class="py-1" justify="end"><p :class="[smAndDown ? 'px-1' : 'text-h4 px-5']">$85 / Night</p></v-card>
                    </v-col>

                </v-row>

                <!---------------------------------Independent Fur Child Photo on large screens + header---------------------------------------->

                <v-card variant="outlined pr-4">

                    <v-row style="max-height: 580px">

                        <v-col v-if="mdAndUp" cols="3">
                            <v-img
                            src="/fur_packs/fur3.jpg"
                            :height=500
                            :width=300
                            cover
                            alt="pet package photo"
                            ></v-img>
                        </v-col>

                        <v-col :cols="[smAndDown ? 12 : 9]" class="pl-5">
                            
                            <p class="my-3 text-center" :class="[xs ? 'smallerFontSize' : 'largerFontSize my-5 pr-3']">
                                This package is amazing for pets that have a regular routine of being left at home whilst their owner is at work.
                            </p>
                            <p :class="[xs ? 'text-h6 mt-3 text-center' : 'text-h5 mt-5 ml-2']">
                                This package Includes:
                            </p>

                            <!---------------------------------Independent Fur Child list of features---------------------------------------->

                            <v-list class="overflow-auto pb-10 mt-3" style="background-color: inherit; max-height: 350px;">

                                <v-list-item
                                v-for="item in pack1"
                                :key="item"
                                class="custom-list-item long-list rounded-lg"
                                :class="[xs ? 'phone-list' : 'packages-long-list']"
                                :border="black"
                                >
                                    <v-list-item-content>
                                        <v-list-item-title class="v-list-title">{{ item }}</v-list-item-title>
                                    </v-list-item-content>

                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-card> 

                <!---------------------------------Link to Booking Page---------------------------------------->

                <v-row justify="center">
                    <v-col cols="auto" class="mt-3">
                        <v-btn
                        color="primary" 
                        size="large" 
                        to="/bookings/" 
                        target="_blank"
                        :width="250">
                            Book Now
                        </v-btn>
                    </v-col>
                </v-row>

                <v-divider class="border-opacity-50 mt-5" color="info" :thickness="2"></v-divider>

                <!-----------------------------------------Fur Baby Package heading + price-------------------------------------------------->

                <v-row no-gutters class="ml-2 my-4 mt-8">

                    <v-col cols="me-auto">
                        <h1 :class="[smAndDown ? 'text-h5' : 'text-h3']">Fur Baby Package</h1>
                    </v-col>
                    <v-col cols="auto">
                        <v-card class="py-1" justify="end"><p :class="[smAndDown ? 'px-1' : 'text-h4 px-5']">$120 / Night</p></v-card>
                    </v-col>

                </v-row>

                <!---------------------------------Fur Baby Package Photo on large screens + header---------------------------------------->

                <v-card variant="outlined">

                    <v-row style="max-height: 580px">

                        <v-col v-if="mdAndUp" cols="3">
                            <v-img
                            src="/fur_packs/fur1.jpg"
                            :height="500"
                            :width="300"
                            cover
                            alt="pet package photo"
                            ></v-img>
                        </v-col>

                        <v-col :cols="[smAndDown ? 12 : 9]" class="pl-5">

                            <p class="my-3 text-center" :class="[xs ? 'smallerFontSize px-2' : 'largerFontSize my-5 pr-3']">
                                This is our most popular package!! This package is great for any owners that loves regular updates and doesn’t have pets that suffer from separation anxiety.
                            </p>
                            <p :class="[xs ? 'text-h6 mt-3 text-center' : 'text-h5 mt-5 ml-2']">
                                This Package Includes:
                            </p>

                            <!---------------------------------Fur Baby Package list of features---------------------------------------->

                            <v-list class="overflow-auto pb-8 mt-3" style="background-color: inherit; max-height: 320px;">

                                <v-list-item
                                v-for="item in pack2"
                                :key="item"
                                class="custom-list-item long-list rounded-lg"
                                :class="[xs ? 'phone-list' : 'packages-long-list']"
                                :border="black"
                                >

                                    <v-list-item-content>
                                        <v-list-item-title class="v-list-title">{{ item }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-card>

                <!---------------------------------Link to Booking Page---------------------------------------->

                <v-row justify="center">
                    <v-col cols="auto" class="mt-3">
                        <v-btn
                        color="primary" 
                        size="large" 
                        to="/bookings/" 
                        target="_blank"
                        :width="250">
                            Book Now</v-btn>
                    </v-col>
                </v-row>

                <v-divider class="border-opacity-50 mt-5" color="info" :thickness="2"></v-divider>

                <!-----------------------------------------The Seperation Anxiety Package heading + price-------------------------------------------------->

                <v-row no-gutters class="ml-2 my-4 mt-8" align="center">

                    <v-col cols="me-auto">
                        <h1 :class="[smAndDown ? 'text-h5' : 'text-h3']">The Separation Anxiety Package</h1>
                    </v-col>
                    <v-col cols="auto">
                        <v-card class="py-1" justify="end"><p :class="[smAndDown ? 'px-1' : 'text-h4 px-5']">$250 / Night</p></v-card>
                    </v-col>

                </v-row>

                <!---------------------------------The Seperation Anxiety Package Photo on large screens + header---------------------------------------->

                <v-card variant="outlined">

                    <v-row>

                        <v-col v-if="mdAndUp" cols="3">
                            <v-img
                            src="/fur_packs/fur2.jpg"
                            :height="500"
                            :width="300"
                            cover
                            alt="pet package photo"
                            ></v-img>
                        </v-col>

                        <v-col :cols="[smAndDown ? 12 : 9]" class="pl-5">
                            
                            <p class="my-3" :class="[xs ? 'smallerFontSize px-2' : 'largerFontSize my-5 pr-3']">
                                This package is the best package for any pets that suffer from separation anxiety and require the petsitter to be with your pet consistently throughout the booking. If you as the owner also suffer from separation anxiety from your beloved pets this packages includes the largest amount of daily update!
                            </p>
                            <p :class="[xs ? 'text-h6 mt-3 text-center' : 'text-h5 ml-2']">
                                This Package Includes:
                            </p>

                            <!---------------------------------The Seperation Anxiety Package list of features---------------------------------------->

                            <v-list 
                            class="overflow-auto pb-8 mt-3" 
                            style="background-color: inherit;" 
                            :style="[smAndDown ? 'max-height: 320px;' : mdAndDown ? 'max-height: 233px;' : '']"
                            >

                                <v-list-item
                                    v-for="item in pack3"
                                    :key="item"
                                    class="custom-list-item long-list rounded-lg"
                                    :class="[xs ? 'phone-list' : 'packages-long-list']"
                                    :border="black"
                                >
                                    <v-list-item-content>
                                        <v-list-item-title class="v-list-title">{{ item }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                    </v-card>

                    <!---------------------------------Link to Booking Page---------------------------------------->

                    <v-row justify="center">

                        <v-col cols="auto" class="mt-3 mb-8">
                            <v-btn
                            color="primary" 
                            size="large" 
                            to="/bookings/" 
                            target="_blank"
                            :width="250">
                                Book Now</v-btn>
                        </v-col>
                    </v-row>
        </v-responsive>
    </v-container>
</template>

<script>
import { useDisplay } from 'vuetify'

export default {

    data() {

        ///////////////List of everything included in each pack/////////////////

        return {

            pack1: [
                '1-3 Update Daily',
                'Daily Exercise',
                'Physical and Mental Enrichment',
                'Feeding all meals',
                'Administering of any Medication',
                'Adhering to all house rules',
                'Maintaining security of the house',
                'Pet can be left for a MAX of 10 hours',
                "Maintaining pet's routine to the best of the petsitters ability",
                'General tidy up of house when the petsitter leaves',
                'Grooming pet (if required, not including bath)',
            ],
            pack2: [
                '3-6 updates daily',
                'Daily Exercise',
                'Physical and Mental Enrichment',
                'Feeding all meals',
                "Maintaining pet's routine to the best of the petsitters ability",
                'Grooming pet (if required, not including bath)',
                'Adhering to all house rules',
                'Maintaining security of the house',
                'Thorough clean up of house when the Petsitter leaves',
                'Pet can be left a max of 6 hours',
            ],
            pack3: [
                '6-10 daily updates',
                '1 FaceTime every other day during the booking.',
                'Daily Exercise',
                'Physical and Mental Enrichment',
                'Feeding all meals',
                "Maintaining pet's routine to the best of the petsitters ability",
                'Grooming pet (if required, not including bath)',
                'Adhering to all house rules',
                'Maintaining security of the house',
                'Spotless and Deep clean of the house before the Petsitter leaves',
                'The petsitter not leaving your pets for more than 2 hours',
            ],
        }
    },

    setup() {
        const { smAndDown, mdAndUp, xs, mdAndDown } = useDisplay(); //Display sizes to use as reference points to adjust the layout depending on the page width
        
        return {
            smAndDown,
            mdAndUp, 
            mdAndDown,
            xs,
        }
    }
}


</script>

<style>

.largerFontSize {
    font-size: 20px;
}

.smallerFontSize {
    font-size: 17px;
}

</style>