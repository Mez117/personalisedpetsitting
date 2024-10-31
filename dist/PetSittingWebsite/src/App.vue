<template>
  <router-view />
</template>

<script setup>
  //
</script>

<style> 
@import url('https://fonts.googleapis.com/css2?family=Concert+One&display=swap');

.custom-list-item {
    background: rgba(56, 128, 147, 1) !important;
    margin: 0 10px;
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
  width: 31%;
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

</style>