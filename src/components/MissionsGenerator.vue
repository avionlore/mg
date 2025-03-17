<template>
  <h1>Missions Generator v0.1 (2025-03-16)</h1>
  <form v-on:submit.prevent="generateMissions">
    <MechClassSelect @emit-selected-mission-class="onSelectMissionClass" />
  </form>
  <p>Selected Mission Class: {{ selectedMissionClass }}</p>
  <span v-if="missionCount > 0" :key="componentKeyForReRendering">
    <p>Missions: {{ missionCount }}</p>
    <p v-for="n in parseInt(missionCount)" :key="n">
      <MissionSingle
        :missionNumber="n"
        :highestPossibleMechClass="selectedMissionClass"
      />
    </p>
  </span>
</template>
<script>
import { rollDice } from "../logics/rollDice.js";
import MissionSingle from "./MissionSingle.vue";
import MechClassSelect from "./MechClassSelect.vue";
import { ref } from "vue";

const componentKey = ref(0);
const selectedMissionClass = ref(1);

export default {
  name: "MissionsGenerator",
  components: {
    MissionSingle,
    MechClassSelect,
  },
  data() {
    return {
      missionCount: 0,
      componentKeyForReRendering: 0,
      selectedMissionClass: selectedMissionClass,
    };
  },
  methods: {
    generateMissions: function () {
      this.missionCount = rollDice(5);
      componentKey.value += 1;
      this.componentKeyForReRendering = componentKey.value;
    },
    onSelectMissionClass(value) {
      this.selectedMissionClass = value;
      this.missionCount = rollDice(5);
      componentKey.value += 1;
      this.componentKeyForReRendering = componentKey.value;
    },
  },
};
</script>
<style></style>
