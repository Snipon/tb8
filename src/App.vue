<template>
  <div id="app">
    <FrontPage />
  </div>
</template>

<script>
import FrontPage from "./components/FrontPage.vue";

export default {
  name: "app",
  components: {
    FrontPage
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
}
</style>
