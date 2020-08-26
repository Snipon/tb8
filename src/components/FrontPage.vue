<template>
  <div class="page page__main">
    <h1>Tjørnebakken 8</h1>
    <div class="residents">
      <div
        v-for="(resident, index) in residents"
        :key="index"
        :class="`resident resident--${resident.type}`"
      >
        <a :href="`mailto:${resident.email}`">
          <font-awesome-icon :icon="resident.type" />
          <span class="resident__name">{{resident.name}}</span>
        </a>
      </div>
    </div>
    <Weather></Weather>
  </div>
</template>

<script>
import Weather from "@/components/Weather";

const residents = [
  { name: "Simon", type: "male", email: "simon@tb8.dk" },
  { name: "Ditte-Marie", type: "female", email: "ditte@tb8.dk" },
  { name: "Severin", type: "child", email: "severin@tb8.dk" },
  { name: "Karla", type: "baby", email: "karla@tb8.dk" }
];
export default {
  name: "FrontPage",
  components: {Weather},
  data: () => ({ residents })
};
</script>

<style scoped>
.page {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background: radial-gradient(white, silver);
  background-size: cover;
}

.residents {
  font-size: 5rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 18rem;
}

.resident {
  transition: transform 350ms ease;
  text-align: center;
  line-height: 1;
}

.resident a {
  color: inherit;
  text-decoration: none !important;
}

.resident:hover {
  transform: scale(1.2);
}

.resident:hover .resident__name {
  opacity: 1;
}

.resident__name {
  opacity: 0;
  display: block;
  margin: 0.5rem;
  font-size: 1rem;
  line-height: 1;
  transition: opacity 250ms linear;
}

.resident--baby {
  font-size: 0.4em;
}

.resident--child {
  font-size: 0.7em;
}
</style>
