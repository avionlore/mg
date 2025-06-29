<script setup>
import { computed, ref, defineProps } from "vue";
import Missions from "@/objects/missions/Missions";

const props = defineProps({
  chosenMission: Missions,
});

const computedChosenMission = computed(() => {
  return props.chosenMission;
});

const showDescription = ref(false);
</script>
<template>
  <p>{{ computedChosenMission.longName }}</p>
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
  </div>
</template>
<style></style>
