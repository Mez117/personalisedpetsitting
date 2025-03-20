<template>
    <v-container style="max-width: 1500px;">

        <v-responsive>

            <h1 class="text-center" :class="[xs ? 'text-h4 my-5' : 'text-h2 ma-7']">Reviews from our Customers</h1>

            <v-sheet
            justify="center"
            class="mx-auto"
            style="background-color: inherit"
            >

            <!-----------------------------------------Swiper component-------------------------------------------------->

            <swiper 
            :key="swiperKey"
            class="card-slider py-8"
            :slides-per-view="cardsPerSlide"
            :space-between="60"
            :navigation="true"
            :pagination="{
                dynamicBullets: true,
            }"
            :loop="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :effect="isMobile ? 'cards' : 'slide'"
            :modules="[EffectCards]"
            :grabCursor="true"
            >
            
            <!-----------------------------------------Review cards-------------------------------------------------->
            
                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center"
                    :elevation="isMobile ? 0 : 16" 
                    style="max-height: 800px;"
                    rounded="lg"
                    @click="toggle"
                    >
                        <v-row justify="center mt-0">
                            <div class="boxes tiny-boxes mr-2">
                                <v-img draggable="false" :src="r1" class="gap" cover alt="pet review photo">
                                    <p class="pet-names">
                                        Ted
                                    </p>
                                </v-img>
                            </div>
                            <div class="boxes tiny-boxes" style="margin-top: 75px">
                                <v-img draggable="false" :src="r2" class="gap" cover alt="pet review photo">
                                    <p class="pet-names">
                                        Rauri
                                    </p>
                                </v-img>
                            </div>
                        </v-row>
                        <h1 class="text-h5 mt-10">From Emma</h1>
                        <p class="mt-2 mobile-font">
                            Lara has looked after our Labrador, Ruari and cat, Ted several times over the past few years while also housesitting. She is trustworthy, reliable and caring. Lara LOVES animals and they love her. I think she is our dog’s favourite human - Ruari gets so excited when she sees her. She understands how to keep pets happy, safe and secure and I wouldn’t in recommending her.
                        </p>
                    </v-card>
                </swiper-slide>

                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center" 
                    style="max-height: 800px;"
                    :elevation="isMobile ? 0 : 16" 
                    @click="toggle"
                    >
                        <div class="boxes tiny-boxes big-img">
                            <v-img draggable="false" :src="r3" class="gap" cover alt="pet review photo">
                                <p class="pet-names single-name">
                                    Banjo
                                </p>
                            </v-img>
                        </div>
                        <h1 class="text-h5 mt-5">From Sally</h1>
                        <p class="mt-2 mobile-font">
                            Lara looked after our much loved Golden Retriever, Banjo for 5 days whilst we were on holidays. Lara took the time to meet Banjo and learn his routine prior to our holiday. She cared for Banjo like he was in a 5 star hotel whilst at his own house! She checked in with us and provided updates during this time. She walked him regularly and played with him, building a strong friendship. Lara has a very caring nature and is trustworthy, making it easy for us to leave our beloved pet at home with her. We will definitely use Lara in the future which I am sure Banjo will love.   
                            
                        </p>
                    </v-card>
                </swiper-slide>

                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center" 
                    style="max-height: 800px;"
                    :elevation="isMobile ? 0 : 16" 
                    @click="toggle"
                    >
                        <div class="boxes tiny-boxes big-img">
                            <v-img draggable="false" :src="r4" class="gap" cover alt="pet review photo">
                                <p class="pet-names single-name">
                                    Ruby & Hollie
                                </p>
                            </v-img>
                        </div> 
                        <h1 class="text-h5 mt-5">From Madison</h1>
                        <p class="mt-2 mobile-font">
                            Lara is very thoughtful and passionate about her job!  My family and I went away for 10 days to NZ and Lara took great care of the house and our fluffy companions. Ruby (dog) loved her daily walks and Holly (cat) just wanted to snuggle with Lara every chance she got! Would highly recommend her business to anyone looking for a great petsitter. 
                        </p>
                    </v-card>
                </swiper-slide>

                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center" 
                    style="max-height: 800px;"
                    :elevation="isMobile ? 0 : 16" 
                    @click="toggle"
                    >
                        <div class="boxes tiny-boxes big-img">  
                            <v-img draggable="false" :src="r5" class="gap" cover alt="pet review photo">
                                <p class="pet-names single-name">
                                    Luna
                                </p>
                            </v-img>
                        </div> 
                        <h1 class="text-h5 mt-5">From Taylor</h1>
                        <p class="mt-2 mobile-font">
                            Lara did an incredible job looking after my dog Luna while I was away for a month. She not only ensured Luna’s basic needs were meet, but she went the extra mile to provide her with fulfilling and enriching experiences. From long daily walks and enrichment to exciting trips to the beach, Lara truly understood Luna’s needs and catered to them with enthusiasm and dedication. Lara regularly provided updates, photos and messages which instantly eased my anxieties about being separated from Luna. Lara was always responsive and respectful about any requested I made. Most importantly, it was evident that Lara treated Luna with an abundance of love and attention. Her genuine affection for animals shone through in her interactions with Luna, making me confident that Luna was in the best hands!  Luna and I are truly grateful for her exceptional care and wouldn’t hesitate to recommending her to anyone needing a trusted pet sitter!
                        </p>
                    </v-card>
                </swiper-slide>

                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center" 
                    style="max-height: 800px;"
                    :elevation="isMobile ? 0 : 16" 
                    @click="toggle"
                    >
                        <v-row justify="center mt-0">
                            <div class="boxes tiny-boxes mr-2" style="margin-top: 75px">
                                <v-img draggable="false" :src="r6" class="gap" cover alt="pet review photo">
                                    <p class="pet-names">
                                        Isabelle
                                    </p>
                                </v-img>
                            </div>
                            <div class="boxes tiny-boxes">
                                <v-img draggable="false" :src="r7" class="gap" cover alt="pet review photo">
                                    <p class="pet-names">
                                        Vasilli
                                    </p>
                                </v-img>
                            </div>
                        </v-row>
                        <h1 class="text-h5 mt-10">From Emma</h1>
                        <p class="mt-2 mobile-font">
                            Lara did an incredible job looking after my two cats. They absolutely adored Lara and were so comfortable around her they even suggled up to her, which is a BIG DEAL because they don’t snuggle up to just anyone. They were so happy with her which made us so happy with Lara.  Will definitely be booking Lara again in the future  
                        </p>
                    </v-card>
                </swiper-slide>

                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center" 
                    style="max-height: 800px;"
                    :elevation="isMobile ? 0 : 16" 
                    @click="toggle"
                    >
                        <div class="boxes tiny-boxes big-img">  
                            <v-img draggable="false" :src="r16" class="gap" cover alt="pet review photo">
                                <p class="pet-names single-name">
                                    Douglas
                                </p>
                            </v-img>
                        </div> 
                        <h1 class="text-h5 mt-10">From Carol</h1>
                        <p class="mt-2 mobile-font">
                            Lara has looked after our beloved Douglas on numerous occasions. It gives us such peace of mind knowing Douglas can stay in his own environment and knowing that Lara gives him as much love and attention as we do. I trust her completely with our hosue and with Douglas. She also comes to visit him whenever she is in the area, and he is always super excited to see her. I couldn't recommend Lara highly enough.
                        </p>
                    </v-card>
                </swiper-slide>

                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center" 
                    style="max-height: 800px;"
                    :elevation="isMobile ? 0 : 16" 
                    @click="toggle"
                    >
                        <div class="boxes tiny-boxes big-img">  
                            <v-img draggable="false" :src="r17" class="gap" cover alt="pet review photo">
                                <p class="pet-names single-name">
                                    Kenny
                                </p>
                            </v-img>
                        </div> 
                        <h1 class="text-h5 mt-10">From Cassandra</h1>
                        <p class="mt-2 mobile-font">
                            Lara was a great communicator (particularly when our GSD seemed to have hurt himself) and our GSD seemed super relaxed and comfortable with her
                        </p>
                    </v-card>
                </swiper-slide>

                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center" 
                    style="max-height: 800px;"
                    :elevation="isMobile ? 0 : 16" 
                    @click="toggle"
                    >
                        <div class="boxes tiny-boxes big-img">  
                            <v-img draggable="false" :src="r18" class="gap" cover alt="pet review photo">
                                <p class="pet-names single-name">
                                    Harlee
                                </p>
                            </v-img>
                        </div> 
                        <h1 class="text-h5 mt-10">From Clarissa</h1>
                        <p class="mt-2 mobile-font">
                            I have no words! Lara, is bubbly, sweet and energetic, she didn't rest, she made sure she was available to play with my high energy girl. She is amazing! I couldn't recommend her any higher.
                        </p>
                    </v-card>
                </swiper-slide>

                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center" 
                    style="max-height: 800px;"
                    :elevation="isMobile ? 0 : 16" 
                    @click="toggle"
                    >
                        <div class="boxes tiny-boxes big-img">  
                            <v-img draggable="false" :src="r12" class="gap" cover alt="pet review photo">
                                <p class="pet-names single-name">
                                    Leo
                                </p>
                            </v-img>
                        </div> 
                        <h1 class="text-h5 mt-10">From Sarah</h1>
                        <p class="mt-2 mobile-font">
                            Lara is lovely, friendly and had great communication. She looked after my cat so well that he absolutely fell in love with her! She sent me regular updates and photos. I came home after 3 weeks away to a clean and tidy home and a very happy cat. Highly recommended!
                        </p>
                    </v-card>
                </swiper-slide>

                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center" 
                    style="max-height: 800px;"
                    :elevation="isMobile ? 0 : 16" 
                    @click="toggle"
                    >
                        <div class="boxes tiny-boxes big-img">  
                            <v-img draggable="false" :src="r15" class="gap" cover alt="pet review photo">
                                <p class="pet-names single-name">
                                    Piggy
                                </p>
                            </v-img>
                        </div> 
                        <h1 class="text-h5 mt-10">From Nerida</h1>
                        <p class="mt-2 mobile-font">
                            Lara took care of our anti social staff while we were away and we honestly couldn't be happier. She sent us regular updates with our girl's antics and by the end they were BFF'S. I recommend Lara to literally everyone I hear looking for a genuine animal loving pet sitter, it's hard to find someone you can trust but she is at the top of our list!
                        </p>
                    </v-card>
                </swiper-slide>

                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center" 
                    style="max-height: 800px;"
                    :elevation="isMobile ? 0 : 16" 
                    @click="toggle"
                    >
                        <v-row justify="center mt-0" no-gutters="">
                            <v-col cols="6">
                                <div class="boxes tiny-boxes mr-2" style="width: 90%">
                                    <v-img draggable="false" :src="r19" class="gap" cover alt="pet review photo">
                                        <p class="pet-names">
                                            Jess
                                        </p>
                                    </v-img>
                                </div>
                                <div class="boxes tiny-boxes" style="width: 90%">
                                    <v-img draggable="false" :src="r14" class="gap" cover alt="pet review photo">
                                        <p class="pet-names">
                                            Max
                                        </p>
                                    </v-img>
                                </div>
                            </v-col>
                            <v-col cols="6">
                                <div class="boxes tiny-boxes" style="width: 90%; margin-top: 75px;">
                                    <v-img draggable="false" :src="r20" class="gap" cover alt="pet review photo">
                                        <p class="pet-names">
                                            Bella
                                        </p>
                                    </v-img>
                                </div>
                            </v-col>
                        </v-row>
                        <h1 class="text-h5 mt-3">From Lisa & Dave</h1>
                        <p class="mt-2 mobile-font">
                            I would just like to say Lara did an amazing job looking after our fur babies. They were very spoilt with all the cuddles and attention. I got regular updates and photos. She left the house clean and tidy. I would highly recommend her services and we will be using her again. It's great to go away knowing our animals are in loving hands.
                        </p>
                    </v-card>
                </swiper-slide>

                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center" 
                    style="max-height: 800px;"
                    :elevation="isMobile ? 0 : 16" 
                    @click="toggle"
                    >
                        <v-row justify="center mt-0" no-gutters="">
                            <v-col cols="6">
                                <div class="boxes tiny-boxes mr-2" style="width: 90%">
                                    <v-img draggable="false" :src="r10" class="gap" cover alt="pet review photo">
                                        <p class="pet-names">
                                            Frankie
                                        </p>
                                    </v-img>
                                </div>
                                <div class="boxes tiny-boxes" style="width: 90%">
                                    <v-img draggable="false" :src="r9" class="gap" cover alt="pet review photo">
                                        <p class="pet-names">
                                            George
                                        </p>
                                    </v-img>
                                </div>
                            </v-col>
                            <v-col cols="6">
                                <div class="boxes tiny-boxes mr-2" style="width: 90%;">
                                    <v-img draggable="false" :src="r8" class="gap" cover alt="pet review photo">
                                        <p class="pet-names">
                                            Wynston
                                        </p>
                                    </v-img>
                                </div>
                                <div class="boxes tiny-boxes" style="width: 90%;">
                                    <v-img draggable="false" :src="r23" class="gap" cover alt="pet review photo">
                                        <p class="pet-names">
                                            Ben
                                        </p>
                                    </v-img>
                                </div>
                            </v-col>
                        </v-row>
                        <h1 class="text-h5 mt-3">From Leanne and Mario</h1>
                        <p class="mt-2 mobile-font">
                            Couldn't thank Lara enough for providing the love and care for our 3 dogs. We would highly recommend Lara to anyone needing their pets cared for it was very evident in the attachment and bond she created with our fur babies while we were away, you could truely see how much she loves her job!
                        </p>
                    </v-card>
                </swiper-slide>

                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center" 
                    style="max-height: 800px;"
                    :elevation="isMobile ? 0 : 16" 
                    @click="toggle"
                    >
                        <div class="boxes tiny-boxes big-img">  
                            <v-img draggable="false" :src="r21" class="gap" cover alt="pet review photo">
                                <p class="pet-names single-name">
                                    Roxy
                                </p>
                            </v-img>
                        </div> 
                        <h1 class="text-h5 mt-10">From Carmen & Sam</h1>
                        <p class="mt-2 mobile-font">
                            Lara has looked after our beloved and crazy English pointer on numerous occasions. She absolutely adors our dog and is always providing her with new and interesting enrichments that actually tire our fur baby out! Lara was amazing and we highly recommend her.
                        </p>
                    </v-card>
                </swiper-slide>

                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center" 
                    style="max-height: 800px;"
                    :elevation="isMobile ? 0 : 16" 
                    @click="toggle"
                    >
                        <v-row justify="center mt-0">
                            <div class="boxes tiny-boxes mr-2" style="margin-top: 75px">
                                <v-img draggable="false" :src="r13" class="gap" cover alt="pet review photo">
                                    <p class="pet-names">
                                        Indi
                                    </p>
                                </v-img>
                            </div>
                            <div class="boxes tiny-boxes">
                                <v-img draggable="false" :src="r22" class="gap" cover alt="pet review photo">
                                    <p class="pet-names">
                                        Lenny
                                    </p>
                                </v-img>
                            </div>
                        </v-row>
                        <h1 class="text-h5 mt-10">From Bec & Rohan</h1>
                        <p class="mt-2 mobile-font">
                            Lara is the most wonderful pet sitter and we can't recommend her enough! She treated our precious dogs like they were her own. She also looked after our house and left it clean and tidy. We have had Lara look after our dogs and house multiple times and will continue to use her. Thank you for everything Lara!!
                        </p>
                    </v-card>
                </swiper-slide>

                <swiper-slide>
                    <v-card 
                    class="pa-5 card review-cards overflow-y-auto text-center" 
                    style="max-height: 800px;"
                    :elevation="isMobile ? 0 : 16" 
                    @click="toggle"
                    >
                        <div class="boxes tiny-boxes big-img">  
                            <v-img draggable="false" :src="r11" class="gap" cover alt="pet review photo">
                                <p class="pet-names single-name">
                                    Ruby
                                </p>
                            </v-img>
                        </div> 
                        <h1 class="text-h5 mt-10">From Jess</h1>
                        <p class="mt-2 mobile-font">
                            I would highly recommend Lara to anyone looking for a pet sitter. I wouldn't trust my dog with anyone else. From our first communication until the end of her stays, Lara always such a pleasure to deal with. She absolutely adors my over energetic Staffy and does everything possible to make sure my dog is safe, happy and constantly entertained. She also leaves our house spotless everytime. Knowing I'm coming home to a clean house and happy dog is such an amazing feeling.
                        </p>
                    </v-card>
                </swiper-slide>
            </swiper>
            </v-sheet>
        </v-responsive>
    </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { EffectCards, EffectFade } from 'swiper/modules';
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { useDisplay } from 'vuetify'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-fade';

