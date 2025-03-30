<script setup>
import { computed, defineProps } from "vue";
import Missions from "@/objects/Missions.js";
import MissionParameters from "@/objects/MissionParameters.js";
import { rollDice } from "@/logics/rollDice.js";
import GridStart from "./GridStart.vue";
import { useDifficultyStore } from "@/stores/Difficulty";

const props = defineProps({
  missionNumber: Number,
  highestPossibleMechClass: Number
});

const difficultyFromStore = useDifficultyStore();

const computedMissionMap = computed(() => {
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
  missionDifficultyAdded += difficultyFromStore.get(props.missionNumber);

  return missionDifficultyAdded;
});

</script>
<script>
import BlipIntel from "./BlipIntel.vue";
export default {
  name: "MissionSingle",
};
</script>
<template>
  <div class="mission">
    <p>Mission # {{ props.missionNumber }}</p>
    <p>Mission Map: {{ computedMissionMap }}</p>
    <p>Mission Parameter: {{ computedMissionParameter.parameterName }}</p>
    <p>Difficulty: {{ computedMissionDifficulty }}</p>
    <p>Player Start:<GridStart :positionNumber="rollDice(9)"/></p>
    <BlipIntel :highestPossibleMechClass="props.highestPossibleMechClass" :missionNumber="props.missionNumber"/>
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
