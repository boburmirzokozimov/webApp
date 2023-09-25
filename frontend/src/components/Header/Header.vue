<script setup>

import Button from "@/components/Button/Button.vue";
import {useTelegram} from "@/helpers/useTelegram";

const {onClose, user} = useTelegram()
</script>

<template>
  <div class="header">
    <Button @click="onClose">
      Close
    </Button>
    <span class="username">
      {{ user?.username }}
    </span>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.username {
  margin-left: auto;
}
</style>