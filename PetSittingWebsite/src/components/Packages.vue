<template>
    <v-container class="fill-height">
        <v-responsive>
            <!-- <v-row> -->
                <v-card class="bg-orange-lighten-4 section">
                    <h1 class="text-h3 pa-3">Independent Fur Child</h1>
                    <v-row>
                        <v-col cols="auto">
                            <v-img
                            src="/fur_packs/fur3.jpg"
                            :height="500"
                            :width="350"
                            cover
                            ></v-img>
                        </v-col>
                        <v-col class="pl-5 pr-10">
                            
                            <!-- <h1 class="text-subtitle-1 pt-5 mb-10">This package is amazing for pets that have a regular routine of being left at home whilst their owner is at work.</h1> -->
                            <ul class="furlist" style="text-align: left; width: 500px; line-height: 30px;">
                                <li>1-3 Update Daily</li>
                                <li>Daily Exercise</li>
                                <li>Physical and Mental Enrichment</li>
                                <li>Feeding all meals</li>
                                <li>Administering of any Medication</li>
                                <li>Maintaining pet's routine to the best of the petsitters ability</li>
                                <li>Cleaning of all pets waste</li>
                                <li>Grooming pet (if required, not including bath)</li>
                                <li>Adhering to all house rules</li>
                                <li>Taking out bins</li>
                                <li>Maintaining security of the house</li>
                                <li>General tidy up of house when the petsitter leaves</li>
                                <li>Pet can be left for a max of 10 hours</li>
                                <li>The petsitter has a free designated parking spot</li>
                                <li>Petsitter has access to any food left in house. (Not including alcohol or items specifically noted not to consume.)</li>
                            </ul>
                        </v-col>
                    </v-row>
                </v-card> 

                <v-card class="bg-orange-lighten-4 section">
                    <v-row>
                        <v-col cols="4">
                            <v-img
                            src="/fur_packs/fur1.jpg"
                            :height="500"
                            :width="350"
                            cover
                            ></v-img>
                        </v-col>
                        <v-col class="pa-5 pr-10">
                            <h1 class="text-h3 pt-5">The Fur Baby Package</h1>
                            <h1 class="text-subtitle-1 pt-5 mb-10">This is our most popular package!! This package is great for any owners that loves regular updates and doesn’t have pets that suffer from separation anxiety.This package <br /><br />INCLUDES everything in the Independent Fur Child, PLUS:</h1>
                            <ul class="furlist" style="text-align: left">
                                <li>3-6 updates daily</li>
                                <li>Pet can be left a max of 6 hours </li>
                                <li>General tidy + sanitised all surfaces</li>
                            </ul>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="bg-orange-lighten-4">
                    <v-row>
                        <v-col cols="4">
                            <v-img
                            src="/fur_packs/fur2.jpg"
                            :height="500"
                            :width="350"
                            cover
                            ></v-img>
                        </v-col>
                        <v-col class="pa-5 pr-10">
                            <h1 class="text-h3 pt-5">The Separation Anxiety Package</h1>
                            <h1 class="text-subtitle-1 pt-5 mb-10">This package is the best package for any pets that suffer from separation anxiety and require the petsitter to be with your pet consistently throughout the booking. If you as the owner also suffer from separation anxiety from your beloved pets this package includes 6-10 updates daily and a FaceTime call to you every second day This package <br /><br />INCLUDES everything listed in package 1, PLUS:</h1>
                            <ul class="furlist" style="text-align: left">
                                <li>6-10 daily updates</li>
                                <li>1 FaceTime every other day during the booking.</li>
                                <li>Spotless home</li>
                                <li>The petsitter not leaving your pets for more than 2 hours.</li>
                            </ul>
                        </v-col>
                    </v-row>
                    </v-card>
                
            <!-- </v-row> -->
        </v-responsive>
    </v-container>
</template>

<script setup>

</script>

<style>

.section {
    width: 100%;
    margin: 20px 0;
}

</style>