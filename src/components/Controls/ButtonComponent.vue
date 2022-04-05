<template>
  <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" :disabled="loadingState">
    <span v-if="loadingState"><i class="fas fa-circle-notch fa-spin"></i></span>
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "LMButton",
  props: {
    loadingState: {
      type: String,
      required: false,
    },
  }
});
</script>
