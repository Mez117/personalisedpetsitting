<template>
    <v-container class="fill-height" style="max-width: 1500px;">
        <v-responsive>
                <h1 class="text-center ma-10" :class="[smAndDown ? 'text-h2' : 'text-h1']">Package Options</h1>
                <v-divider></v-divider>
                <v-row no-gutters class="ml-2 my-4">
                    <v-col cols="me-auto">
                        <h1 :class="[smAndDown ? 'text-h5' : 'text-h3']">Independent Fur Child</h1>
                    </v-col>
                    <v-col cols="auto">
                        <v-card class="py-1" justify="end"><p :class="[smAndDown ? 'px-1' : 'text-h4 px-5']">$85 / Night</p></v-card>
                    </v-col>
                </v-row>
                <v-card variant="outlined pr-4">
                    <v-row style="max-height: 580px">
                        <v-col v-if="mdAndUp" cols="auto">
                            <v-img
                            src="/fur_packs/fur3.jpg"
                            :height=500
                            :width=300
                            cover
                            ></v-img>
                        </v-col>
                        <v-col :cols="[smAndDown ? 12 : 9]" class="pl-5">
                            
                            <p 
                            class="my-3 text-center"
                            :class="[xs ? 'text-subtitle-1' : 'text-h6 my-5']"
                            >This package is amazing for pets that have a regular routine of being left at home whilst their owner is at work.</p>
                            <p 
                            :class="[xs ? 'text-h6 mt-3 text-center' : 'text-h5 mt-5 ml-2']"
                            >This package Includes...</p>
                            <v-list class="overflow-auto pb-10" style="background-color: inherit; max-height: 375px;">
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
                <v-row justify="center">
                    <v-col cols="auto" class="mt-3">
                        <v-btn
                        color="primary" 
                        size="large" 
                        to="/bookings/" 
                        target="_blank"
                        :width="250"
                        >Book Now</v-btn>
                    </v-col>
                </v-row>
                <v-row no-gutters class="ml-2 my-4 mt-8">
                    <v-col cols="me-auto">
                        <h1 :class="[smAndDown ? 'text-h5' : 'text-h3']">Fur Baby Package</h1>
                    </v-col>
                    <v-col cols="auto">
                        <v-card class="py-1" justify="end"><p :class="[smAndDown ? 'px-1' : 'text-h4 px-5']">$120 / Night</p></v-card>
                    </v-col>
                </v-row>
                <v-card variant="outlined">
                    <v-row style="max-height: 580px">
                        <v-col v-if="mdAndUp" cols="auto">
                            <v-img
                            src="/fur_packs/fur1.jpg"
                            :height="500"
                            :width="300"
                            cover
                            ></v-img>
                        </v-col>
                        <v-col :cols="[smAndDown ? 12 : 9]" class="pl-5">
                            <p 
                            class="my-3 text-center"
                            :class="[xs ? 'text-subtitle-1' : 'text-h6 my-5']"
                            >This is our most popular package!! This package is great for any owners that loves regular updates and doesn’t have pets that suffer from separation anxiety.
                            </p>
                            <p
                            :class="[xs ? 'text-h6 mt-3 text-center' : 'text-h5 mt-5 ml-2']"
                            >This Package Includes:</p>
                            <v-list style="background-color: inherit">

                                <v-list-item class="custom-list-item rounded-lg mx-auto" :border="black" style="background: white !important;">
                                    <v-list-item-title style="color: black;" class="v-list-title">INCLUDES EVERYTHING FROM THE INDEPENDENT FUR CHILD PACKAGE</v-list-item-title>
                                </v-list-item>

                                <v-list-item
                                    v-for="item in pack2"
                                    :key="item"
                                    class="custom-list-item rounded-lg mx-auto"
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

                <v-row justify="center">
                    <v-col cols="auto" class="mt-3">
                        <v-btn
                        color="primary" 
                        size="large" 
                        to="/bookings/" 
                        target="_blank"
                        :width="250"
                        >Book Now</v-btn>
                    </v-col>
                </v-row>

                <v-row no-gutters class="ml-2 my-4" align="center">
                    <v-col cols="me-auto">
                        <h1 :class="[smAndDown ? 'text-h5' : 'text-h3']">The Separation Anxiety Package</h1>
                    </v-col>
                    <v-col cols="auto">
                        <v-card class="py-1" justify="end"><p :class="[smAndDown ? 'px-1' : 'text-h4 px-5']">$250 / Night</p></v-card>
                    </v-col>
                </v-row>

                <v-card variant="outlined">
                    <v-row>
                        <v-col v-if="mdAndUp" cols="auto">
                            <v-img
                            src="/fur_packs/fur2.jpg"
                            :height="500"
                            :width="300"
                            cover
                            ></v-img>
                        </v-col>
                        <v-col :cols="[smAndDown ? 12 : 9]" class="pl-5">
                            <p 
                            class="my-3 text-center"
                            :class="[xs ? 'text-subtitle-1 px-2' : 'text-h6 my-5']"
                            >This package is the best package for any pets that suffer from separation anxiety and require the petsitter to be with your pet consistently throughout the booking. <br /><br />If you as the owner also suffer from separation anxiety from your beloved pets this package includes 6-10 updates daily and a FaceTime call to you every second day</p>
                            <p
                            :class="[xs ? 'text-h6 mt-3 text-center' : 'text-h5 mt-5 ml-2']"
                            >This Package Includes:</p>
                            <v-list style="background-color: inherit">

                                <v-list-item class="custom-list-item rounded-lg mx-auto" :border="black" style="background: white !important;">
                                    <v-list-item-title style="color: black;" class="v-list-title">INCLUDES EVERYTHING FROM THE INDEPENDENT FUR CHILD PACKAGE</v-list-item-title>
                                </v-list-item>

                                <v-list-item
                                    v-for="item in pack3"
                                    :key="item"
                                    class="custom-list-item rounded-lg mx-auto"
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

                    <v-row justify="center">
                    <v-col cols="auto" class="mt-3">
                        <v-btn
                        color="primary" 
                        size="large" 
                        to="/bookings/" 
                        target="_blank"
                        :width="250"
                        >Book Now</v-btn>
                    </v-col>
                </v-row>
                
            <!-- </v-row> -->
        </v-responsive>
    </v-container>
</template>



<script>
import { useDisplay } from 'vuetify'

export default {
    data() {
        return {

            pack1: [
                '1-3 Update Daily',
                'Daily Exercise',
                'Physical and Mental Enrichment',
                'Feeding all meals',
                'Administering of any Medication',
                'Cleaning of all pets waste',
                'Grooming pet (if required, not including bath)',
                'General tidy up of house when the petsitter leaves',
                'The petsitter has a free designated parking spot',
                'Adhering to all house rules',
                'Taking out the bins',
                'Maintaining security of the house',
                'Petsitter has access to any food left in house. (Not including alcohol or items specifically noted not to consume.)',
                "Maintaining pet's routine to the best of the petsitters ability",
                'Pet can be left for a MAX of 10 hours',
            ],
            pack2: [
                '3-6 updates daily',
                'Pet can be left a max of 6 hours',
                'General tidy + sanitised all surfaces',
            ],
            pack3: [
                '6-10 daily updates',
                'Spotless home',
                'The petsitter not leaving your pets for more than 2 hours',
                '1 FaceTime every other day during the booking.',
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
    }
}


</script>

<style>

</style>