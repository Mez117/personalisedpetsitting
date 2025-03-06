<template>
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
      imageFiles: [
        '/PetSitting/lara_dogs/dog13.jpg',
        '/PetSitting/lara_dogs/dog5.jpg',
        '/PetSitting/lara_dogs/pbatchtwo1.jpg',
        '/PetSitting/lara_dogs/dog14.jpg',
        '/PetSitting/lara_dogs/dog8.jpg',
        '/PetSitting/lara_dogs/dog15.jpg',
        '/PetSitting/lara_dogs/pbatchtwo2.jpg',
        '/PetSitting/lara_dogs/dog9.jpg',
        '/PetSitting/lara_dogs/pbatchtwo3.jpg',
        '/PetSitting/lara_dogs/dog1.jpg',
        '/PetSitting/lara_dogs/pbatchtwo4.jpg',
        '/PetSitting/lara_dogs/dog2.jpg',
        '/PetSitting/fur_packs/fur3.jpg',
        '/PetSitting/logo/pet-logo.png',
        '/PetSitting/logo/square.png',
        '/PetSitting/reviews/r1.jpg',
        '/PetSitting/reviews/r2.jpg',
        '/PetSitting/reviews/r3.jpg',
        '/PetSitting/reviews/r4.jpg',
      ],
    }
  },
  methods: {
    preloadImages(urls) {
      return new Promise((resolve) => {
      let loadedCount = 0;

        urls.forEach((url) => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            loadedCount++;
            if (loadedCount === urls.length) {
              resolve();
            }
          };
        });
      });
    }
  },
  mounted() {
    this.preloadImages(this.imageFiles).then(() => {
      this.isLoaded = true
    })
  },
  setup() {
    const allPhotos = ref([
      { src: '/PetSitting/lara_dogs/dog3.jpg' },
      { src: '/PetSitting/lara_dogs/dog4.jpeg' },
      { src: '/PetSitting/lara_dogs/dog6.jpg' },
      { src: '/PetSitting/lara_dogs/dog7.jpg' },
      { src: '/PetSitting/lara_dogs/dog10.jpg' },
      { src: '/PetSitting/lara_dogs/dog11.jpg' },
      { src: '/PetSitting/lara_dogs/dog12.jpg' },
      { src: '/PetSitting/lara_dogs/dog16.jpg' },
      { src: '/PetSitting/lara_dogs/dog16.png' },
      { src: '/PetSitting/lara_dogs/dog17.jpg' },
      { src: '/PetSitting/reviews/r5.jpg' },
      { src: '/PetSitting/reviews/r6.jpg' },
      { src: '/PetSitting/reviews/r7.jpg' },
      { src: '/PetSitting/reviews/r8.jpg' },
      { src: '/PetSitting/reviews/r9.jpg' },
      { src: '/PetSitting/reviews/r10.jpg' },
      { src: '/PetSitting/reviews/r11.jpg' },
      { src: '/PetSitting/reviews/r12.jpg' },
      { src: '/PetSitting/reviews/r13.jpg' },
      { src: '/PetSitting/reviews/r14.jpg' },
      { src: '/PetSitting/reviews/r15.jpg' },
      { src: '/PetSitting/reviews/r16.jpg' },
      { src: '/PetSitting/reviews/r17.jpg' },
      { src: '/PetSitting/reviews/r18.jpg' },
      { src: '/PetSitting/lara_dogs/pbatchtwo5' },
      { src: '/PetSitting/lara_dogs/pbatchtwo6' },
      { src: '/PetSitting/lara_dogs/pbatchtwo7' },
      { src: '/PetSitting/lara_dogs/pbatchtwo8' },
      { src: '/PetSitting/lara_dogs/pbatchtwo9' },
      { src: '/PetSitting/fur_packs/fur1.jpg' },
      { src: '/PetSitting/fur_packs/fur2.jpg' },
    ]);

    const afterLoad = () => {
      allPhotos.value.forEach((photo) => {
        const img = new Image();
        img.src = photo.src;
      });
    };

    onMounted(() => {
      setTimeout(afterLoad, 3000)
    });

    return { afterLoad }
  }
}
</script>

<style> 
@import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');

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

.mint-green {
  background-color: #A8E6CF; 
  color: #2E2E2E; 
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

</style>