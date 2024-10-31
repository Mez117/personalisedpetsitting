<template>
<v-container id="section1" align="center">
    <v-responsive class="align-center text-center fill-height" style="max-width: 1500px">
            <v-row  
            align="center"
            style="
                background: rgb(56,128,147);
                background: linear-gradient(to right, rgba(56, 128, 147, 1),  rgba(56, 128, 147, 1) 20%, white 70%);
                border: 2px solid #aac9d1;
            " 
            class="ma-0 pa-5 rounded-lg " >
                <v-col cols="2">
                    <v-img src="/logo/square.png"  draggable="false" />
                </v-col>
                <v-col cols="8">
                    <h1 class="text-h3">Pet Care Personalised Your Way!</h1>
                </v-col >
                <v-col cols="2">
                    <v-btn size="large" class="bg-purple " @click="scrollToSection4">Learn More</v-btn>
                </v-col>
            </v-row>

            <v-row justify="center" class="pa-4 ma-0 mt-5 rounded-lg" id="section2">

                <v-col cols="5" class="pa-10 bg-purple-darken-2 rounded-lg" id="left-col">
                    <h1 class="text-h2 mt-1 text-left">About Us</h1>
                    <p class="mt-12 text-justify">
                    Personalised Petsitting was create to provide owners with a
                    pet care service they can tailor that their every need. To
                    help form coherent relationship with not only the pet
                    owner but the pets with a petsitter that they loves and cares
                    for them.
                    </p>
                    <h1 class="text-h4 mt-7 text-left" style="margin: 0 auto">Getting to know our Personalised Petsitter Lara</h1>
                    <p class="mt-7 text-justify" style="margin: 0 auto">
                    Lara has an abundance of love for anything with 4 legs, the bigger the better is her motto when it comes to dogs. She has been petsitting for over 4 years, she currently works in the animal care industry and has been for over 1 year. Lara not only has her Certificate 2 in Animals Studies, she also has her animal first aid and is a wizard at administering medication to any types of pets. Lara has quite the nack for looking after pets that aren’t hers as she has fosters over 20 animals from the RSPCA, from a mum and her 7 puppies, 2 rescue kittens for over 2 months, an 8 week old Great Dane pup for 8 months and many more. 
                    </p>
                </v-col>
 

                <v-col cols="7" class="pa-0 overflow-y-auto" style="height: 750px;">
                    <v-banner class="text-h5 justify-center mx-auto" sticky style="width: 90%;">We love your pets.</v-banner>
                        <div 
                            v-for="item in dogpics"
                            :key="item"
                            class="boxes"
                        >
                            <img :src=" item " alt="" class="gap" />
                        </div>
                </v-col>
                
            </v-row>
            <v-divider />
            <h1 class="mb-2 pa-7 package-title" >We've got a range of 3 amazing packages for whatever level of care best suits your needs!</h1>
            <v-divider class="mb-5"/>
            <div class="bg-white" id="section4">
                <v-carousel hide-delimiters class="h-auto">
                    <v-carousel-item>
                        <v-card class="border">
                            <v-row>
                                <v-col cols="3">
                                    <v-img
                                    :src="fur3"
                                    :height="550"
                                    cover
                                    ></v-img>
                                </v-col>
                                <v-col cols="8" class="pa-5">
                                    <h1 class="text-h3 pt-5">Independent Fur Child</h1>
                                    <h1 class="text-subtitle-1 pt-5 mb-10">This package is amazing for pets that have a regular routine of being left at home whilst their owner is at work.</h1>
                                    <v-list>
                                        <v-list-item
                                            v-for="item in pack1"
                                            :key="item"
                                            class="custom-list-item long-list rounded-lg"
                                            :border="black"
                                        >

                                            <v-list-item-content>
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                    <p class="text-subtitle-2">+ more</p>
                                    <router-link 
                                    to="/packages/"
                                    style="text-decoration: none;"
                                    ><v-btn 
                                        class="mt-6"
                                        rounded="0"
                                        variant="flat" 
                                        color="primary"
                                        >More Info and Booking
                                    </v-btn>
                                    </router-link>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-carousel-item>
                    <v-carousel-item>
                        <div class="d-flex justify-center">
                        <v-card class="border">
                            <v-row>
                                <v-col cols="3">
                                    <v-img
                                    :src="fur1"
                                    :height="550"
                                    cover
                                    ></v-img>
                                </v-col>
                                <v-col cols="8" class="pa-5">
                                    <h1 class="text-h3 pt-5">The Fur Baby Package</h1>
                                    <h1 class="text-subtitle-1 pt-5 mb-8">This is our most popular package!! This package is great for any owners that loves regular updates and doesn’t have pets that suffer from separation anxiety.This package></h1>
                                    <v-list class="furlist" align="center">

                                        <v-list-item class="custom-list-item rounded-lg" :border="black" style="background: white !important;">
                                            <v-list-item-title style="color: black;">INCLUDES EVERYTHING FROM THE INDEPENDENT FUR CHILD PACKAGE</v-list-item-title>
                                        </v-list-item>

                                        <v-list-item
                                            v-for="item in pack2"
                                            :key="item"
                                            rounded
                                            class="custom-list-item rounded-lg"
                                            :border="black"
                                        >

                                            <v-list-item-content>
                                                
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                    <router-link 
                                    to="/packages/"
                                    style="text-decoration: none;"
                                    ><v-btn 
                                        class="mt-3"
                                        rounded="0"
                                        variant="flat" 
                                        color="primary"
                                        >More Info and Booking
                                    </v-btn>
                                    </router-link>
                                </v-col>
                            </v-row>
                        </v-card>
                        </div>
                    </v-carousel-item>
                    <v-carousel-item>
                        <div class="d-flex justify-center">
                        <v-card class="border">
                            <v-row>
                                <v-col cols="3">
                                    <v-img
                                    :src="fur2"
                                    :height="550"
                                    cover
                                    ></v-img>
                                </v-col>
                                <v-col cols="8" class="pa-5">
                                    <h1 class="text-h3 pt-5">The Separation Anxiety Package</h1>
                                    <h1 class="text-subtitle-1 pt-5 mb-8">This package is the best package for any pets that suffer from separation anxiety and require the petsitter to be with your pet consistently throughout the booking. This package includes...</h1>
                                    <v-list class="furlist" align="center">

                                        <v-list-item class="custom-list-item rounded-lg" :border="black" style="background: white !important;">
                                            <v-list-item-title style="color: black;">INCLUDES EVERYTHING FROM THE INDEPENDENT FUR CHILD PACKAGE</v-list-item-title>
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
                                    <router-link 
                                    to="/packages/"
                                    style="text-decoration: none;"
                                    ><v-btn 
                                        class="mt-3"
                                        rounded="0"
                                        variant="flat" 
                                        color="primary"
                                        >More Info and Booking
                                    </v-btn>
                                    </router-link>
                                </v-col>
                            </v-row>
                        </v-card>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </div>
            <!-- :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange"-->
                <swiper 
                    class="mb-5 pa-10"
                    
                    :slides-per-view="3"
                    :space-between="50"
                    :navigation="true"
                    :pagination="{ clickable: true }"
                   

                    :loop="true"
                    id="section5"
                >

                    <swiper-slide>
                        <v-card class="pa-5 bg-cyan-darken-3 review-cards" variant="outlined" height="1000">
                            <div class="align-self-center">
                            <v-row>
                                <v-col>
                                    <v-img :src="r1" height="300" alt=""></v-img>
                                </v-col>
                                <v-col>
                                    <v-img :src="r2" height="300" alt=""></v-img>
                                </v-col>
                            </v-row>
                            <h1 class="text-h5 text-center mt-5">Emma, Ruari & Ted</h1>
                            <p class="mt-2">
                                Lara has looked after our Labrador, Ruari and cat, Ted several times over the past few years while also housesitting. She is trustworthy, reliable and caring. Lara LOVES animals and they love her. I think she is our dog’s favourite human - Ruari gets so excited when she sees her. She understands how to keep pets happy, safe and secure and I wouldn’t in recommending her. 
                            </p>
                            </div>
                        </v-card>
                    </swiper-slide>
                    <swiper-slide>
                        <v-card class="pa-5 bg-cyan-darken-3 review-cards" height="1000">
                            <v-img :src="r3" height="300" alt=""></v-img>
                            <h1 class="text-h5 text-center mt-5">Sally & Banjo </h1>
                            <p class="mt-2">
                                Lara looked after our much loved Golden Retriever, Banjo for 5 days whilst we were on holidays. Lara took the time to meet Banjo and learn his routine prior to our holiday. She cared for Banjo like he was in a 5 star hotel whilst at his own house! She checked in with us and provided updates during this time. She walked him regularly and played with him, building a strong friendship. Lara has a very caring nature and is trustworthy, making it easy for us to leave our beloved pet at home with her. We will definitely use Lara in the future which I am sure Banjo will love.   
                                
                            </p>
                        </v-card>
                    </swiper-slide>
                    <swiper-slide>
                        <v-card class="pa-5 bg-cyan-darken-3 review-cards" height="1000">
                            <v-img :src="r4" height="300" alt=""></v-img>
                            <h1 class="text-h5 text-center mt-5">Madison, Ruby & Hollie</h1>
                            <p class="mt-2">
                                Lara is very thoughtful and passionate about her job!  My family and I went away for 10 days to NZ and Lara took great care of the house and our fluffy companions. Ruby (dog) loved her daily walks and Holly (cat) just wanted to snuggle with Lara every chance she got! Would highly recommend her business to anyone looking for a great petsitter. 
                            </p>
                        </v-card>
                    </swiper-slide>
                    <swiper-slide>
                        <v-card class="pa-5 bg-cyan-darken-3 review-cards" height="1000">
                            <v-img :src="r5" height="300" alt=""></v-img>
                            <h1 class="text-h5 text-center mt-5">Taylor & Luna</h1>
                            <p class="mt-2">
                                Lara did an incredible job looking after my dog Luna while I was away for a month. She not only ensured Luna’s basic needs were meet, but she went the extra mile to provide her with fulfilling and enriching experiences. From long daily walks and enrichment to exciting trips to the beach, Lara truly understood Luna’s needs and catered to them with enthusiasm and dedication. Lara regularly provided updates, photos and messages which instantly eased my anxieties about being separated from Luna. Lara was always responsive and respectful about any requested I made. Most importantly, it was evident that Lara treated Luna with an abundance of love and attention. Her genuine affection for animals shone through in her interactions with Luna, making me confident that Luna was in the best hands!  Luna and I are truly grateful for her exceptional care and wouldn’t hesitate to recommending her to anyone needing a trusted pet sitter!
                            </p>
                        </v-card>
                    </swiper-slide>
                    <swiper-slide>
                        <v-card class="pa-5 bg-cyan-darken-3 review-cards" height="1000">
                            <v-row>
                                <v-col>
                                    <v-img :src="r6" height="300" alt=""></v-img>
                                </v-col>
                                <v-col>
                                    <v-img :src="r7" height="300" alt=""></v-img>
                                </v-col>
                            </v-row>
                            <h1 class="text-h5 text-center mt-5">Emma, Isabelle & Vasilli</h1>
                            <p class="mt-2">
                                Lara did an incredible job looking after my two cats. They absolutely adored Lara and were so comfortable around her they even suggled up to her, which is a BIG DEAL because they don’t snuggle up to just anyone. They were so happy with her which made us so happy with Lara.  Will definitely be booking Lara again in the future  
                            </p>
                        </v-card>
                    </swiper-slide>
                </swiper>
            <!-- <div class="bg-cyan-darken-3 pa-2">
                <div class="reviews">
                    <img src="https://picsum.photos/201/300" alt="">
                    <h1 class="text-h5">Emma, Ruari & Ted</h1>
                    <p>
                        Lara has looked after our Labrador, Ruari and cat, Ted several times over the past few years while also housesitting. She is trustworthy, reliable and caring. Lara LOVES animals and they love her. I think she is our dog’s favourite human - Ruari gets so excited when she sees her. She understands how to keep pets happy, safe and secure and I wouldn’t in recommending her. 
                    </p>
                </div>
                <div class="reviews">
                    <img src="https://picsum.photos/201/300" alt="">
                    <h1 class="text-h5">Sally & Banjo </h1>
                    <p>
                        Lara looked after our much loved Golden Retriever, Banjo for 5 days whilst we were on holidays. Lara took the time to meet Banjo and learn his routine prior to our holiday. She cared for Banjo like he was in a 5 star hotel whilst at his own house! She checked in with us and provided updates during this time. She walked him regularly and played with him, building a strong friendship. Lara has a very caring nature and is trustworthy, making it easy for us to leave our beloved pet at home with her. We will definitely use Lara in the future which I am sure Banjo will love.   
                        
                    </p>
                </div>
                <div class="reviews">
                    <img src="https://picsum.photos/201/300" alt="">
                    <h1 class="text-h5">Madison, Ruby & Hollie</h1>
                    <p>
                        Lara is very thoughtful and passionate about her job!  My family and I went away for 10 days to NZ and Lara took great care of the house and our fluffy companions. Ruby (dog) loved her daily walks and Holly (cat) just wanted to snuggle with Lara every chance she got! Would highly recommend her business to anyone looking for a great petsitter. 
                    </p>
                </div>
                <div class="reviews">
                    <img src="https://picsum.photos/201/300" alt="">
                    <h1 class="text-h5">Taylor & Luna</h1>
                    <p>
                        Lara did an incredible job looking after my dog Luna while I was away for a month. She not only ensured Luna’s basic needs were meet, but she went the extra mile to provide her with fulfilling and enriching experiences. From long daily walks and enrichment to exciting trips to the beach, Lara truly understood Luna’s needs and catered to them with enthusiasm and dedication. Lara regularly provided updates, photos and messages which instantly eased my anxieties about being separated from Luna. Lara was always responsive and respectful about any requested I made. Most importantly, it was evident that Lara treated Luna with an abundance of love and attention. Her genuine affection for animals shone through in her interactions with Luna, making me confident that Luna was in the best hands!  Luna and I are truly grateful for her exceptional care and wouldn’t hesitate to recommending her to anyone needing a trusted pet sitter!
                    </p>
                </div>
                <div class="reviews">
                    <img src="https://picsum.photos/201/300" alt="">
                    <h1 class="text-h5">Emma, Isabelle & Vasilli</h1>
                    <p>
                        Lara did an incredible job looking after my two cats. They absolutely adored Lara and were so comfortable around her they even suggled up to her, which is a BIG DEAL because they don’t snuggle up to just anyone. They were so happy with her which made us so happy with Lara.  Will definitely be booking Lara again in the future  
                    </p>
                </div>
            </div>
            <div class="bg-pink-lighten-4 pa-2">
                <div class="reviews packages">
                    <h1 class="text-h5">Independent Fur Child:</h1>
                    <p>
                        $85 a night <br /><br />This package is amazing for pets that have a regular routine of being left at home whilst their owner is at work. <br /><br />This package includes: 
                    </p>
                    <ul class="mt-5">
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
                </div>
                <div class="reviews packages">
                    <h1 class="text-h5">The Fur Baby Package:</h1>
                    <p>
                        $120 a night <br /><br />This is our most popular package!! <br /><br />This package is great for any owners that loves regular updates and doesn’t have pets that suffer from separation anxiety.<br /><br />This package INCLUDES everything in the Independent Fur Child, PLUS:
                    </p>
                    <ul class="mt-5">
                        <li>3-6 updates daily</li>
                        <li>Pet can be left a max of 6 hours </li>
                        <li>General tidy + sanitised all surfaces</li>
                    </ul>
                </div>
                <div class="reviews packages">
                    <h1 class="text-h5">The Separation Anxiety Package:</h1>
                    <p>
                        $250 a night<br /><br />This package is the best package for any pets that suffer from separation anxiety and require the petsitter to be with your pet consistently throughout the booking. <br /><br />If you as the owner also suffer from separation anxiety from your beloved pets this package includes 6-10 updates daily and a FaceTime call to you every second day!<br /><br />This package INCLUDES everything listed in package 1, PLUS:
                    </p>
                    <ul class="mt-5">
                        <li>6-10 daily updates</li>
                        <li>1 FaceTime every other day during the booking.</li>
                        <li>Spotless home</li>
                        <li>The petsitter not leaving your pets for more than 2 hours.</li>
                    </ul>
                </div>
            </div> -->
            <div class="bg-cyan-darken-2 mb-10 major-divs" style="padding: 2%">
                <v-row>
                    <v-col cols="5" align-self="center">
                        <h1 class="text-h2 mb-10">Up to Date Calender Availability</h1>
                    </v-col>
                    <v-col>
                        <VCalendar
                        :initial-page="{ month: 2, year: 2024 }"
                        :color="selectedColor"
                        :attributes="attrs"
                        :is-dark="true"
                        expanded
                        :columns="2"
                        />
                    </v-col>
                </v-row>
            </div>
            <div class="bg-purple-lighten-1 pa-2 major-divs mb-5" id="section6">
                <h1 class="text-h5 mt-5">Frequently Asked Questions</h1>
                <v-row class="ma-5 text-justify">
                    <v-col cols="6 pr-10">
                        <h1 class="text-h5 mt-4">Why choose Personalised Petsitting?</h1>
                        <p class="mt-2">Personalised Petsitting not only has over 4 years experiences in the field, we hold a certification, first aid and a large number of 5 star reviews from happy customers that can’t get enough of their petsitter.  </p>
                        <h1 class="text-h5 mt-4">Why Petsit at your own home?</h1>
                        <p class="mt-2">Your home is not only your pet’s most familiar enviroment it is also the safest pet your pet can be in. With the biggest change of you as the owner being there by only changing one </p>
                        <h1 class="text-h5 mt-4">How to book?</h1>
                        <p class="mt-2">Send through an inquiry or email personalisedpetsitting@outlook.com to create a booking.</p>
                    </v-col>

                    <v-col cols="6 pr-10">
                        <h1 class="text-h5 mt-4">Why is a meet and greet needed before the booking is confirmed?</h1>
                        <p class="mt-2">A meet and greet is a great way for everyone including your pets, a chance to met before the booking and ensure that not only you as the paying client but the Personalised Petsitter are happy and comfortable with everything. Meet and Greets are important because this is also the time that you petsitter gets all the information about everything they will need to know for the booking, for example the location of all your pets supplies, emergency contact, rough routine of your pet, house rule, etc. </p>
                        <h1 class="text-h5 mt-4">How far in advance should I book?</h1>
                        <p class="mt-2">The earlier the better is always best as it ensures that you secure the dates of your booking. If you are booking the separation anxiety package over a month is a minimal requirement as your petsitter will need to organised work related affairs. </p>
                    </v-col>
                </v-row>
            </div>
            <div class="bg-brown-lighten-3 pa-10 major-divs">
                <h1 class="text-h2">Have any Questions?</h1>
                <h1 class="text-h3 mt-5">Get in Touch</h1>
                <p class="mt-5">Want to make an enquiry for a booking?</p>
                <p class="mt-2">Name, contact details, how they want to be contacted, what type and how many pets, surburb, dates, package</p>
                <form @submit.prevent="submit">
                    <v-text-field
                    v-model="name.value.value"
                    :counter="10"
                    :error-messages="name.errorMessage.value"
                    label="Name"
                    ></v-text-field>

                    <v-text-field
                    v-model="phone.value.value"
                    :counter="7"
                    :error-messages="phone.errorMessage.value"
                    label="Phone Number"
                    ></v-text-field>

                    <v-text-field
                    v-model="email.value.value"
                    :error-messages="email.errorMessage.value"
                    label="E-mail"
                    ></v-text-field>

                    <!-- <v-select
                    v-model="select.value.value"
                    :error-messages="select.errorMessage.value"
                    :items="items"
                    label="Select"
                    ></v-select>

                    <v-checkbox
                    v-model="checkbox.value.value"
                    :error-messages="checkbox.errorMessage.value"
                    label="Option"
                    type="checkbox"
                    value="1"
                    ></v-checkbox> -->

                    <v-btn
                    class="me-4"
                    type="submit"
                    >submit
                    </v-btn>

                    <v-btn @click="handleReset">
                    clear
                    </v-btn>
                </form>
            </div>
    </v-responsive>
