<script setup>
import {RouterView} from 'vue-router'
import {onMounted} from "vue";

const tg = window.Telegram.WebApp

onMounted(() => {
  tg.ready()
})

const onClose = () => {
  tg.close()
}

</script>

<template>
  <button @click="onClose">Close</button>
  <RouterView/>
</template>

<style scoped>

</style>
