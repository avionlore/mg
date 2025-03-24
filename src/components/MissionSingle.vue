<script setup>
import { computed } from "vue";
import Missions from "@/objects/Missions.js";
import MissionParameters from "@/objects/MissionParameters.js";
import { rollDice } from "@/logics/rollDice.js";
import GridStart from "./GridStart.vue";

const computedMissionName = computed(() => {
  return Missions.mission[Math.floor(Math.random() * Missions.mission.length)]
    .missionName;
});

const computedMissionParameter = computed(() => {
  if (rollDice(3) == 1) {
    return MissionParameters.missionParameter[0];
  }
  return MissionParameters.missionParameter[
    Math.floor(Math.random() * MissionParameters.missionParameter.length)
  ];
});

const computedMissionDifficulty = computed(() => {
  let missionDifficultyAdded = 0;

  missionDifficultyAdded += computedMissionParameter.value.parameterDifficulty;

  return missionDifficultyAdded;
});
</script>
<script>
import BlipIntel from "./BlipIntel.vue";
export default {
  name: "MissionSingle",
  props: ["missionNumber", "highestPossibleMechClass"],
};
</script>
<template>
  <div class="mission">
    <p>Mission # {{ missionNumber }}</p>
    <p>{{ computedMissionName }}</p>
    <p>{{ computedMissionParameter.parameterName }}</p>
    <p>{{ computedMissionDifficulty }}</p>
    <p>Player Start:<GridStart :positionNumber="rollDice(9)"/></p>
    <BlipIntel :highestPossibleMechClass="highestPossibleMechClass"/>
  </div>
</template>
<style>
.mission {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: rgba(128, 128, 128, 0.5);
}
</style>
