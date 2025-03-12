<template>

<v-container id="section1" align="center" class="h-100" style="max-width: 1500px;">

    <v-responsive>

        <!------------------------------------------------------Landing------------------------------------------------------------------>

        <v-row class="ma-3" >

            <v-col cols="12">
                <v-img src="/logo/square.png" style="max-width: 1000px;" draggable="false" />
            </v-col>

        </v-row>

        <h1 :class="[smAndDown ? 'text-h5 my-3' : 'text-h3 my-6']">
            Pet Care Personalised Your Way!</h1>

        <h1 class="my-6" :class="[smAndDown ? 'text-h4' : 'text-h2']">
            We love your pets.</h1>

        <!------------------------------------------------------Photos------------------------------------------------------------------>

        <v-row>

            <div>
                <div 
                v-for="item in dogpics"
                :key="item"
                class="boxes"
                :class="[smAndDown ? 'mobileBox' : null]"
                >
                    <img :src=" item " alt="" class="gap" />

                </div>
            </div>
            
        </v-row>

        <!------------------------------------------------------About Us------------------------------------------------------------------>

        <v-row justify="center" class="ma-0">
            
            <v-col :cols="[smAndDown ? '12' : mdAndDown ? '7' :  '6']" :class="[smAndDown ? 'pa-2 mt-4' : 'pa-10']">

                <h1 class="text-h2 text-left">
                    About Us</h1>

                <p class="mt-7 text-justify">
                    Personalised Petsitting was created to provide owners with a
                    pet care service they can tailor that their every need. To
                    help form coherent relationship with not only the pet
                    owner but the pets with a petsitter that they loves and cares
                    for them.
                </p>

                <h1 class="text-h2 mt-7 text-left">
                    History Behind the Business</h1>

                <p class="mt-7 text-justify">
                    Lara grew up with a love for anything animals. This love truly began with her childhood dog of 15 years Odie. To honour the start of her animal love Lara got her first tattoo. An outline of Odie’s ears. When Lara started this business and was designing a logo, she thought what better way to honour her origin love for animal than to make her Odie tattoo, the logo! 
                </p>

            </v-col>
            
            <v-col :cols="[smAndDown ? '12' : mdAndDown ? '5' : '4']" :class="[smAndDown ? 'pa-2 mt-4' : 'pa-10']">

                <div :style="[smAndDown ? '' : mdAndDown ? 'height: 390px; padding-top: 20px;' : '']">
                    
                    <h1 :class="[smAndDown ? 'text-center' : 'text-left']" class="text-h4">
                        Getting to know our Personalised Petsitter Lara</h1>

                    <p class="mt-7 text-justify">
                        Lara has an abundance of love for anything with 4 legs, the bigger the better is her motto when it comes to dogs. She has been petsitting for over 4 years, she currently works in the animal care industry and has been for over 1 year. Lara not only has her Certificate 2 in Animals Studies, she also has her animal first aid and is a wizard at administering medication to any types of pets. Lara has quite the nack for looking after pets that aren’t hers as she has fosters over 20 animals from the RSPCA, from a mum and her 7 puppies, 2 rescue kittens for over 2 months, an 8 week old Great Dane pup for 8 months and many more. 
                    </p>

                </div>
                
            </v-col>
            
        </v-row>

        <!------------------------------------------------------Links------------------------------------------------------------------>
        
        <v-row justify="center" class="mt-6">

            <v-col :cols="[smAndDown ? '4' : '2']">
                <v-btn class="w-100 bg-purple" :size="xs ? 'small' : 'large'" to="/packages" @click="scrollToTopAfter()">Packages</v-btn>
            </v-col>

            <v-col :cols="[smAndDown ? '4' : '2']">
                <v-btn class="w-100 bg-purple" :size="xs ? 'small' : 'large'" to="/bookings" @click="scrollToTopAfter()">Booking</v-btn>
            </v-col>

            <v-col :cols="[smAndDown ? '4' : '2']">
                <v-btn class="w-100 bg-purple" :size="xs ? 'small' : 'large'" to="reviews" @click="scrollToTopAfter()">Reviews</v-btn>
            </v-col>

            <v-col :cols="[smAndDown ? '4' : '2']">
                <v-btn class="w-100 bg-purple" :size="xs ? 'small' : 'large'" to="gallery" @click="scrollToTopAfter()">Gallery</v-btn>
            </v-col>

            <v-col :cols="[smAndDown ? '4' : '2']">
                <v-btn class="w-100 bg-purple" :size="xs ? 'small' : 'large'" to="faqs" @click="scrollToTopAfter()">FAQs</v-btn>
            </v-col>

        </v-row>

        <!------------------------------------------------------Inquiry Form------------------------------------------------------------------>

        <v-row class="mt-10">

            <v-col cols="12">

                <h1 class="text-h3">
                    Have any Questions?</h1>

                <h1 class="text-h4 mt-5">
                    Get in Touch</h1>

                <v-form 
                ref="form" 
                v-model="valid" 
                lazy-validation 
                style="max-width: 1200px;" 
                class="mb-15"
                >

                    <v-row class="my-5">

                        <v-col cols="6">

                            <v-text-field
                            v-model="firstName"
                            label="First Name"
                            :rules="[rules.required]"
                            required
                            hide-details
                            ></v-text-field>

                        </v-col>
                            
                        <v-col cols="6">

                            <v-text-field
                            v-model="lastName"
                            label="Last Name"
                            :rules="[rules.required]"
                            required
                            hide-details
                            ></v-text-field>

                        </v-col>
                    
                    </v-row>
                    
                    <v-text-field
                    v-model="email"
                    label="Email"
                    :rules="[rules.required, rules.email]"
                    required
                    hide-details
                    ></v-text-field>

                    <v-textarea
                    v-model="additionalInfo"
                    label="What's your inquiry"
                    class="mt-5"
                    auto-grow
                    :rules="[rules.required]"
                    required
                    hide-details
                    ></v-textarea>

                    <v-btn 
                    @click="submitForm" 
                    :disabled="!valid" 
                    class="mt-5" 
                    justify-self="center"
                    >
                    Submit Inquiry</v-btn>
                    
                </v-form>
            </v-col>
        </v-row>
    </v-responsive>