</v-container>
</template>

<script setup>

import { ref } from 'vue';


const selectedColor = ref('purple');
const attrs = ref([
  {
    key: 'tests',
    highlight: true,
    dates: [[new Date(2024, 1, 2), new Date(2024, 1, 4) ],
    [new Date(2024, 1, 13), new Date(2024, 1, 16)],
    [new Date(2024, 1, 19), new Date(2024, 1, 24)],
    [new Date(2024, 1, 26), new Date(2024, 1, 27)],
    [new Date(2024, 2, 14), new Date(2024, 2, 22)],
    ],
  },
]);

</script>

<script>
import { ref } from 'vue';

const selectedColor = ref('purple');
const attrs = ref([
  {
    key: 'tests',
    highlight: true,
    dates: [[new Date(2024, 1, 2), new Date(2024, 1, 4) ],
    [new Date(2024, 1, 13), new Date(2024, 1, 16)],
    [new Date(2024, 1, 19), new Date(2024, 1, 24)],
    [new Date(2024, 1, 26), new Date(2024, 1, 27)],
    [new Date(2024, 2, 14), new Date(2024, 2, 22)],
    ],
  },
]);
//////////////////////////////////////////////////////////////////////////////
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper'

import { useField, useForm } from 'vee-validate'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      name (value) {
        if (value?.length >= 2) return true

        return 'Name needs to be at least 2 characters.'
      },
      phone (value) {
        if (value?.length > 9 && /[0-9-]+/.test(value)) return true

        return 'Phone number needs to be at least 9 digits.'
      },
      email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
      },
      select (value) {
        if (value) return true

        return 'Select an item.'
      },
      checkbox (value) {
        if (value === '1') return true

        return 'Must be checked.'
      },
    },
})

