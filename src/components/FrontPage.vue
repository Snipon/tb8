<template>
  <div class="page page__main">
    <h1>Tjørnebakken 8</h1>
    <div class="residents">
      <div
        v-for="(resident, index) in residents"
        :key="index"
        :class="`resident resident--${resident.type}`"
      >
        <font-awesome-icon :icon="resident.type" />
        <span class="resident__name">{{resident.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
const residents = [
  { name: "Simon", type: "male" },
  { name: "Ditte-Marie", type: "female" },
  { name: "Severin", type: "child" },
  { name: "Karla", type: "baby" }
];
export default {
  name: "FrontPage",
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
  background: radial-gradient(white, palegreen, white);
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
