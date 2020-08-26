<template>
  <div v-if="weather">{{ weather.temp + "\u00B0" + 'C'}}</div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Weather",
  methods: {
    async getWeather () {
      let res = await axios.get('/.netlify/functions/weather');

      return {
        temp: res.data.details.air_temperature
      };
    }
  },
  data: () => ({
    weather: null
  }),
  async mounted() {
    this.weather = await this.getWeather();
  }
}
</script>

<style scoped>

</style>