SwiperCore.use([Navigation]).use([Pagination])

export default {

    components: {
        Swiper,
        SwiperSlide,
    },

    data () {

        return { //All review Images
            model: null,
            r1: "/reviews/r1.jpg",
            r2: "/reviews/r2.jpg",
            r3: "/reviews/r3.jpg",
            r4: "/reviews/r4.jpg",
            r5: "/reviews/r5.jpg",
            r6: "/reviews/r6.jpg",
            r7: "/reviews/r7.jpg",
            r8: "/reviews/r8.jpg",
            r9: "/reviews/r9.jpg",
            r10: "/reviews/r10.jpg",
            r11: "/reviews/r17.jpg",
            r12: "/reviews/r12.jpg",
            r13: "/reviews/r13.jpg",
            r14: "/reviews/r14.jpg",
            r15: "/reviews/r15.jpg",
            r16: "/lara_dogs/pbatchtwo5.jpg",
            r17: "/lara_dogs/dog9.jpg",
            r18: "/lara_dogs/pbatchtwo4.jpg",
            r19: "/lara_dogs/dog12.jpg",
            r20: "/reviews/r16.jpg",
            r21: "/lara_dogs/dog10.jpg",
            r22: "/lara_dogs/pbatchtwo7.jpg",
            r23: "/reviews/r18.jpg"
        }
    },

    setup() {

        const computedWidth = ref(window.innerWidth); //Find the width of the page
        const cardsPerSlide = ref(3); //Cards shown per page dynamic valid
        const swiperKey = ref(0); 

        const updateWidth = () => { //Checks what size the computedWidth is and applies the correct value to cardsPerSlide dependent on the page width

            computedWidth.value = window.innerWidth;

            if (computedWidth.value >= 1250) {
                cardsPerSlide.value = 3

            } else if (computedWidth.value > 800) {
                cardsPerSlide.value = 2

            } else {
                cardsPerSlide.value = 1
            }
        };

        const { smAndDown, mdAndUp, xs, smAndUp } = useDisplay(); //Display sizes to use as reference points to adjust the layout depending on the page width
        const isMobile = computed(() => computedWidth.value <= 800) //isMobile = true when page width is less than or equal to 800

        onMounted(() => {
            updateWidth();
            window.addEventListener('resize', updateWidth); //Runs the updateWidth function whenever the window size is readjusted
        });
        onUnmounted(() => {
            window.removeEventListener('resize', updateWidth);
        });
        
        watch(isMobile, () => {
            swiperKey.value++;
        });

        return {
            computedWidth,
            cardsPerSlide,
            smAndDown,
            smAndUp,
            mdAndUp, 
            xs,
            modules: [EffectCards],
            isMobile,
            EffectCards,
            EffectFade,
            swiperKey,
        };
    }
}
</script>

