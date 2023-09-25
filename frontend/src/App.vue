<script setup>
import {RouterView} from 'vue-router'
import {useTelegram} from "@/helpers/useTelegram";
import {onMounted} from "vue";

const {onToggleButton, tg} = useTelegram()
onMounted(() => {
  tg.ready()
})
</script>

<template>
  <button @click="onToggleButton">
    toggle
  </button>
  <RouterView/>
</template>

<style scoped>

</style>
