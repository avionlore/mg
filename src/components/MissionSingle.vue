<script setup>
import { computed } from "vue";
import Missions from "../objects/Missions.js";
import MissionParameters from "@/objects/MissionParameters.js";
import { rollDice } from "@/logics/rollDice.js";

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
export default {
  name: "MissionSingle",
  props: ["missionNumber"],
};
</script>
<template>
  <div>
    <p>Mission # {{ missionNumber }}</p>
    <p>{{ computedMissionName }}</p>
    <p>{{ computedMissionParameter.parameterName }}</p>
    <p>{{ computedMissionDifficulty }}</p>
  </div>
</template>
<style></style>
