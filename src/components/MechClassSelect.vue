<script setup>
import { ref } from "vue";

const selected = ref("");
</script>
<script>
import MechClasses from "@/objects/MechClasses";

export default {
  name: "MechClassSelect",
  data() {
    return { MechClasses: MechClasses };
  },
};
</script>
<template>
  <select
    v-model="selected"
    @change="$emit('emitSelectedMissionClass', selected)"
  >
    <option disabled value="">Please choose highest possible Mech class</option>
    <option
      v-for="mechClass in MechClasses"
      :key="mechClass.shortName"
      :value="mechClass.shortName"
    >
      {{ mechClass.fullName }}
    </option>
  </select>
</template>
<style></style>
