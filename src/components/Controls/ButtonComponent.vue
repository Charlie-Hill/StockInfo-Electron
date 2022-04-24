<template>
  <button v-if="!linkTo" class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" :disabled="loadingState">
    <span v-if="loadingState"><i class="fas fa-circle-notch fa-spin"></i></span>
    <slot></slot>
  </button>
  <a v-else :href="linkTo" target="__window" class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" :disabled="loadingState">
    <span v-if="loadingState"><i class="fas fa-circle-notch fa-spin"></i></span>
    <slot></slot>
  </a>
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
    linkTo: {
      type: String,
      required: false
    }
  }
});
</script>
