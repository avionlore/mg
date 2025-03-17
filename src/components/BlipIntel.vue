<script setup>
import MechClasses from "@/objects/MechClasses.js";
import { defineProps } from "vue";
const props = defineProps(["highestPossibleMechClass"]);

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
  <p>Blips ({{ highestPossibleMechClassObject.fullName }})</p>
</template>
<style></style>
