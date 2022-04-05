<template>
  <img class="m-auto bg-[#000]" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld class="" msg="Hello Vue 3 + TypeScript + Vite" />
  <StockTickerInput />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HelloWorld from "./components/HelloWorld.vue";
import StockTickerInput from "./components/StockTickerInput.vue";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    StockTickerInput,
  },
});
</script>

<style src="./tailwind-loader.css"></style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
html, body {
  background-color: #282828;
}
</style>
