<template>
    <v-container class="fill-height">
        <v-responsive>
            <!-- <v-row> -->
                <v-card color="rgb(56,128,147)">
                    <h1 class="text-h1 text-center ma-10">Package Options Information</h1>
                </v-card>
                <v-row class="ml-2 my-8">
                    <v-card class="mr-4"><p class="text-h4 px-5 mt-1">$85</p></v-card>
                    <h1 class="text-h3">Independent Fur Child</h1>
                </v-row>
                <v-card class="bg-orange-lighten-4 section">
                    <v-row>
                        <v-col cols="auto">
                            <v-img
                            src="/fur_packs/fur3.jpg"
                            :height="500"
                            :width="350"
                            cover
                            ></v-img>
                        </v-col>
                        <v-col cols="8" class="pl-5 ">
                            
                            <p class="text-h5 my-5 mb-2">This package is amazing for pets that have a regular routine of being left at home whilst their owner is at work. <br /><br /> This package Includes:</p>
                            <v-list class="furlist bg-orange-lighten-4 list-bottom">
                                <v-list-item
                                    v-for="item in pack1"
                                    :key="item"
                                    rounded
                                    class="custom-list-item long-list packages-long-list"
                                    :border="black"
                                >

                                    <v-list-item-content>
                                        <v-list-item-title class="v-list-title">{{ item }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="auto" style="height: 500px;">
                            <v-btn style="width: 170px; margin-top: 200px;" href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWF-ElxUNUNMMldHTE1QS1E3WTlDRzAxSlVIMVBGQi4u" target="_blank">Book Now</v-btn>
                        </v-col>
                    </v-row>
                </v-card> 

                <v-row class="ml-2 my-8">
                    <v-card class="mr-4"><p class="text-h4 px-5 mt-1">$120</p></v-card>
                    <h1 class="text-h3">Fur Baby Package</h1>
                </v-row>
                <v-card class="bg-orange-lighten-4 section">
                    <v-row>
                        <v-col cols="auto">
                            <v-img
                            src="/fur_packs/fur1.jpg"
                            :height="500"
                            :width="350"
                            cover
                            ></v-img>
                        </v-col>
                        <v-col cols="8"class="pa-5 pr-10">
                            <p class="text-h5 my-5">This is our most popular package!! This package is great for any owners that loves regular updates and doesn’t have pets that suffer from separation anxiety.<br /><br />This Package Includes:</p>
                            <v-list class="furlist bg-orange-lighten-4">

                                <v-list-item rounded class="custom-list-item" :border="black" style="background-color: #BA68C8 !important;">
                                    <v-list-item-title style="color: white;">INCLUDES EVERYTHING FROM THE INDEPENDENT FUR CHILD PACKAGE</v-list-item-title>
                                </v-list-item>

                                <v-list-item
                                    v-for="item in pack2"
                                    :key="item"
                                    rounded
                                    class="custom-list-item"
                                    :border="black"
                                >

                                    <v-list-item-content>
                                        
                                        <v-list-item-title>{{ item }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="auto" style="height: 500px;">
                            <v-btn style="width: 170px; margin-top: 200px;" href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWF-ElxUNUNMMldHTE1QS1E3WTlDRzAxSlVIMVBGQi4u" target="_blank">Book Now</v-btn>
                        </v-col>
                    </v-row>
                </v-card>

                <v-row class="ml-2 my-8">
                    <v-card class="mr-4"><p class="text-h4 px-5 mt-1">$250</p></v-card>
                    <h1 class="text-h3">The Separation Anxiety Package</h1>
                </v-row>

                <v-card class="bg-orange-lighten-4">
                    <v-row>
                        <v-col cols="auto">
                            <v-img
                            src="/fur_packs/fur2.jpg"
                            :height="500"
                            :width="350"
                            cover
                            ></v-img>
                        </v-col>
                        <v-col cols="8" class="pa-5 pr-10">
                            <p class="text-h5 my-5 mb-2">This package is the best package for any pets that suffer from separation anxiety and require the petsitter to be with your pet consistently throughout the booking. If you as the owner also suffer from separation anxiety from your beloved pets this package includes 6-10 updates daily and a FaceTime call to you every second day<br /><br />This Package Includes:</p>
                            <v-list class="furlist bg-orange-lighten-4">

                                <v-list-item rounded class="custom-list-item" :border="black" style="background-color: #BA68C8 !important;">
                                    <v-list-item-title style="color: white;">INCLUDES EVERYTHING FROM THE INDEPENDENT FUR CHILD PACKAGE</v-list-item-title>
                                </v-list-item>

                                <v-list-item
                                    v-for="item in pack3"
                                    :key="item"
                                    rounded
                                    class="custom-list-item"
                                    :border="black"
                                >

                                    <v-list-item-content>
                                        
                                        <v-list-item-title>{{ item }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col cols="auto" style="height: 500px;">
                            <v-btn style="width: 170px; margin-top: 200px;" href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAWF-ElxUNUNMMldHTE1QS1E3WTlDRzAxSlVIMVBGQi4u" target="_blank">Book Now</v-btn>
                        </v-col>
                    </v-row>
                    </v-card>
                
            <!-- </v-row> -->
        </v-responsive>
    </v-container>
</template>

<script setup>

</script>

<script>

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
    }
}


</script>

<style>

.section {
    width: 100%;
    margin: 20px 0;
}

</style>