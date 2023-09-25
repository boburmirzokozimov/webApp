<script setup>
const props = defineProps({
  text: String,
  class: String,
})
</script>

<template>
  <button :class=props.class class="button">
    <slot/>
  </button>
</template>

<style scoped>
.button {
  padding: 10px 15px;
  background: var(--th-theme-button-color);
  color: var(--th-theme-button-text-color);
  border: none;
  cursor: pointer;
}
</style>