</v-container>

</template>

<script>
import emailjs from '@emailjs/browser';
import { useDisplay } from 'vuetify'

export default {

    data() {

        return {
            valid: false,
            firstName: '',
            lastName: '',
            email: '',
            additionalInfo: '',
            rules: {
                required: value => !!value || 'Required.',
                email: value => /.+@.+\..+/.test(value),
            },
            formSubmitted: false,
            dogpics: [
                '/PetSitting/reviews/r18.jpg',
                '/PetSitting/lara_dogs/dog5.jpg',
                '/PetSitting/lara_dogs/dog14.jpg',
                '/PetSitting/lara_dogs/dog8.jpg',
                '/PetSitting/lara_dogs/dog15.jpg',
                '/PetSitting/lara_dogs/dog9.jpg',
                '/PetSitting/lara_dogs/dog17.jpg',
                '/PetSitting/lara_dogs/dog16.png',
            ],
        };
    },

    methods: {

        scrollToTopAfter() {

            setTimeout(() => { 

                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

            }, 50);

            return;
        },

        submitForm() {

            this.formSubmitted = true;

            if (this.$refs.form.validate()) {

                const templateParams = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    additionalInfo: this.additionalInfo,
                };

                emailjs.send("service_3uq0j9x", "template_xci4bq8", templateParams, { publicKey: 'y28Njxa62kEbnjheZ',})
                    .then(() => alert('Booking request sent!'))
                    .catch(error => console.error('Failed to send booking request:', error));
            }
        },
    },

    setup() {

        const { smAndDown, mdAndUp, mdAndDown, xs } = useDisplay();

        return {
            smAndDown,
            mdAndUp,
            mdAndDown,
            xs,
        };
    },
};
</script>

<style>

main {
    background-color: rgba(56, 128, 147, 1);
    color: white;
}

.boxes {
    border: 5px solid #000;
    height: 200px;
    width: 21%;
    margin: 16px;
    display: inline-block;
}

.tiny-boxes {
    height: 175px;
    width: 40%;
    margin: 0;
    border-radius: 40px;
    overflow: hidden;
}

.big-img {
    height: 250px;
    width: 250px;
}

.gap {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>