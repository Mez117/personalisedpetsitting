<template>
    <v-container style="max-width: 1500px;">
        <v-responsive>
            <h1 class="text-h3 my-5 text-center">Reviews from our customers</h1>
            <v-sheet
                justify="center"
                class="mx-auto"
                style="background-color: inherit"
            >
            <!-- <swiper 
                class="mb-5 py-2"
                :class="[xs ? '' : 'px-10']"
                :slides-per-view="[xs ? 1 : smAndDown ? 2 : 3]"
                :space-between="50"
                :navigation="true"
                :pagination="{ clickable: true }"
                :loop="true"
                id="section5"
            >
                <swiper-slide>
                    <v-card class="pa-5 card-background review-cards overflow-y-auto" :height="computedHeight - (computedHeight / 5)" style="max-height: 800px; min-width: 310px;">
                        <v-row justify="center mt-0">
                            <div class="boxes tiny-boxes mr-2">
                                <v-img :src="r1" class="gap" cover alt=""></v-img>
                            </div>
                            <div class="boxes tiny-boxes" style="margin-top: 75px">
                                <v-img :src="r2" class="gap" cover alt=""></v-img>
                            </div>
                        </v-row>
                        <h1 class="text-h5 text-center mt-10">Emma, Ruari & Ted</h1>
                        <p class="mt-2">
                            "Lara has looked after our Labrador, Ruari and cat, Ted several times over the past few years while also housesitting. She is trustworthy, reliable and caring. Lara LOVES animals and they love her. I think she is our dog’s favourite human - Ruari gets so excited when she sees her. She understands how to keep pets happy, safe and secure and I wouldn’t in recommending her." 
                        </p>
                    </v-card>
                </swiper-slide>
                <swiper-slide>
                    <v-card class="pa-5 review-cards overflow-y-auto text-center" :height="computedHeight - (computedHeight / 5)" style="max-height: 800px; min-width: 310px;">
                        <div class="boxes tiny-boxes big-img">
                            <v-img :src="r3" class="gap" cover alt=""></v-img>
                        </div>
                        <h1 class="text-h5 mt-5">Sally & Banjo </h1>
                        <p class="mt-2 text-justify">
                            Lara looked after our much loved Golden Retriever, Banjo for 5 days whilst we were on holidays. Lara took the time to meet Banjo and learn his routine prior to our holiday. She cared for Banjo like he was in a 5 star hotel whilst at his own house! She checked in with us and provided updates during this time. She walked him regularly and played with him, building a strong friendship. Lara has a very caring nature and is trustworthy, making it easy for us to leave our beloved pet at home with her. We will definitely use Lara in the future which I am sure Banjo will love.   
                            
                        </p>
                    </v-card>
                </swiper-slide>
                <swiper-slide>
                    <v-card class="pa-5 review-cards overflow-y-auto text-center" :height="computedHeight - (computedHeight / 5)" style="max-height: 800px; min-width: 310px;">
                        <div class="boxes tiny-boxes big-img">
                            <v-img :src="r4" class="gap" cover alt=""></v-img>
                        </div> 
                        <h1 class="text-h5 mt-5">Madison, Ruby & Hollie</h1>
                        <p class="mt-2 text-justify">
                            Lara is very thoughtful and passionate about her job!  My family and I went away for 10 days to NZ and Lara took great care of the house and our fluffy companions. Ruby (dog) loved her daily walks and Holly (cat) just wanted to snuggle with Lara every chance she got! Would highly recommend her business to anyone looking for a great petsitter. 
                        </p>
                    </v-card>
                </swiper-slide>
                <swiper-slide>
                    <v-card class="pa-5 review-cards overflow-y-auto text-center" :height="computedHeight - (computedHeight / 5)" style="max-height: 800px; min-width: 310px;">
                        <div class="boxes tiny-boxes big-img">  
                            <v-img :src="r5" class="gap" cover alt=""></v-img>
                        </div> 
                        <h1 class="text-h5 mt-5">Taylor & Luna</h1>
                        <p class="mt-2 text-justify">
                            Lara did an incredible job looking after my dog Luna while I was away for a month. She not only ensured Luna’s basic needs were meet, but she went the extra mile to provide her with fulfilling and enriching experiences. From long daily walks and enrichment to exciting trips to the beach, Lara truly understood Luna’s needs and catered to them with enthusiasm and dedication. Lara regularly provided updates, photos and messages which instantly eased my anxieties about being separated from Luna. Lara was always responsive and respectful about any requested I made. Most importantly, it was evident that Lara treated Luna with an abundance of love and attention. Her genuine affection for animals shone through in her interactions with Luna, making me confident that Luna was in the best hands!  Luna and I are truly grateful for her exceptional care and wouldn’t hesitate to recommending her to anyone needing a trusted pet sitter!
                        </p>
                    </v-card>
                </swiper-slide>
                <swiper-slide>
                    <v-card class="pa-5 review-cards overflow-y-auto text-center" :height="computedHeight - (computedHeight / 5)" style="max-height: 800px; min-width: 310px;">
                        <v-row justify="center mt-0">
                            <div class="boxes tiny-boxes mr-2" style="margin-top: 75px">
                                <v-img :src="r6" class="gap" cover alt=""></v-img>
                            </div>
                            <div class="boxes tiny-boxes">
                                <v-img :src="r7" class="gap" cover alt=""></v-img>
                            </div>
                        </v-row>
                        <h1 class="text-h5 mt-10">Emma, Isabelle & Vasilli</h1>
                        <p class="mt-2 text-justify">
                            Lara did an incredible job looking after my two cats. They absolutely adored Lara and were so comfortable around her they even suggled up to her, which is a BIG DEAL because they don’t snuggle up to just anyone. They were so happy with her which made us so happy with Lara.  Will definitely be booking Lara again in the future  
                        </p>
                    </v-card>
                </swiper-slide>
            </swiper> -->
            <v-slide-group
                v-model="model"
                class="pa-1 mx-auto card-slider"
                center-active
                show-arrows
            >
                <v-slide-group-item class="card-wrapper">
                    <v-card 
                        class="pa-5 ma-4 card review-cards overflow-y-auto text-center" 
                        :height="computedHeight - (computedHeight / 5)" 
                        style="max-height: 800px;"
                        @click="toggle"
                    >
                        <v-row justify="center mt-0">
                            <div class="boxes tiny-boxes mr-2">
                                <v-img :src="r1" class="gap" cover alt=""></v-img>
                            </div>
                            <div class="boxes tiny-boxes" style="margin-top: 75px">
                                <v-img :src="r2" class="gap" cover alt=""></v-img>
                            </div>
                        </v-row>
                        <h1 class="text-h5 mt-10">Emma, Ruari & Ted</h1>
                        <p class="mt-2 text-justify">
                            "Lara has looked after our Labrador, Ruari and cat, Ted several times over the past few years while also housesitting. She is trustworthy, reliable and caring. Lara LOVES animals and they love her. I think she is our dog’s favourite human - Ruari gets so excited when she sees her. She understands how to keep pets happy, safe and secure and I wouldn’t in recommending her." 
                        </p>
                    </v-card>
                </v-slide-group-item>
                <v-slide-group-item class="card-wrapper">
                    <v-card 
                        class="pa-5 ma-4 card review-cards overflow-y-auto text-center" 
                        :height="computedHeight - (computedHeight / 5)" 
                        style="max-height: 800px;"
                        @click="toggle"
                    >
                        <div class="boxes tiny-boxes big-img">
                            <v-img :src="r3" class="gap" cover alt=""></v-img>
                        </div>
                        <h1 class="text-h5 mt-5">Sally & Banjo </h1>
                        <p class="mt-2 text-justify">
                            Lara looked after our much loved Golden Retriever, Banjo for 5 days whilst we were on holidays. Lara took the time to meet Banjo and learn his routine prior to our holiday. She cared for Banjo like he was in a 5 star hotel whilst at his own house! She checked in with us and provided updates during this time. She walked him regularly and played with him, building a strong friendship. Lara has a very caring nature and is trustworthy, making it easy for us to leave our beloved pet at home with her. We will definitely use Lara in the future which I am sure Banjo will love.   
                            
                        </p>
                    </v-card>
                </v-slide-group-item>
                <v-slide-group-item class="card-wrapper">
                    <v-card 
                        class="pa-5 ma-4 card review-cards overflow-y-auto text-center" 
                        :height="computedHeight - (computedHeight / 5)" 
                        style="max-height: 800px;"
                        @click="toggle"
                    >
                        <div class="boxes tiny-boxes big-img">
                            <v-img :src="r4" class="gap" cover alt=""></v-img>
                        </div> 
                        <h1 class="text-h5 mt-5">Madison, Ruby & Hollie</h1>
                        <p class="mt-2 text-justify">
                            Lara is very thoughtful and passionate about her job!  My family and I went away for 10 days to NZ and Lara took great care of the house and our fluffy companions. Ruby (dog) loved her daily walks and Holly (cat) just wanted to snuggle with Lara every chance she got! Would highly recommend her business to anyone looking for a great petsitter. 
                        </p>
                    </v-card>
                </v-slide-group-item>
                <v-slide-group-item class="card-wrapper">
                    <v-card 
                        class="pa-5 ma-4 card review-cards overflow-y-auto text-center" 
                        :height="computedHeight - (computedHeight / 5)" 
                        style="max-height: 800px;"
                        @click="toggle"
                    >
                        <div class="boxes tiny-boxes big-img">  
                            <v-img :src="r5" class="gap" cover alt=""></v-img>
                        </div> 
                        <h1 class="text-h5 mt-5">Taylor & Luna</h1>
                        <p class="mt-2 text-justify">
                            Lara did an incredible job looking after my dog Luna while I was away for a month. She not only ensured Luna’s basic needs were meet, but she went the extra mile to provide her with fulfilling and enriching experiences. From long daily walks and enrichment to exciting trips to the beach, Lara truly understood Luna’s needs and catered to them with enthusiasm and dedication. Lara regularly provided updates, photos and messages which instantly eased my anxieties about being separated from Luna. Lara was always responsive and respectful about any requested I made. Most importantly, it was evident that Lara treated Luna with an abundance of love and attention. Her genuine affection for animals shone through in her interactions with Luna, making me confident that Luna was in the best hands!  Luna and I are truly grateful for her exceptional care and wouldn’t hesitate to recommending her to anyone needing a trusted pet sitter!
                        </p>
                    </v-card>
                </v-slide-group-item>
                <v-slide-group-item class="card-wrapper">
                    <v-card 
                        class="pa-5 ma-4 card review-cards overflow-y-auto text-center" 
                        :height="computedHeight - (computedHeight / 5)" 
                        style="max-height: 800px;"
                        @click="toggle"
                    >
                        <v-row justify="center mt-0">
                            <div class="boxes tiny-boxes mr-2" style="margin-top: 75px">
                                <v-img :src="r6" class="gap" cover alt=""></v-img>
                            </div>
                            <div class="boxes tiny-boxes">
                                <v-img :src="r7" class="gap" cover alt=""></v-img>
                            </div>
                        </v-row>
                        <h1 class="text-h5 mt-10">Emma, Isabelle & Vasilli</h1>
                        <p class="mt-2 text-justify">
                            Lara did an incredible job looking after my two cats. They absolutely adored Lara and were so comfortable around her they even suggled up to her, which is a BIG DEAL because they don’t snuggle up to just anyone. They were so happy with her which made us so happy with Lara.  Will definitely be booking Lara again in the future  
                        </p>
                    </v-card>
                </v-slide-group-item>
            </v-slide-group>
            <!-- <v-pagination
                v-if="xs"
                v-model="page"
                :length="5"
                @update:modelValue="onPageChange"
            ></v-pagination> -->
            </v-sheet>
        </v-responsive>
    </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useDisplay } from 'vuetify'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// SwiperCore.use([Navigation]).use([Pagination])
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data () {
        return {
            model: null,
            r1: "/PetSitting/reviews/r1.jpg",
            r2: "/PetSitting/reviews/r2.jpg",
            r3: "/PetSitting/reviews/r3.jpg",
            r4: "/PetSitting/reviews/r4.jpg",
            r5: "/PetSitting/reviews/r5.jpg",
            r6: "/PetSitting/reviews/r6.jpg",
            r7: "/PetSitting/reviews/r7.jpg",
        }
    },
    setup() {
        const computedHeight = ref(window.innerHeight);
        const computedWidth = ref(window.innerWidth);
        console.log(computedWidth);
        const updateHeight = () => {
            computedHeight.value = window.innerHeight;
        };
        const updateWidth = () => {
            computedWidth.value = window.innerWidth;
        };
        const { smAndDown, mdAndUp, xs, smAndUp } = useDisplay();

        onMounted(() => {
            window.addEventListener('resize', updateHeight);
            window.addEventListener('resize', updateWidth);
        });
        onUnmounted(() => {
            window.removeEventListener('resize', updateHeight);
            window.removeEventListener('resize', updateWidth);
        });

        return {
            computedHeight,
            smAndDown,
            smAndUp,
            mdAndUp, 
            xs,
        };
    }
}
</script>

<style scoped>

.review-cards {
    text-align: justify;
    /* background: linear-gradient(to top, rgba(56, 128, 147, 1),  rgba(56, 128, 147, 1) 70%, white 80%); */
    background-color: rgb(39, 123, 147);
    color: white;
    box-shadow: black;
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
    width: 420px;
}

.card-slider {
    max-width: 1500px;
}

@media (max-width: 1500px) {
    .card {
        width: 330px;
    }
    .card-slider {
        max-width: 1200px;
    }
}

@media (max-width: 1250px) {
    .card {
        width: 300px;
    }
    .card-slider {
        max-width: 780px;
    }
}

@media (max-width: 800px) {
    .card {
        width: 328px;
    }
    .card-slider {
        max-width: 390px;
    }
    ::v-deep(.v-slide-group__prev), ::v-deep(.v-slide-group__next) {
        min-width: 0px;
    }
}

@media (max-width: 400px) {
    .card {
        width: 282px;
    }
    .card-slider {
        max-width: 370px;
    }
    ::v-deep(.v-slide-group__prev), ::v-deep(.v-slide-group__next) {
        min-width: 0px;
    }
}
</style>