const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const select = useField('select')
const checkbox = useField('checkbox')

const items = ref([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
])

const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})

SwiperCore.use([Navigation]).use([Pagination])

export default {
    name: 'Section1',
    name: 'Section2',
    // name: 'Content',
    data() {
        return {
            fur1: "/PetSitting/fur_packs/fur1.jpg",
            fur2: "/PetSitting/fur_packs/fur2.jpg",
            fur3: "/PetSitting/fur_packs/fur3.jpg",
            r1: "/PetSitting/reviews/r1.jpg",
            r2: "/PetSitting/reviews/r2.jpg",
            r3: "/PetSitting/reviews/r3.jpg",
            r4: "/PetSitting/reviews/r4.jpg",
            r5: "/PetSitting/reviews/r5.jpg",
            r6: "/PetSitting/reviews/r6.jpg",
            r7: "/PetSitting/reviews/r7.jpg",
            dogpics1: [
                '/lara_dogs/dog1.jpg',
                '/lara_dogs/dog2.jpg',
                '/lara_dogs/dog3.jpg',
            ],
            dogpics: [
                '/PetSitting/lara_dogs/dog1.jpg',
                '/PetSitting/lara_dogs/dog2.jpg',
                '/PetSitting/lara_dogs/dog3.jpg',
                '/PetSitting/lara_dogs/dog4.jpeg',
                '/PetSitting/lara_dogs/dog5.jpg',
                '/PetSitting/lara_dogs/dog6.jpg',
                '/PetSitting/lara_dogs/dog7.jpg',
                '/PetSitting/lara_dogs/dog8.jpg',
                '/PetSitting/lara_dogs/dog9.jpg',
                '/PetSitting/lara_dogs/dog10.jpg',
                '/PetSitting/lara_dogs/dog11.jpg',
                '/PetSitting/lara_dogs/dog12.jpg',
            ],
            pack1: [
                '1-3 Update Daily',
                'Daily Exercise',
                'Physical and Mental Enrichment',
                'Feeding all meals',
                'Administering of any Medication',
                "Maintaining pet's routine to the best of the petsitters ability",
                'Cleaning of all pets waste',
                'Grooming pet (if required, not including bath)',
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
            ],
            left: [],
        }
    },
    methods: {
        scrollToSection4() {
        const section = document.getElementById('section4');
            if (section) {
                let offsetTop;

                const sectionRect = section.getBoundingClientRect();
                offsetTop = sectionRect.top + window.scrollY - window.innerHeight / 2 + sectionRect.height / 2;

                window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
                });
            }
        },
    },
    

    components: {
        Swiper,
        SwiperSlide,
        handleSubmit,
        handleReset,
    },

    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            // onSwiper,
            // onSlideChange,
            // modules: [Scrollbar, A11y],
        };
    },
};
</script>

