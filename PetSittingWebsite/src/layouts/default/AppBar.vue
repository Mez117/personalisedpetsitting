<template>
  <v-app-bar flat color="grey-lighten-2">
    <!-- <v-app-bar-nav-icon icon="mdi-menu"></v-app-bar-nav-icon> -->
    <v-menu 
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn 
          icon="mdi-menu" 
          color="primary" 
          v-bind="props"
        ></v-btn>
      </template>
          <router-link 
            
            v-for="(item, index) in items"
            :key="index"
            :to="item.link"
            style="text-decoration: none;"
            ><v-btn 
              width="150"
              rounded="0"
              variant="flat" 
              color="primary"
            >{{ item.title }}
            </v-btn>
          </router-link>
    </v-menu>
    <v-app-bar-title>Personalised Petsitting</v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
  //
</script>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Petsitting', link: '/petsitting/'},
        { title: 'Fur Packages', link: '/packages/'},
      ],
    }),
  }
</script>
