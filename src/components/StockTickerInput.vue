<template>
  <input class="shadow appearance-none border-gray-900 border focus:border-green-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="dataTicker" type="text" placeholder="Search stocks by ticker or company name..." />
  <div :if="dataTicker">{{ dataTicker }}</div>


  <LMButton @click="fetchTickerData">Fetch</LMButton>

  <p>Data is:</p>
  <span :if="dataData">{{ dataData }}</span>
</template>

<style scoped>
  input {
    background-color: #404040;
    color: #fff;
  }
</style>

<script lang="ts">
import { defineComponent } from "vue";
import LMButton from "./Controls/ButtonComponent.vue";

export default defineComponent({
  name: "StockTickerInput",
  components: {
    LMButton,
  },
  data: () => {
    return {
      dataTicker: null as null | string,
      dataData: null as unknown,
      test: "",
    };
  },
  methods: {
    async fetchTickerData() {
      if (this.dataTicker !== null) {
        const response = await fetch(`https://api.londonmarket.xyz/stockinfo/${this.dataTicker}`);
        const data = await response.json();
        this.dataData = data;
      }
    },
  },
});
</script>
