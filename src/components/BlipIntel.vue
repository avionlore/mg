<script setup>
import MechClasses from "@/objects/MechClasses.js";
import { defineProps, ref } from "vue";
const props = defineProps(["highestPossibleMechClass"]);
const showIntel = ref(false);

const classKey = Object.keys(MechClasses).find(
  (key) => key == props.highestPossibleMechClass
);
const highestPossibleMechClassObject = MechClasses[classKey];
</script>
<script>
export default {
  name: "BlipIntel",
};
</script>
<template>
  <button @click="showIntel = true">Show Intel</button>
  <div v-if="showIntel">
    <p>Blips ({{ highestPossibleMechClassObject.fullName }})</p>
  </div>
</template>
<style></style>
