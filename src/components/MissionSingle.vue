<script setup>
import { computed, defineProps } from "vue";
import Maps from "@/objects/Maps.js";
import MapParameters from "@/objects/MapParameters.js";
import { rollDice } from "@/logics/rollDice.js";
import GridStart from "./GridStart.vue";
import { useDifficultyStore } from "@/stores/Difficulty";

const props = defineProps({
  missionNumber: Number,
  highestPossibleMechClass: Number,
});

const difficultyFromStore = useDifficultyStore();

const computedMissionMap = computed(() => {
  return Maps.map[Math.floor(Math.random() * Maps.map.length)].mapName;
});

const computedMapParameter = computed(() => {
  if (rollDice(3) == 1) {
    return MapParameters.mapParameter[0];
  }
  return MapParameters.mapParameter[
    Math.floor(Math.random() * MapParameters.mapParameter.length)
  ];
});

const computedMissionDifficulty = computed(() => {
  let missionDifficultyAdded = 0;

  missionDifficultyAdded += computedMapParameter.value.parameterDifficulty;
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
    <p>Mission Parameter: {{ computedMapParameter.parameterName }}</p>
    <p>Difficulty: {{ computedMissionDifficulty }}</p>
    <p>Player Start:<GridStart :positionNumber="rollDice(9)" /></p>
    <BlipIntel
      :highestPossibleMechClass="props.highestPossibleMechClass"
      :missionNumber="props.missionNumber"
    />
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
