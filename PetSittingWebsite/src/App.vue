<template>

  <!-- Check if important images are loaded -->

  <div v-if="isLoaded">

    <router-view />

  </div>

</template>

<script>
import { ref, onMounted } from 'vue';

export default {

  data () {
    
    return {
      logIt: false,
      isLoaded: false,

      ////////////Important Images/////////////

      imageFiles: [
        '/reviews/r18.jpg',
        '/lara_dogs/dog13.jpg',
        '/lara_dogs/dog17.jpg',
        '/lara_dogs/dog16.png',
        '/lara_dogs/dog5.jpg',
        '/lara_dogs/pbatchtwo1.jpg',
        '/lara_dogs/dog14.jpg',
        '/lara_dogs/dog8.jpg',
        '/lara_dogs/dog15.jpg',
        '/lara_dogs/pbatchtwo2.jpg',
        '/lara_dogs/dog9.jpg',
        '/lara_dogs/pbatchtwo3.jpg',
        '/lara_dogs/dog1.jpg',
        '/lara_dogs/pbatchtwo4.jpg',
        '/lara_dogs/dog2.jpg',
        '/fur_packs/fur3.jpg',
        '/logo/pet-logo.png',
        '/logo/square.png',
        '/reviews/r1.jpg',
        '/reviews/r2.jpg',
        '/reviews/r3.jpg',
        '/reviews/r4.jpg',
      ],
    }
  },

  methods: {

    preloadImages(urls) { //Preload Important Images Function

      return new Promise((resolve) => {

        let loadedCount = 0;

        urls.forEach((url) => { //For each url or file in "urls"

          const img = new Image();
          img.src = url;

          img.onload = () => {

            loadedCount++; //When the image is loaded add 1 to the loadedCount

            if (loadedCount === urls.length) { //If the loadedCount is equal to the total number of images in "urls" 
              resolve(); //Resolves once all images are loaded
            }

          };
        });
      });
    }
  },

  mounted() {

    this.preloadImages(this.imageFiles).then(() => { //If the imageFiles are all loaded then....

      this.isLoaded = true //isLoaded is now set to true to show contents of page

    })
  },

  setup() {

    ////////////Remaining Images////////////////

    const allPhotos = ref([
      { src: '/lara_dogs/dog3.jpg' },
      { src: '/lara_dogs/dog4.jpeg' },
      { src: '/lara_dogs/dog6.jpg' },
      { src: '/lara_dogs/dog7.jpg' },
      { src: '/lara_dogs/dog10.jpg' },
      { src: '/lara_dogs/dog11.jpg' },
      { src: '/lara_dogs/dog12.jpg' },
      { src: '/lara_dogs/dog16.jpg' },
      { src: '/reviews/r5.jpg' },
      { src: '/reviews/r6.jpg' },
      { src: '/reviews/r7.jpg' },
      { src: '/reviews/r8.jpg' },
      { src: '/reviews/r9.jpg' },
      { src: '/reviews/r10.jpg' },
      { src: '/reviews/r11.jpg' },
      { src: '/reviews/r12.jpg' },
      { src: '/reviews/r13.jpg' },
      { src: '/reviews/r14.jpg' },
      { src: '/reviews/r15.jpg' },
      { src: '/reviews/r16.jpg' },
      { src: '/reviews/r17.jpg' },
      { src: '/lara_dogs/pbatchtwo5' },
      { src: '/lara_dogs/pbatchtwo6' },
      { src: '/lara_dogs/pbatchtwo7' },
      { src: '/lara_dogs/pbatchtwo8' },
      { src: '/lara_dogs/pbatchtwo9' },
      { src: '/fur_packs/fur1.jpg' },
      { src: '/fur_packs/fur2.jpg' },
    ]);

    const afterLoad = () => { //Preload Remaining Images by loading each photo in "allPhotos"

      allPhotos.value.forEach((photo) => {

        const img = new Image();
        img.src = photo.src;

      });
    };

    onMounted(() => {

      setTimeout(afterLoad, 3000) //Loads all the Remaining Images AFTER the site loads, so that they do not need to be loaded when viewing them for the first time

    });

    return { afterLoad }

  }
}
</script>

<style> 

.custom-list-item {
    background: rgb(37, 111, 129) !important;
    margin: 0 8px;
    border: 1px solid #e0e0e0;
    margin-bottom: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    width: 85%;
    text-align: center;
    color: white;
    min-height: 60px !important;
    align-items: center !important;
}

.long-list {
    display: inline-flex !important;
    justify-content: center;
    width: 45%;
}

.packages-long-list {
  width: 30%;
  vertical-align: top;
}

.phone-list {
  width: 90%;
  vertical-align: top;
}

.v-list-title {
  white-space: normal !important;
  overflow-wrap: break-word !important;
}

.custom-list-item:hover {
  background-color: #ffffff !important;
  color: black;
}

html {
  scroll-behavior: smooth;
}

.v-field--error:not(.v-field--disabled) .v-label.v-field-label {
  color: rgb(130, 26, 45);
}

.mobileBox {
    width: 44%;
    margin: 3px;
    height: 130px;
}

.swiper-button-prev {
    padding-right: 20px;
    color: white;
}

.swiper-button-next {
    padding-left: 20px;
    color: white;
}

img {
  image-rendering: auto;
}


</style>