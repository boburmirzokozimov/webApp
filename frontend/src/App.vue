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
  <RouterView/>
</template>

<style scoped>

</style>