<style>

.para {
    margin: 10px 0;
}

.boxes {
    border: 5px solid #000;
    height: 200px;
    width: 200px;
    margin: 20px;
    display: inline-block;
}

.gap {
    width: 100%;
    height: 100%;
    object-fit: cover;;
}

.textbox {
    width: 300px;
    height: 200px;
    background-color: rgb(209, 162, 158);
    display: inline-block;
    padding: 20px;
    margin: 30px;
    color: black;
    vertical-align: top;
}

.textbox>p {
    vertical-align: bottom;
}

.reviews {
    display: inline-block;
    width: 15%;
    vertical-align: top;
    margin: 25px;
}

.packages {
    width: 20%;
    margin-right: 75px;
}

.packages>ul {
    text-align: left;
}

.packages>ul>li {
    padding-left: 7px;
}

.furlist>li {
    list-style-type: circle;
}

.swiper-button-prev {
    padding-right: 20px;
}

.swiper-button-next {
    padding-left: 20px;
}

.package-title {
    font-family: "Concert One", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 40px;
}

/* .fade {
    background-size: cover;
    background-image: url(/fur_packs/fur1.jpg);
    background-image: -webkit-linear-gradient(right, 
        rgba(255,224,178,0.95) 5%, 
        rgba(255,224,178, 0) 50%,
        rgba(255,224,178, 0) 100%,
        rgba(255,224,178,0) 50%
    ),
    url(/fur_packs/fur1.jpg);
} */
</style>

<style scoped>

.review-cards {
    border: 2px solid black;
    text-align: justify;
}

.major-divs {
    border-radius: 8px;
}


</style>