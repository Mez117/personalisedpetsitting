<template>
  <div v-if="isLoaded">
    <router-view />
  </div>
  <div v-else>{{ console.log('notLoaded') }}</div>
</template>

<script>
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
      console.log('loaded');
    })
  }
}
</script>

<style> 
@import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');

.custom-list-item {
    background: rgb(37, 111, 129) !important;
    margin: 0 8px;
    border: 1px solid #e0e0e0;
    padding: 12px 16px;
    margin-bottom: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    width: 85%;
    text-align: center;
    color: white;
}

.long-list {
    display: inline-block !important;
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
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
}

.list-bottom {
  vertical-align: bottom;
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
    width: 30%;
    margin: 3px;
}

</style>