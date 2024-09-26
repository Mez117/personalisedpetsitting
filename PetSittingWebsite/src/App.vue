<template>
  <router-view />
</template>

<script setup>
  //
</script>

<style> 

.custom-list-item {
    background: rgba(255, 255, 255, 0.3) !important;
    margin: 0 10px;
    border: 1px solid #e0e0e0;
    padding: 12px 16px;
    margin-bottom: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    width: 85%;
    text-align: center;
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
}

.mint-green {
  background-color: #A8E6CF; 
  color: #2E2E2E; 
}

html {
  scroll-behavior: smooth;
}

</style>