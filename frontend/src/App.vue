<script setup>
import {RouterView} from 'vue-router'
import {useTelegram} from "@/helpers/useTelegram";
import {onMounted} from "vue";
import Header from "@/components/Header/Header.vue";

const {onToggleButton, tg} = useTelegram()
onMounted(() => {
  tg.ready()
})
</script>

<template>
  <Header/>
  <button @click="onToggleButton">
    toggle
  </button>
  <RouterView/>
</template>

<style scoped>

</style>