<style scoped>

.review-cards {
    background-color: rgb(39, 123, 147);
    color: white;
}

.major-divs {
    border-radius: 8px;
}

.card-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: 380px !important;
    height: 700px;
    border-radius: 25px !important;
    border: 2px solid black;
}

.card-slider {
    max-width: 1500px;
    padding: 0 40px;
}

.pet-names {
    background-color: white;
    color: rgba(56, 128, 147, 1);
    margin: 0 auto;
    margin-top: 10px;
    width: max-content;
    padding: 5px 15px;
    border-radius: 7px;
}

.single-name {
    padding: 5px 30px;
}

/* Custom sizing for all the cards and swiper components for all screen sizes to ensure it always fits and that the content looks great no matter what size */

@media (max-width: 1500px) {
    .card {
        width: 300px !important;
    }
    .card-slider {
        max-width: 1200px;
    }
}

@media (max-width: 1250px) {
    .card {
        width: 280px !important;
        height: 675px;
    }
    .card-slider {
        max-width: 780px;
    }
}

@media (max-width: 800px) {
    .card {
        width: 335px !important;
        border-radius: 10px !important;
    }
    .card-slider {
        max-width: 500px;
        padding: 0 60px;
    }
    ::v-deep(.v-slide-group__prev), ::v-deep(.v-slide-group__next) {
        min-width: 0px;
    }
}

@media (max-width: 540px) {
    .card {
        width: 305px !important;
        border-radius: 10px !important;
        height: 660px;
    }
    .card-slider {
        max-width: 390px;
        padding: 0 20px;
    }
    ::v-deep(.v-slide-group__prev), ::v-deep(.v-slide-group__next) {
        min-width: 0px;
    }
}

@media (max-width: 420px) {
    .card {
        width: 250px !important;
        border-radius: 10px !important;
    }
    .card-slider {
        max-width: 335px;
    }
    ::v-deep(.v-slide-group__prev), ::v-deep(.v-slide-group__next) {
        min-width: 0px;
    }
    .mobile-font {
        font-size: 14px;
    }
}

@media (max-width: 360px) {
    .card {
        width: 222px !important;
    }
    .card-slider {
        padding: 0 10px;
        max-width: 295px;
    }
    .big-img {
        height: 220px;
        width: 220px;
    }
}
</style>