<template>
  <h1>Missions Generator v0.7.5 (2025-07-13)</h1>
  <div>
    <button @click="showPageNumber = 1">Show Generator</button>
    <button @click="showPageNumber = 2">Show Mech Overview</button>
    <button @click="showPageNumber = 3">Show Mission Overview</button>
    <button @click="showPageNumber = 4">Show Mech Spawner</button>
  </div>
  <span v-if="showPageNumber == 1">
    <form v-on:submit.prevent="generateMissions">
      <MechClassSelect @emit-selected-mission-class="onSelectMissionClass" />
    </form>
    <span v-if="missionCount > 0" :key="componentKeyForReRendering">
      <p>Missions: {{ missionCount }}</p>
      <p v-for="n in parseInt(missionCount)" :key="n">
        <MissionSingle
          :missionNumber="n"
          :highestPossibleMechClass="selectedMissionClass"
        />
      </p>
    </span>
  </span>
  <span v-if="showPageNumber == 2"><OverviewMechs /> </span>
  <span v-if="showPageNumber == 3"><OverviewMissions /> </span>
  <span v-if="showPageNumber == 4"><MechSpawner /> </span>
</template>
<script>
import { rollDice } from "../logics/rollDice.js";
import MissionSingle from "./MissionSingle.vue";
import MechClassSelect from "./MechClassSelect.vue";
import OverviewMechs from "./OverviewMechs.vue";
import OverviewMissions from "./OverviewMissions.vue";
import MechSpawner from "./MechSpawner.vue";
import { ref } from "vue";

const componentKey = ref(0);
const selectedMissionClass = ref(1);

export default {
  name: "MissionsGenerator",
  components: {
    MissionSingle,
    MechClassSelect,
    OverviewMechs,
    OverviewMissions,
    MechSpawner,
  },
  data() {
    return {
      missionCount: 0,
      componentKeyForReRendering: 0,
      selectedMissionClass: selectedMissionClass,
      showPageNumber: 0,
    };
  },
  methods: {
    generateMissions: function () {
      this.missionCount = rollDice(15);
      componentKey.value += 1;
      this.componentKeyForReRendering = componentKey.value;
    },
    onSelectMissionClass(value) {
      this.selectedMissionClass = value;
      this.missionCount = rollDice(15);
      componentKey.value += 1;
      this.componentKeyForReRendering = componentKey.value;
    },
  },
};
</script>
<style></style>
