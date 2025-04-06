<script setup>
import { computed, ref } from "vue";
import Missions from "@/objects/missions/Missions";

const computedChosenMission = computed(() => {
  let missionKeys = Object.keys(Missions);

  return Missions[missionKeys[Math.floor(Math.random() * missionKeys.length)]];
});

const showDescription = ref(false);
</script>
<template>
  <p>{{ computedChosenMission.longName }}</p>
  <button @click="showDescription = true">Show Description</button>
  <div v-if="showDescription">
    <p>Description: {{ computedChosenMission.missionDescription }}</p>
    <p>Setup:</p>
    <p
      v-for="(setupStep, index) in computedChosenMission.missionSetupSteps"
      :key="setupStep"
    >
      {{ index }}: {{ setupStep.description }}
    </p>
    <p>Goals:</p>
    <p v-for="(goal, index) in computedChosenMission.missionGoals" :key="goal">
      {{ index }}: {{ goal.description }}
    </p>
    <p>Parameters:</p>
    <p
      v-for="(parameter, index) in computedChosenMission.missionParameters"
      :key="parameter"
    >
      {{ index }}: {{ parameter.parameter.description }} {{ parameter.value }}
    </p>
    <p>Constraints:</p>
    <p
      v-for="(constraint, index) in computedChosenMission.missionConstraints"
      :key="constraint"
    >
      {{ index }}: {{ constraint.description }}
    </p>
  </div>
</template>
<style></style>
